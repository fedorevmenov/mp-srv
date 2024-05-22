"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renameUploadedFile = exports.getMulterOptions = void 0;
const fs_1 = require("fs");
const multer_1 = require("multer");
const getMulterOptions = (relativePath = '') => ({
    limits: {
        fileSize: 1024 * 1024 * 3,
    },
    storage: (0, multer_1.diskStorage)({
        destination: (_req, _file, cb) => {
            const storagePath = process.cwd() + '/storage/';
            const splittedRelativePath = relativePath.split('/');
            let incrementalPath = storagePath;
            if (!(0, fs_1.existsSync)(storagePath + relativePath.toString().replace(',', '/'))) {
                splittedRelativePath.forEach((folder) => {
                    if (!(0, fs_1.existsSync)(incrementalPath + folder)) {
                        (0, fs_1.mkdirSync)(incrementalPath + folder);
                    }
                    incrementalPath += folder + '/';
                });
            }
            else {
                incrementalPath += relativePath.toString().replace(',', '/');
            }
            cb(null, incrementalPath);
        },
        filename: (_req, file, cb) => {
            cb(null, Math.ceil(Math.random() * 100000) + '_' + file.originalname);
        },
    }),
});
exports.getMulterOptions = getMulterOptions;
const renameUploadedFile = (filename, directory) => {
    const updatedFilename = changeFilenameSafe(filename);
    (0, fs_1.rename)(directory + filename, directory + updatedFilename, (err) => { if (err)
        throw err; });
    return updatedFilename;
};
exports.renameUploadedFile = renameUploadedFile;
const changeFilenameSafe = (origFilename) => (new Date().valueOf()
    + '_'
    + origFilename
        .replace(/\s/, '_')
        .replace(/[^.a-zA-Z0-9_-]/g, ''));
//# sourceMappingURL=fileUploader.js.map