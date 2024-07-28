import { defHttp } from '@/utils/http/axios';
import { ID, IDS, commonExport } from '@/api/base';
import { AttrAttrgroupRelationVO, AttrAttrgroupRelationForm, AttrAttrgroupRelationQuery } from './model';

/**
 * 查询属性&属性分组关联列表
 * @param params
 * @returns
 */
export function attrAttrgroupRelationList(params?: AttrAttrgroupRelationQuery) {
  return defHttp.get<AttrAttrgroupRelationVO[]>({ url: '/pms/attrAttrgroupRelation/list', params });
}

/**
 * 导出属性&属性分组关联列表
 * @param params
 * @returns
 */
export function attrAttrgroupRelationExport(params?: AttrAttrgroupRelationQuery) {
  return commonExport('/pms/attrAttrgroupRelation/export', params ?? {});
}

/**
 * 查询属性&属性分组关联详细
 * @param id id
 * @returns
 */
export function attrAttrgroupRelationInfo(id: ID) {
  return defHttp.get<AttrAttrgroupRelationVO>({ url: '/pms/attrAttrgroupRelation/' + id });
}

/**
 * 新增属性&属性分组关联
 * @param data
 * @returns
 */
export function attrAttrgroupRelationAdd(data: AttrAttrgroupRelationForm) {
  return defHttp.postWithMsg<void>({ url: '/pms/attrAttrgroupRelation', data });
}

/**
 * 更新属性&属性分组关联
 * @param data
 * @returns
 */
export function attrAttrgroupRelationUpdate(data: AttrAttrgroupRelationForm) {
  return defHttp.putWithMsg<void>({ url: '/pms/attrAttrgroupRelation', data });
}

/**
 * 删除属性&属性分组关联
 * @param id id
 * @returns
 */
export function attrAttrgroupRelationRemove(id: ID | IDS) {
  return defHttp.deleteWithMsg<void>({ url: '/pms/attrAttrgroupRelation/' + id });
}
