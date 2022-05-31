import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import {CreateAssociationController} from './controllers/CreateAssociationController';
import {ListDetailAssociationController} from './controllers/ListDetailAssociationController'
;


const router = Router();
const upload = multer(uploadConfig);

const createAssociationController = new CreateAssociationController();

const listDetailAssociationController = new ListDetailAssociationController();

router.post('/associations',upload.array('images'),createAssociationController.handle);
router.get('/associations/:id',listDetailAssociationController.handle);


export {router}
