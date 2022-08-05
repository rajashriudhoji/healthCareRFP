const jwt = require('jsonwebtoken');
const fs = require("fs");
const { EXPIRES_IN, ALGORITHM, AUTH_TOKEN_ENDPOINT_URL } = require('./constant');
const crypto = require('crypto');
const publicKey = fs.readFileSync('public.pem');
const privateKey = fs.readFileSync('private.pem');

const jwtHelper = {
    issueJwt: () => {
        const payload = getPayload();
        const signOptions = getSignOptions();
        const signedToken = jwt.sign(
            payload, privateKey, signOptions
        );
        return {
            token: `${signedToken}`
        };
    },
    verifyJwt: () => {

    }
}

const getSignOptions = () => {
    // Need to validate if this is 4 mins ahead of current EPOC time
    const expiryTime = (Math.floor(new Date().getTime() / 1000) + EXPIRES_IN);
    return {
        issuer: process.env.CLIENT_APP_ID,
        subject: process.env.CLIENT_APP_ID,
        audience: AUTH_TOKEN_ENDPOINT_URL,
        algorithm: ALGORITHM,
        expiresIn: EXPIRES_IN,
    }
}

const getPayload = () => {
    const ux_timeStamp = Math.floor(Date.now() / 1000);
    const jwt_id = crypto.randomBytes(16).toString('hex');
    return {
        jti: jwt_id,
        nbf: ux_timeStamp,
        iat: ux_timeStamp,
    }
}

module.exports = {
    jwtHelper
};