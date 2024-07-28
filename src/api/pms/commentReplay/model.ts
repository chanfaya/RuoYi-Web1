import { BaseEntity, PageQuery } from '@/api/base';

export interface CommentReplayVO {
  /**
   * id
   */
  id: string | number;

  /**
   * 评论id
   */
  commentId: string | number;

  /**
   * 回复id
   */
  replyId: string | number;

}

export interface CommentReplayForm extends BaseEntity {
  /**
   * id
   */
  id?: string | number;

  /**
   * 评论id
   */
  commentId?: string | number;

  /**
   * 回复id
   */
  replyId?: string | number;

}

export interface CommentReplayQuery extends PageQuery {
  /**
   * 评论id
   */
  commentId?: string | number;

  /**
   * 回复id
   */
  replyId?: string | number;

  /**
    * 日期范围参数
    */
  params?: any;
}
