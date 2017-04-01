import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let newPayload = {
      data: {
        id: payload.id,
        type: primaryModelClass.modelName,
        attributes: payload
      }
    };

    console.log("Application serialized:", payload, newPayload);

    return this._super(store, primaryModelClass, newPayload, id, requestType);
  },
  keyForAttribute(key) { return key; }
});
