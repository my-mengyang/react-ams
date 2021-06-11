import CryptoJS from 'crypto-js'
import {SECRETKEY} from '@/config/secret'

/**
 * 去除字符串两头的空格
 * @param {*} str
 */
export function trim(str){
  const reg=/^\s*|\s*$/g
  if (str) {
    return str.replace(reg,'')
  }
  return str
}

/**
 * 随机数字
 * @param {*} min
 * @param {*} max
 */
export function randomNum(min,max){
  return Math.floor(Math.random()*(max-min)+min)
}

/**
 * 加密函数，加密同一个字符串生成的都不一样
 * @param value
 * @returns {*}
 */
export function encrypt(value) {
  return CryptoJS.AES.encrypt(JSON.stringify(value),SECRETKEY).toString()
}

/**
 * 解密函数
 * @param value
 * @returns {any}
 */
export function decrypt(value) {
  const data=CryptoJS.AES.decrypt(value,SECRETKEY)
  return JSON.parse(data.toString(CryptoJS.enc.Utf8))
}

/**
 * 检测是否是对象方法
 * @param {*} obj
 * @returns
 */
export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}




