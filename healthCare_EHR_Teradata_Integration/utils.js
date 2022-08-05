const axios = require("axios");
const { jwtHelper } = require('./jwtHelper');
const { EHR_access_token_endpoint, EHR_patient_list_endpoint } = require('./constant');

const jwtToken = jwtHelper.issueJwt();

const get_access_token = async () => {
    console.log('JWT Token', jwtToken);
    try {
        const data = {
            grant_type: client_credentials,
            client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
            'Content-Type': 'application/x-www-form-urlencoded',
            client_assertion: jwtToken,
        };
        const access_header = {
            ContentType: `application/x-www-form-urlencoded`,
        };

        return await axios({
            method: 'post',
            url: `${EHR_access_token_endpoint}`,
            data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    } catch (error) {
        console.log("get access token failed", error.error);
    }
};

const get_patient_data = async access_token => {
    // To Do : Verify the JWT token
    return await axios({
        method: 'get',
        url: `${EHR_patient_list_endpoint}`
    });
};


module.exports = { get_access_token, get_patient_data }