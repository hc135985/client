const { request } = require('../utils/request.js')

export async function _getMenuList() {
  return await request.get('/menu/menuList')
}

export async function _addMenu(params) {
  return await request.post('/menu/add', params)
}
