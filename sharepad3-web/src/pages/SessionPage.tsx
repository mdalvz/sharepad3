import { useState, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useClient } from '../client/Client';
import { NameContext } from '../contexts/NameContext';
import { LoaderPage } from './LoaderPage';
import { UpdateResponse } from 'sharepad3-model';
import CodeEditor from '@uiw/react-textarea-code-editor';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #101010;
`;

const Top = styled.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
`;

const Info = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: row;
`;

const InfoEntry = styled.div<{noSelect?: boolean}>`
  padding: 10px;
  user-select: ${props => props.noSelect ? 'none' : 'auto'};
  &:hover {
    cursor: pointer;
    background-color: #303030;
  }
`;

const Logo = styled(Link)`
  padding: 0px 10px;
  color: #00CBE6;
  text-decoration: none;
  font-size: 2rem;
  user-select: none;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const NavEntry = styled.div<{ selected?: boolean }>`
  flex: 1;
  max-width: 200px;
  border-radius: 10px 10px 0px 0px;
  padding: 10px;
  background-color: ${props => props.selected ? '#202020' : '#101010' };
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  &:hover {
    cursor: pointer;
  }
  span {
    color: #00CBE6;
    font-weight: bold;
  }
`;

const EditorContainer = styled.div`
  height: calc(100vh - 34px);
  display: block;
  overflow: auto;
  background-color: #202020;
`;

const Editor = styled(CodeEditor)`
  min-height: 100%;
  font-size: 1rem;
  background-color: inherit;
  font-family: ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace;
`;

const LANGUAGES = [
  'txt',
  'java',
  'xml',
  'javascript',
  'typescript',
  'jsx',
  'tsx',
];

export type SessionPageParams = {
  sessionId?: string;
}

export function SessionPage() {
  const client = useClient();
  const navigate = useNavigate();
  const params = useParams<SessionPageParams>();
  const nameContext = useContext(NameContext)!;
  const [ userId, setUserId ] = useState<string | undefined>();
  const [ users, setUsers ] = useState<UpdateResponse>([]);
  const [ userFileType, setUserFileType ] = useState<string>(LANGUAGES[0]);
  const [ userFileData, setUserFileData ] = useState<string>('');
  const [ selectedUserIndex, setSelectedUserIndex ] = useState<number | undefined>();
  const [ updating, setUpdating ] = useState<boolean>(false);
  const editorSelectionRef = useRef<number | null>(null);
  const editorRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (!params.sessionId) {
      navigate('/');
    }
  }, [params]);

  useEffect(() => {
    if (!params.sessionId || userId) {
      return;
    }
    let canceled = false;
    client.open({
      sessionId: params.sessionId,
      userName: nameContext.userName,
    }).then((response) => {
      if (canceled) {
        return;
      }
      setUserId(response.userId);
    }).catch((error) => {
      if (canceled) {
        return;
      }
      if (error instanceof Error) {
        alert(`Open failed: ${error.message}`);
      }
      navigate('/');
    });
    return () => {
      canceled = true;
    };
  }, [userId]);

  useEffect(() => {
    if (!params.sessionId || !userId || updating) {
      return;
    }
    setUpdating(true);
    client.update({
      sessionId: params.sessionId,
      userId: userId,
      userFile: {
        fileType: userFileType,
        fileData: userFileData,
      },
    }).then((response) => {
      setTimeout(() => setUpdating(false), 100);
      setUsers(response);
    }).catch((error) => {
      if (error instanceof Error) {
        alert(`Update failed: ${error.message}`);
      }
      navigate('/');
    });
  });

  useEffect(() => {
    if (editorRef.current && editorSelectionRef.current !== null) {
      editorRef.current.selectionStart = editorSelectionRef.current;
      editorRef.current.selectionEnd = editorSelectionRef.current;
      editorSelectionRef.current = null;
    }
  }, [userFileData]);

  if (!params.sessionId || !userId) {
    return (
      <LoaderPage/>
    );
  }

  const isSelectedSelf = selectedUserIndex === undefined;
  const selectedUserFileType = isSelectedSelf ? userFileType : users[selectedUserIndex].userFile.fileType;
  const selectedUserFileData = isSelectedSelf ? userFileData : users[selectedUserIndex].userFile.fileData;

  return (
    <Container>
      <Top>
        <Logo to='/'>
          III
        </Logo>
        <Nav>
          <NavEntry
            selected={isSelectedSelf}
            onClick={() => {
              setSelectedUserIndex(undefined);
            }}>
            <span>
              YOU
            </span>
            &nbsp;
            {nameContext.userName}
          </NavEntry>
          {users.map((user, userIndex) => {
            return (
              <NavEntry
                key={userIndex}
                selected={userIndex === selectedUserIndex}
                onClick={() => {
                  setSelectedUserIndex(userIndex);
                }}>
                {user.userName}
              </NavEntry>
            );
          })}
        </Nav>
        <Info>
          <InfoEntry noSelect={true}>
            S: {editorRef.current?.selectionStart}
            &nbsp;
            E: {editorRef.current?.selectionEnd}
          </InfoEntry>
          <InfoEntry noSelect={true} onClick={() => {
            if (!isSelectedSelf) {
              return;
            }
            let index = LANGUAGES.indexOf(userFileType);
            let newIndex = index + 1 === LANGUAGES.length ? 0 : index + 1;
            setUserFileType(LANGUAGES[newIndex]);
          }}>
            Lang: {selectedUserFileType}
          </InfoEntry>
          <InfoEntry>
            {params.sessionId}
          </InfoEntry>
        </Info>
      </Top>
      <EditorContainer>
        <Editor
          ref={editorRef}
          language={selectedUserFileType === 'txt' ? undefined : selectedUserFileType}
          placeholder={isSelectedSelf ? 'Type something here...' : 'There\'s nothing here yet...'}
          value={selectedUserFileData}
          readOnly={!isSelectedSelf}
          spellCheck={false}
          onChange={(e) => {
            setUserFileData(e.target.value);
          }}/>
      </EditorContainer>
    </Container>
  );
  
}
