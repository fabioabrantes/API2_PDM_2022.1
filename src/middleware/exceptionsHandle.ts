import { Request,Response, NextFunction,ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';
import {AppErrors} from '../errors/AppErros';

interface IValidationErrors{
  [key:string]:string[];
}
export function exceptionsHandle(
  err:Error, 
  req:Request, 
  res:Response, 
  next:NextFunction){

    if(err instanceof AppErrors){
      return res.status(err.statusCode).json({error: err.message});
    }else if(err instanceof ValidationError){
      console.log(err);
      let errors: IValidationErrors = {};
      err.inner.forEach(e =>{
        errors[e.path]= e.errors;
      });
      return res.status(400).json({ message: "Validation errors", errors });
    }

    return res.status(500).json({
      status:"Error",
      message: "Error server internal"});
  }