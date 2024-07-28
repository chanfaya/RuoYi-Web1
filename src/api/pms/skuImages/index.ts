import { defHttp } from '@/utils/http/axios';
import { ID, IDS, commonExport } from '@/api/base';
import { SkuImagesVO, SkuImagesForm, SkuImagesQuery } from './model';

/**
 * 查询sku图片列表
 * @param params
 * @returns
 */
export function skuImagesList(params?: SkuImagesQuery) {
  return defHttp.get<SkuImagesVO[]>({ url: '/pms/skuImages/list', params });
}

/**
 * 导出sku图片列表
 * @param params
 * @returns
 */
export function skuImagesExport(params?: SkuImagesQuery) {
  return commonExport('/pms/skuImages/export', params ?? {});
}

/**
 * 查询sku图片详细
 * @param id id
 * @returns
 */
export function skuImagesInfo(id: ID) {
  return defHttp.get<SkuImagesVO>({ url: '/pms/skuImages/' + id });
}

/**
 * 新增sku图片
 * @param data
 * @returns
 */
export function skuImagesAdd(data: SkuImagesForm) {
  return defHttp.postWithMsg<void>({ url: '/pms/skuImages', data });
}

/**
 * 更新sku图片
 * @param data
 * @returns
 */
export function skuImagesUpdate(data: SkuImagesForm) {
  return defHttp.putWithMsg<void>({ url: '/pms/skuImages', data });
}

/**
 * 删除sku图片
 * @param id id
 * @returns
 */
export function skuImagesRemove(id: ID | IDS) {
  return defHttp.deleteWithMsg<void>({ url: '/pms/skuImages/' + id });
}
