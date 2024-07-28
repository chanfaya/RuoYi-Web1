import { defHttp } from '@/utils/http/axios';
import { ID, IDS, commonExport } from '@/api/base';
import { SkuInfoVO, SkuInfoForm, SkuInfoQuery } from './model';

/**
 * 查询sku信息列表
 * @param params
 * @returns
 */
export function skuInfoList(params?: SkuInfoQuery) {
  return defHttp.get<SkuInfoVO[]>({ url: '/pms/skuInfo/list', params });
}

/**
 * 导出sku信息列表
 * @param params
 * @returns
 */
export function skuInfoExport(params?: SkuInfoQuery) {
  return commonExport('/pms/skuInfo/export', params ?? {});
}

/**
 * 查询sku信息详细
 * @param skuId id
 * @returns
 */
export function skuInfoInfo(skuId: ID) {
  return defHttp.get<SkuInfoVO>({ url: '/pms/skuInfo/' + skuId });
}

/**
 * 新增sku信息
 * @param data
 * @returns
 */
export function skuInfoAdd(data: SkuInfoForm) {
  return defHttp.postWithMsg<void>({ url: '/pms/skuInfo', data });
}

/**
 * 更新sku信息
 * @param data
 * @returns
 */
export function skuInfoUpdate(data: SkuInfoForm) {
  return defHttp.putWithMsg<void>({ url: '/pms/skuInfo', data });
}

/**
 * 删除sku信息
 * @param skuId id
 * @returns
 */
export function skuInfoRemove(skuId: ID | IDS) {
  return defHttp.deleteWithMsg<void>({ url: '/pms/skuInfo/' + skuId });
}
