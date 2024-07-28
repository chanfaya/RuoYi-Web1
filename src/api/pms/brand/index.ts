import { defHttp } from '@/utils/http/axios';
import { ID, IDS, commonExport } from '@/api/base';
import { BrandVO, BrandForm, BrandQuery } from './model';

/**
 * 查询品牌列表
 * @param params
 * @returns
 */
export function brandList(params?: BrandQuery) {
  return defHttp.get<BrandVO[]>({ url: '/pms/brand/list', params });
}

/**
 * 导出品牌列表
 * @param params
 * @returns
 */
export function brandExport(params?: BrandQuery) {
  return commonExport('/pms/brand/export', params ?? {});
}

/**
 * 查询品牌详细
 * @param brandId id
 * @returns
 */
export function brandInfo(brandId: ID) {
  return defHttp.get<BrandVO>({ url: '/pms/brand/' + brandId });
}

/**
 * 新增品牌
 * @param data
 * @returns
 */
export function brandAdd(data: BrandForm) {
  return defHttp.postWithMsg<void>({ url: '/pms/brand', data });
}

/**
 * 更新品牌
 * @param data
 * @returns
 */
export function brandUpdate(data: BrandForm) {
  return defHttp.putWithMsg<void>({ url: '/pms/brand', data });
}

/**
 * 删除品牌
 * @param brandId id
 * @returns
 */
export function brandRemove(brandId: ID | IDS) {
  return defHttp.deleteWithMsg<void>({ url: '/pms/brand/' + brandId });
}
