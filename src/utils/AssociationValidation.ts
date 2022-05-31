import * as Yup from 'yup';
import { ValidationError } from 'yup';
import {AssociationRequest} from "../dto/AssociationRequest";


export async function associationValidate(dataAssociation:AssociationRequest):Promise<void>{
  // validando os dados
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    latitude: Yup.number().required(),
    longitude: Yup.number().required(),
    about: Yup.string().required().max(300),
    instructions: Yup.string().required(),
    opening_hours: Yup.string().required(),
    open_on_weekends: Yup.boolean().required(),
    images: Yup.array(
      Yup.object().shape({
        path: Yup.string().required(),
      })
    ),
  });
  
  try {
    await schema.validate(dataAssociation,{ abortEarly: false,});// aqui tras todas as mensagens onde teve errors
  } catch (error) {
    throw new ValidationError(error)
  }

}