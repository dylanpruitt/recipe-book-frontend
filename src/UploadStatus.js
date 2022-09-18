const UploadStatus = {
    UNUSED: Symbol("unused"),
    PENDING: Symbol("pending"),
    SUCCESS: Symbol("success"),
    ERROR: Symbol("error"),
};
Object.freeze(UploadStatus);

export default UploadStatus;