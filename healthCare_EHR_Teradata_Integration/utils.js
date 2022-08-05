const axios = require("axios");
const { jwtHelper } = require('./jwtHelper');
const { EHR_ACCESS_TOKEN_ENDPOINT, EHR_PATIENT_LIST_ENDPOINT } = require('./constant');

const jwtToken = jwtHelper.issueJwt();

const get_access_token = async () => {
    console.log('JWT Token', jwtToken.token);
    try {
        const data = {
            'grant_type': 'client_credentials',
            'client_assertion_type': 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
            'client_assertion': jwtToken.token,
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        const access_token = await axios({
            method: 'post',
            url: `${EHR_ACCESS_TOKEN_ENDPOINT}`,
            data,
            headers: {
                contentType: `application/x-www-form-urlencoded`
            }
        });
        console.log({ access_token });
    } catch (error) {
        console.log("get access token failed", error.error);
    }
};

const get_patient_data = async access_token => {
    // To Do : Verify the JWT token
    return await axios({
        method: 'get',
        url: `${EHR_PATIENT_LIST_ENDPOINT}`
    });
};


module.exports = { get_access_token, get_patient_data }