/*
 * @Author: heinan 
 * @Date: 2020-09-09 14:14:02 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-09-09 15:38:46
 */

export function setCookie(key, val) {
  localStorage.setItem(key, val)
}

export function getCookie(key) {
  return localStorage.getItem(key)
}