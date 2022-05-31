import {Request, Response} from 'express';
import {CreateAssociationService} from '../services/CreateAssociationService';
import {AssociationRequest} from "../dto/AssociationRequest";


class CreateAssociationController{

  async handle(request: Request, response: Response):Promise<Response>{
    //console.log(request.files);
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_on_weekends,
      opening_hours,
    } = request.body as AssociationRequest;
    
    // transforma para o formato de array de file. 
    //pq o multer vem com outro tipo de vetor. aqui forço que é um array de arquivos
    const requestImages = request.files as Express.Multer.File[];

    const imagesPath = requestImages.map((img) =>({path:img.filename}));

    const createAssociationService = new CreateAssociationService();

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_on_weekends,
      opening_hours,
      imagesPath // tem que ter o mesmo nome da variável que faz relacionamento
    }
    const association = await createAssociationService.execute(data);

    return response.status(201).json(association);
  }
}

export {CreateAssociationController}