const { request } = require('../utils/request.js')

export async function _login(acction) {
  return await request.post('/user/login', acction)
}
