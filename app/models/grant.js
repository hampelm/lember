import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  field_funded_amount: DS.attr(),
  field_funder: DS.attr(),
  field_recipient: DS.attr(),

  amount: Ember.computed('org_grants_funded', function() {
    return `${this.get('field_funded_amount').toLocaleString()}`
  })
});
