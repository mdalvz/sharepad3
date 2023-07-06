export declare class User {
    readonly userId: string;
    readonly userName: string;
    readonly userFile: {
        fileType: string;
        fileData: string;
    };
    constructor(userName: string);
}
