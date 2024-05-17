"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinioService = void 0;
const common_1 = require("@nestjs/common");
const Minio = __importStar(require("minio"));
let MinioService = class MinioService {
    constructor() {
        this.minioClient = new Minio.Client({
            endPoint: '139.180.208.52',
            port: 9000,
            useSSL: false,
            accessKey: 'hoanganh20042001',
            secretKey: 'hoanganh20042001',
        });
    }
    async uploadFile(bucketName, objectName, buffer, contentType) {
        try {
            const metaData = { 'Content-Type': contentType };
            const bufferSize = Buffer.byteLength(buffer);
            await this.minioClient.putObject(bucketName, objectName, buffer, metaData);
            const url = await this.minioClient.presignedGetObject(bucketName, objectName);
            return url;
        }
        catch (error) {
            throw new Error(`Failed to upload file: ${error.message}`);
        }
    }
    async editImage(bucketName, objectName, editFunction) {
        try {
            const originalObject = await this.minioClient.getObject(bucketName, objectName);
            const chunks = [];
            let size = 0;
            originalObject.on('data', (chunk) => {
                chunks.push(chunk);
                size += chunk.length;
            });
            await new Promise((resolve, reject) => {
                originalObject.on('end', resolve);
                originalObject.on('error', reject);
            });
            const originalBuffer = Buffer.concat(chunks, size);
            const editedBuffer = editFunction(originalBuffer);
            const editedUrl = await this.uploadFile(bucketName, objectName, editedBuffer, 'image/jpeg');
            return editedUrl;
        }
        catch (error) {
            throw new Error(`Failed to edit image: ${error.message}`);
        }
    }
    async deleteImage(imageUrl) {
        try {
            const url = new URL(imageUrl);
            const pathname = url.pathname.substring(1);
            const [bucketName, ...objectNameParts] = pathname.split('/');
            const objectName = objectNameParts.join('/');
            await this.minioClient.removeObject(bucketName, objectName);
        }
        catch (error) {
            throw new Error(`Failed to delete image: ${error.message}`);
        }
    }
};
MinioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MinioService);
exports.MinioService = MinioService;
//# sourceMappingURL=minio.service.js.map