import {Image} from "../entities/Image";

interface IImage{
  id:number;
  url:string;
}
export default {
  renderImage(image: Image):IImage {
    return {
      id: image.id,
      url: `http://localhost:3000/uploads/${image.path}`, // o ideal seria colocar no .env
    };
  },

  renderManyImages(images: Image[]):IImage[] {
    return images.map((image) => this.renderImage(image));
  },
};