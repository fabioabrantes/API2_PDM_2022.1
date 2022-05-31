import {EntityRepository, Repository} from "typeorm";
import {Association} from '../entities/Association';

import {AssociationRequest} from "../dto/AssociationRequest";

@EntityRepository(Association)
class AssociationRepository extends Repository<Association> {

  async findAssociationByName(name: string): Promise<Association | undefined> {
      return await this.findOne({ name });
  } 
  async findAssociationById(id: number): Promise<Association | undefined> {
    return await this.findOne(id,{relations:["imagesPath"]});//images=nome da coluna que tem na relação tabela association
}
  
  async createAssociation(associationParams:AssociationRequest): Promise<Association>{
    const association =this.create(associationParams);
    await this.save(association);
    return association;
  }

}
export {AssociationRepository}