"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.ass = void 0;
const Create_1 = require("../model/Create");
const Open_1 = require("../model/Open");
const Update_1 = require("../model/Update");
function ass() {
    console.log('ho');
}
exports.ass = ass;
class Client {
    constructor(endpoint) {
        this.endpoint = endpoint;
    }
    invoke(resource, requestBody, responseSchema) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch(this.endpoint + resource, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
            if (!response.ok) {
                throw new Error(`Invoke ${resource} failed: ${yield response.text()}`);
            }
            let responseBody = yield responseSchema.safeParseAsync(yield response.json());
            if (!responseBody.success) {
                throw new Error(`Invoke ${resource} failed: Invalid response body`);
            }
            return responseBody.data;
        });
    }
    create(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.invoke(Create_1.CreateResource, requestBody, Create_1.CreateResponseSchema);
        });
    }
    open(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.invoke(Open_1.OpenResource, requestBody, Open_1.OpenResponseSchema);
        });
    }
    update(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.invoke(Update_1.UpdateResource, requestBody, Update_1.UpdateResponseSchema);
        });
    }
}
exports.Client = Client;
