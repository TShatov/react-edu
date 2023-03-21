import request from 'superagent';

const url = 'https://cdn.contentful.com/';
const spaceId = 'v441z4n7clri';
const environmentId = 'master';
const accessToken = 'R4FhPbGLGH4OrEfOi4RDTw-19pCcDYV6hLcZZxbMNX4';

const makeRequest = attrs => request
  .get(`${url}spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`)
  .set('Authorization', `Bearer: ${accessToken}`)
  .query(attrs);

export default makeRequest;