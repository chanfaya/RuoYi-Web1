import { BaseEntity, PageQuery } from '@/api/base';

export interface BrandVO {
  /**
   * 品牌id
   */
  brandId: string | number;

  /**
   * 品牌名
   */
  name: string;

  /**
   * 品牌logo地址
   */
  logo: string;

  /**
   * 介绍
   */
  descript: string;

  /**
   * 显示状态[0-不显示；1-显示]
   */
  showStatus: number;

  /**
   * 检索首字母
   */
  firstLetter: string;

  /**
   * 排序
   */
  sort: number;

}

export interface BrandForm extends BaseEntity {
  /**
   * 品牌id
   */
  brandId?: string | number;

  /**
   * 品牌名
   */
  name?: string;

  /**
   * 品牌logo地址
   */
  logo?: string;

  /**
   * 介绍
   */
  descript?: string;

  /**
   * 显示状态[0-不显示；1-显示]
   */
  showStatus?: number;

  /**
   * 检索首字母
   */
  firstLetter?: string;

  /**
   * 排序
   */
  sort?: number;

}

export interface BrandQuery extends PageQuery {
  /**
   * 品牌名
   */
  name?: string;

  /**
   * 品牌logo地址
   */
  logo?: string;

  /**
   * 介绍
   */
  descript?: string;

  /**
   * 显示状态[0-不显示；1-显示]
   */
  showStatus?: number;

  /**
   * 检索首字母
   */
  firstLetter?: string;

  /**
   * 排序
   */
  sort?: number;

  /**
    * 日期范围参数
    */
  params?: any;
}
