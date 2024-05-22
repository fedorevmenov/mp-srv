/// <reference types="multer" />
export declare const getMulterOptions: (relativePath?: string) => {
    limits: {
        fileSize: number;
    };
    storage: import("multer").StorageEngine;
};
export declare const renameUploadedFile: (filename: string, directory: string) => string;
