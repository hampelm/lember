import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  org_grants_received: DS.attr(),
  org_grants_funded: DS.attr()
});
