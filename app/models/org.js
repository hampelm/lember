import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  news: DS.attr(),

  org_grants_received: DS.attr(),
  org_grants_funded: DS.attr(),


  funded: Ember.computed('org_grants_funded', function() {
    return `${this.get('org_grants_funded').toLocaleString()}`
  }),

  received: Ember.computed('org_grants_funded', function() {
    return `${this.get('org_grants_received').toLocaleString()}`
  }),

});
