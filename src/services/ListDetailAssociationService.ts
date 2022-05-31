import {getCustomRepository} from "typeorm";

import {AssociationRepository} from '../repositories/AssociationRepository';

import {Association} from "../entities/Association";
import { AppErrors } from "../errors/AppErros";
import {AssociationRequest} from "../dto/AssociationRequest";

class ListDetailAssociationService{
  
  async execute(id:number): Promise<Association>{

    
    const associationRepository  = getCustomRepository(AssociationRepository);
    
    const associationExists = await associationRepository.findAssociationById(id);
   
    if(!associationExists){
      throw new AppErrors("Error: Association is not exists", 400);
    }

    return associationExists;
  }
}
export {ListDetailAssociationService}