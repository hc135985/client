import { _getMenuList } from '@/api/menu'

let menuList = null;
export const getMenuList = async () => {
  if (!menuList) {
    menuList = await _getMenuList();
  }
  return menuList;
}
