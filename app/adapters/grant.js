import ApplicationAdapter from './application';


export default ApplicationAdapter.extend({
  urlForQuery(query) {
    let baseUrl = this.buildURL();
    return `${baseUrl}/orgs/${query.orgId}/grants_${query.direction}.jsonp?limit=10000`;
  }
});
