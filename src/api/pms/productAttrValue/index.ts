import { defHttp } from '@/utils/http/axios';
import { ID, IDS, commonExport } from '@/api/base';
import { ProductAttrValueVO, ProductAttrValueForm, ProductAttrValueQuery } from './model';

/**
 * 查询spu属性值列表
 * @param params
 * @returns
 */
export function productAttrValueList(params?: ProductAttrValueQuery) {
  return defHttp.get<ProductAttrValueVO[]>({ url: '/pms/productAttrValue/list', params });
}

/**
 * 导出spu属性值列表
 * @param params
 * @returns
 */
export function productAttrValueExport(params?: ProductAttrValueQuery) {
  return commonExport('/pms/productAttrValue/export', params ?? {});
}

/**
 * 查询spu属性值详细
 * @param id id
 * @returns
 */
export function productAttrValueInfo(id: ID) {
  return defHttp.get<ProductAttrValueVO>({ url: '/pms/productAttrValue/' + id });
}

/**
 * 新增spu属性值
 * @param data
 * @returns
 */
export function productAttrValueAdd(data: ProductAttrValueForm) {
  return defHttp.postWithMsg<void>({ url: '/pms/productAttrValue', data });
}

/**
 * 更新spu属性值
 * @param data
 * @returns
 */
export function productAttrValueUpdate(data: ProductAttrValueForm) {
  return defHttp.putWithMsg<void>({ url: '/pms/productAttrValue', data });
}

/**
 * 删除spu属性值
 * @param id id
 * @returns
 */
export function productAttrValueRemove(id: ID | IDS) {
  return defHttp.deleteWithMsg<void>({ url: '/pms/productAttrValue/' + id });
}
