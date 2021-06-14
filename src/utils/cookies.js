import cookies from 'react-cookies'
import dayjs from 'dayjs'

let expireDate=dayjs().add(7,'d').toDate()

//存储token
export function setToken(value){
  cookies.save('token',value,{expires:expireDate})
}

//取出token
export function getToken(){
  return cookies.load('token')
}

//存储用户id
export function setUserId(value){
  cookies.save('userId',value,{expires:expireDate})
}

//取出用户id
export function getUserId(){
  return cookies.load('userId')
}

//存储用户信息
export function setUserInfo(value) {
  cookies.save('userInfo',value,{expires:expireDate})
}

//取出用户信息
export function getUserInfo(){
  return cookies.load('userInfo')
}