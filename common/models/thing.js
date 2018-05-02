module.exports = function(Thing) {
  const app = require('../../server/server');
  /**
   * For testing updateAttributes
   * @param {number} idToUpdate
   * @param {object} dataToUpdate Attributes
   * @param {Function(Error, object)} callback
   */

  Thing.testUpdateAttributes = async (idToUpdate, dataToUpdate, callback) => {
    console.log('Entering testUpdateAttributes');
    let thing = await app.models.thing.findById(idToUpdate);
    const shouldBePromise = thing.updateAttributes(dataToUpdate, (error, updatedThing) => {
      if (error) {
        console.error(error);
      } else {
        console.log('updatedThing: ', updatedThing);
      }
    });

    console.log('shouldBePromise', shouldBePromise);

    await shouldBePromise;

    console.log('Leaving testUpdateAttributes');
  };
};
