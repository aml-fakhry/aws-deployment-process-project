"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const config_1 = require("./config/config");
//Credentials are auto set according to the documentation https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html and the default profile is "Default anyway"
exports.s3 = new aws_sdk_1.default.S3({
    signatureVersion: 'v4',
    region: config_1.config.aws_region,
    params: { Bucket: config_1.config.aws_media_bucket },
});
// Generates an AWS signed URL for retrieving objects
function getGetSignedUrl(key) {
    const signedUrlExpireSeconds = 60 * 5;
    return exports.s3.getSignedUrl('getObject', {
        Bucket: config_1.config.aws_media_bucket,
        Key: key,
        Expires: signedUrlExpireSeconds,
    });
}
exports.getGetSignedUrl = getGetSignedUrl;
// Generates an AWS signed URL for uploading objects
function getPutSignedUrl(key) {
    const signedUrlExpireSeconds = 60 * 5;
    return exports.s3.getSignedUrl('putObject', {
        Bucket: config_1.config.aws_media_bucket,
        Key: key,
        Expires: signedUrlExpireSeconds,
    });
}
exports.getPutSignedUrl = getPutSignedUrl;
//# sourceMappingURL=aws.js.map