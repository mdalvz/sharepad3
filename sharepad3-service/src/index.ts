import express from 'express';
import cors from 'cors';
import { createWrapper } from './api/Create.js';
import { openWrapper } from './api/Open.js';
import { updateWrapper } from './api/Update.js';
import {
  CreateResource,
  OpenResource,
  UpdateResource,
} from 'sharepad3-model';

const app = express();
app.use(cors());
app.use(express.json());

app.post(CreateResource, createWrapper);
app.post(OpenResource, openWrapper);
app.post(UpdateResource, updateWrapper);

const PORT = process.env.PORT || 3000;
console.log(`Starting sharepad3-service on port ${PORT}...`);
app.listen(PORT);
