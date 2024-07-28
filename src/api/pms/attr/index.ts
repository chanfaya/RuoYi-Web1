import { defHttp } from '@/utils/http/axios';
import { ID, IDS, commonExport } from '@/api/base';
import { AttrVO, AttrForm, AttrQuery } from './model';

/**
 * 查询商品属性列表
 * @param params
 * @returns
 */
export function attrList(params?: AttrQuery) {
  return defHttp.get<AttrVO[]>({ url: '/pms/attr/list', params });
}

/**
 * 导出商品属性列表
 * @param params
 * @returns
 */
export function attrExport(params?: AttrQuery) {
  return commonExport('/pms/attr/export', params ?? {});
}

/**
 * 查询商品属性详细
 * @param attrId id
 * @returns
 */
export function attrInfo(attrId: ID) {
  return defHttp.get<AttrVO>({ url: '/pms/attr/' + attrId });
}

/**
 * 新增商品属性
 * @param data
 * @returns
 */
export function attrAdd(data: AttrForm) {
  return defHttp.postWithMsg<void>({ url: '/pms/attr', data });
}

/**
 * 更新商品属性
 * @param data
 * @returns
 */
export function attrUpdate(data: AttrForm) {
  return defHttp.putWithMsg<void>({ url: '/pms/attr', data });
}

/**
 * 删除商品属性
 * @param attrId id
 * @returns
 */
export function attrRemove(attrId: ID | IDS) {
  return defHttp.deleteWithMsg<void>({ url: '/pms/attr/' + attrId });
}
