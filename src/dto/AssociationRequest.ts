interface ImagePath{
  path: string;
}
export type AssociationRequest = {
 
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  imagesPath:ImagePath[];
}