import { defHttp } from '@/utils/http/axios';
import { ID, IDS, commonExport } from '@/api/base';
import { CategoryVO, CategoryForm, CategoryQuery } from './model';

/**
 * 查询商品三级分类列表
 * @param params
 * @returns
 */
export function categoryList(params?: CategoryQuery) {
  return defHttp.get<CategoryVO[]>({ url: '/pms/category/list', params });
}

/**
 * 导出商品三级分类列表
 * @param params
 * @returns
 */
export function categoryExport(params?: CategoryQuery) {
  return commonExport('/pms/category/export', params ?? {});
}

/**
 * 查询商品三级分类详细
 * @param catId id
 * @returns
 */
export function categoryInfo(catId: ID) {
  return defHttp.get<CategoryVO>({ url: '/pms/category/' + catId });
}

/**
 * 新增商品三级分类
 * @param data
 * @returns
 */
export function categoryAdd(data: CategoryForm) {
  return defHttp.postWithMsg<void>({ url: '/pms/category', data });
}

/**
 * 更新商品三级分类
 * @param data
 * @returns
 */
export function categoryUpdate(data: CategoryForm) {
  return defHttp.putWithMsg<void>({ url: '/pms/category', data });
}

/**
 * 删除商品三级分类
 * @param catId id
 * @returns
 */
export function categoryRemove(catId: ID | IDS) {
  return defHttp.deleteWithMsg<void>({ url: '/pms/category/' + catId });
}
