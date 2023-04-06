import request from 'superagent';

const url = 'https://cdn.contentful.com/';
const spaceId = 'v441z4n7clri';
const environmentId = 'master';
// eslint-disable-next-line
const accessToken = process.env.REACT_APP_CONTENTFUL_API_KEY;

export const makeRequestAll = attrs => request
  .get(`${url}spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`)
  .set('Authorization', `Bearer: ${accessToken}`)
  .query(attrs);

export const makeRequestOne = entryId => request
  .get(`${url}spaces/${spaceId}/environments/${environmentId}/entries/${entryId}?access_token=${accessToken}`)
  .set('Authorization', `Bearer: ${accessToken}`)
  .query({content_type: 'product'});