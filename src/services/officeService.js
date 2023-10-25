// import * as dotenv from 'dotenv'
import axiosDefault from "./axiosDefault"
// import { environment } from "../environment/config";
import { environment } from '../environment/config';


export const addOffice = (obj) => {
  console.log("api url",environment)
  return axiosDefault.post(environment + '/companies/head-office', obj)
}

