import {Request, Response} from 'express';
import {ListDetailAssociationService} from '../services/ListDetailAssociationService';
import AssociationView from '../views/association_view';

class ListDetailAssociationController{

  async handle(request: Request, response: Response):Promise<Response>{
    const {id} = request.params;
    
    const listDetailAssociationService = new ListDetailAssociationService();
    
    const association = await listDetailAssociationService.execute(Number(id));
    
    return response.status(201).json(AssociationView.renderAssociation(association));
  }
}

export {ListDetailAssociationController}