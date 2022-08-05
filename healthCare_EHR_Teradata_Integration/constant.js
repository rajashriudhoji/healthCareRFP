const ALGORITHM = 'RS384';
const EXPIRES_IN = '4m';
const EHR_ACCESS_TOKEN_ENDPOINT = 'https://fhir.epic.com/interconnect-fhir-oauth/oauth2/token';
const EHR_PATIENT_LIST_ENDPOINT = 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/STU3/eH2gs.0DWwl1z0kwTLvR-EnJgq-uQU.QmRFnyMdtLG6U3';
const AUTH_TOKEN_ENDPOINT_URL = 'https://fhir.epic.com/interconnect-fhir-oauth/oauth2/token';

module.exports = {
    ALGORITHM,
    EXPIRES_IN,
    EHR_ACCESS_TOKEN_ENDPOINT,
    EHR_PATIENT_LIST_ENDPOINT,
    AUTH_TOKEN_ENDPOINT_URL
};
