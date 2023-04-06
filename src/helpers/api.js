import request from 'superagent';

const url = 'https://cdn.contentful.com/';
const spaceId = 'v441z4n7clri';
const environmentId = 'master';
const accessToken = process.env.REACT_APP_CONTENTFUL_API_KEY;

const makeRequest = attrs => request
  .get(`${url}spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`)
  .set('Authorization', `Bearer: ${accessToken}`)
  .query(attrs);

export default makeRequest;