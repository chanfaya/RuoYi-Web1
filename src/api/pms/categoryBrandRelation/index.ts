import { defHttp } from '@/utils/http/axios';
import { ID, IDS, commonExport } from '@/api/base';
import { CategoryBrandRelationVO, CategoryBrandRelationForm, CategoryBrandRelationQuery } from './model';

/**
 * 查询品牌分类关联列表
 * @param params
 * @returns
 */
export function categoryBrandRelationList(params?: CategoryBrandRelationQuery) {
  return defHttp.get<CategoryBrandRelationVO[]>({ url: '/pms/categoryBrandRelation/list', params });
}

/**
 * 导出品牌分类关联列表
 * @param params
 * @returns
 */
export function categoryBrandRelationExport(params?: CategoryBrandRelationQuery) {
  return commonExport('/pms/categoryBrandRelation/export', params ?? {});
}

/**
 * 查询品牌分类关联详细
 * @param id id
 * @returns
 */
export function categoryBrandRelationInfo(id: ID) {
  return defHttp.get<CategoryBrandRelationVO>({ url: '/pms/categoryBrandRelation/' + id });
}

/**
 * 新增品牌分类关联
 * @param data
 * @returns
 */
export function categoryBrandRelationAdd(data: CategoryBrandRelationForm) {
  return defHttp.postWithMsg<void>({ url: '/pms/categoryBrandRelation', data });
}

/**
 * 更新品牌分类关联
 * @param data
 * @returns
 */
export function categoryBrandRelationUpdate(data: CategoryBrandRelationForm) {
  return defHttp.putWithMsg<void>({ url: '/pms/categoryBrandRelation', data });
}

/**
 * 删除品牌分类关联
 * @param id id
 * @returns
 */
export function categoryBrandRelationRemove(id: ID | IDS) {
  return defHttp.deleteWithMsg<void>({ url: '/pms/categoryBrandRelation/' + id });
}
