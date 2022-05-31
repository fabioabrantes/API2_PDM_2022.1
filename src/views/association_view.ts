import {Association} from "../entities/Association";
import imagesView from "./images_view";

export default {
  renderAssociation(association: Association) {
    return {
      id: association.id,
      name: association.name,
      latitude: association.latitude,
      longitude: association.longitude,
      about: association.about,
      instructions: association.instructions,
      opening_hours: association.opening_hours,
      open_on_weekends: association.open_on_weekends,
      imagesPath: imagesView.renderManyImages(association.imagesPath),
    };
  },

  renderManyAssociations(associations: Association[]) {
    return associations.map((association) => this.renderAssociation(association));
  },
};