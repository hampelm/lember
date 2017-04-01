import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload) {
    // console.log("Got grants", payload);

    let list = payload.grants_funded || payload.grants_received;


    let newPayload = list.map((grant) => {
      return  {
        id: grant.id,
        type: primaryModelClass.modelName,
        attributes: grant
      }
    })

    // console.log("Serialized grants:", payload, newPayload);
    payload.data = newPayload ;

    return this._super(...arguments);
  },

  // Prevent Ember from customizing our keys:
  keyForAttribute(key) { return key; }
});
