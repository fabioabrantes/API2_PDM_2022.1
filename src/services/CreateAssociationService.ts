import {getCustomRepository} from "typeorm";

import {AssociationRepository} from '../repositories/AssociationRepository';
import {Association} from "../entities/Association";
import {AssociationRequest} from "../dto/AssociationRequest";

import {associationValidate} from '../utils/AssociationValidation';
import { AppErrors } from "../errors/AppErros";

class CreateAssociationService{
  
  async execute(associationParams:AssociationRequest): Promise<Association>{

    const associationRepository  = getCustomRepository(AssociationRepository);
    // validando os campos
    await associationValidate(associationParams);

    //Não é permitido cadastrar associação com mesmo nome
    const {name}= associationParams;
    const associationExists = await associationRepository.findAssociationByName(name);
   
    if(associationExists){
      throw new AppErrors("Error: Association exists", 400);
    }

    const association = associationRepository.createAssociation(associationParams);

    return association
  }
}
export {CreateAssociationService}