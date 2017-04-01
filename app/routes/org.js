import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      org: this.get('store').findRecord('orgs', params.org_id),
      grantsReceived: this.get('store').query('grant', {
        orgId: params.org_id,
        direction: 'received'
      }),
      grantsFunded: this.get('store').query('grant', {
        orgId: params.org_id,
        direction: 'funded'
      })
    })
  },

});
