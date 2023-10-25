// import * as dotenv from 'dotenv'
import axios from 'axios'
// import { environment } from "../environment/config";
import { environment } from '../environment/config';



// dotenv.config()
console.log("env",environment)

// const environment = process.env.REACT_APP_API_URL
console.log(environment + '/auth/login');
export const login = (obj) => {
  console.log("base url",environment + '/auth/login');
  return axios.post(environment + '/auth/login', obj)
}

export const signUp = (obj) => {
  console.log("api url",environment)
  return axios.post(environment + '/auth/register', obj)
}

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user'))
}

export const getUserByCode = (code) => {
  return axios.get(environment + `/users/code/${code}`)
}


export const getUsercode = (id) => {
  return axios.get(environment + `/users/${id}/codes`)
}

export const getUsercodeKeys = () => {
  return axios.get(environment + `/users/code-keys`)
}



export const getUserApiToken = () => {
  return axios.get(environment + `/users/apikeytkn`);
}



export const getUserApiSecondaryToken = () => {
  return axios.get(environment + `/users/apikeytkn_secondary`);
}




export const requestForSecondaryTkn = () => {
  return axios.get(environment + `/users/request_sectoken`);
}

export const promoteTokenToPrimary = () => {
  return axios.get(environment + `/users/promote_token`);
}

export const getUserAcountIdByUserId = (id) => {
  return axios.get(environment + `/users/:userId`);
}


// export const getUserByUserId = (id) => {
//   return axios.get(environment + `/users/admin/${id}`);
// }

export const getUserByUserId = () => {
  return axios.get(environment + `/users/admin`);
}

export const getUserByUserIdAdmin = (userId) => {
  return axios.get(environment + `/users/admin/${userId}`);
}

export const addBalance = (obj) => {
  return axios.post(environment + '/users/admin/add-balance', obj)
}

export const getUsers = (params) => {
  return axios.get(environment + `/users?pageIndex=${params.current}&pageSize=${params.pageSize}&companyName=${params.searchCompany}&email=${params.searchEmail}&isApproved=${params.isApproved}&type=${params.type}`)
}

export const getAllComapny = (params) => {
  return axios.get(environment + `/profile/admin?pageIndex=${params.current}&pageSize=${params.pageSize}&companyName=${params.searchCompany}&email=${params.searchEmail}&isApproved=${params.isApproved}&type=${params.type}`)
}




export const getUserTransactionLog = async(pagination) => {
  return await axios.get(environment + `/users/transaction-log?pageIndex=${pagination.current}&pageSize=${pagination.pageSize}`)
}

export const getUserTransactionLogForAdmin = async(pagination,userId) => {
  return await axios.get(environment + `/users/transaction-log/${userId}?pageIndex=${pagination.current}&pageSize=${pagination.pageSize}`)
}




export const updatApprovementForAdmin = (body) => {
  return axios.put(environment + `/users/approvement-update`,body)
}






export const verifyOTPCode = (body) => {
  return axios.post(environment + `/auth/verify-code`, body)
}

export const accountApprovement = (body) => {
  return axios.post(environment + `/users/account_approve`, body)
}

export const verifyOTPCodeByEmail = (body) => {
  return axios.post(environment + `/users/otpcnfem`, body)
}

export const resendOTPCode = (body) => {
  return axios.post(environment + `/auth/resend-code`, body)
}
export const verifyOTPCodeForPasswordReset = (body) => {
  return axios.post(environment + `/users/verify-otp`, body)
}

export const resendOTPByEmail = (body) => {
  return axios.post(environment + `/users/reotpem`, body)
}
export const resendOTPByEmailPassword = (body) => {
  return axios.post(environment + `/users/reotpempswd`, body)
}



export const resetPassword = (body) => {
  return axios.post(environment + `/users/reset-password`, body)
}

export const updatedPassword = (body) => {
  return axios.post(environment + `/users/updated-password`, body)
}

export const changePassword = (body) =>{
  return axios.post(environment + `/users/change-password`, body)
}

export const queryBuilder = (query) => {
  if (!query) return
  let q = ''
  for (const [key, value] of Object.entries(query)) {
    if (value) q = q + `${key}=${value}&`
  }
  return q
}
