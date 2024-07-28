import { defHttp } from '@/utils/http/axios';
import { ID, IDS, commonExport } from '@/api/base';
import { AttrGroupVO, AttrGroupForm, AttrGroupQuery } from './model';

/**
 * 查询属性分组列表
 * @param params
 * @returns
 */
export function attrGroupList(params?: AttrGroupQuery) {
  return defHttp.get<AttrGroupVO[]>({ url: '/pms/attrGroup/list', params });
}

/**
 * 导出属性分组列表
 * @param params
 * @returns
 */
export function attrGroupExport(params?: AttrGroupQuery) {
  return commonExport('/pms/attrGroup/export', params ?? {});
}

/**
 * 查询属性分组详细
 * @param attrGroupId id
 * @returns
 */
export function attrGroupInfo(attrGroupId: ID) {
  return defHttp.get<AttrGroupVO>({ url: '/pms/attrGroup/' + attrGroupId });
}

/**
 * 新增属性分组
 * @param data
 * @returns
 */
export function attrGroupAdd(data: AttrGroupForm) {
  return defHttp.postWithMsg<void>({ url: '/pms/attrGroup', data });
}

/**
 * 更新属性分组
 * @param data
 * @returns
 */
export function attrGroupUpdate(data: AttrGroupForm) {
  return defHttp.putWithMsg<void>({ url: '/pms/attrGroup', data });
}

/**
 * 删除属性分组
 * @param attrGroupId id
 * @returns
 */
export function attrGroupRemove(attrGroupId: ID | IDS) {
  return defHttp.deleteWithMsg<void>({ url: '/pms/attrGroup/' + attrGroupId });
}
