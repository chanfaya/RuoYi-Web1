import { defHttp } from '@/utils/http/axios';
import { ID, IDS, commonExport } from '@/api/base';
import { CommentReplayVO, CommentReplayForm, CommentReplayQuery } from './model';

/**
 * 查询商品评价回复关系列表
 * @param params
 * @returns
 */
export function commentReplayList(params?: CommentReplayQuery) {
  return defHttp.get<CommentReplayVO[]>({ url: '/pms/commentReplay/list', params });
}

/**
 * 导出商品评价回复关系列表
 * @param params
 * @returns
 */
export function commentReplayExport(params?: CommentReplayQuery) {
  return commonExport('/pms/commentReplay/export', params ?? {});
}

/**
 * 查询商品评价回复关系详细
 * @param id id
 * @returns
 */
export function commentReplayInfo(id: ID) {
  return defHttp.get<CommentReplayVO>({ url: '/pms/commentReplay/' + id });
}

/**
 * 新增商品评价回复关系
 * @param data
 * @returns
 */
export function commentReplayAdd(data: CommentReplayForm) {
  return defHttp.postWithMsg<void>({ url: '/pms/commentReplay', data });
}

/**
 * 更新商品评价回复关系
 * @param data
 * @returns
 */
export function commentReplayUpdate(data: CommentReplayForm) {
  return defHttp.putWithMsg<void>({ url: '/pms/commentReplay', data });
}

/**
 * 删除商品评价回复关系
 * @param id id
 * @returns
 */
export function commentReplayRemove(id: ID | IDS) {
  return defHttp.deleteWithMsg<void>({ url: '/pms/commentReplay/' + id });
}
