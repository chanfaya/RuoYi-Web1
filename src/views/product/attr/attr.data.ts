import { BasicColumn } from '@/components/Table';
import { FormSchema } from '@/components/Form';

export const formSchemas: FormSchema[] = [
  {
    label: '属性名',
    field: 'attrName',
    component: 'Input',
  },
  {
    label: '是否需要检索[0-不需要，1-需要]',
    field: 'searchType',
    component: 'Select',
  },
  {
    label: '值类型[0-为单个值，1-可以选择多个值]',
    field: 'valueType',
    component: 'Select',
  },
  {
    label: '属性图标',
    field: 'icon',
    component: 'Input',
  },
  {
    label: '可选值列表[用逗号分隔]',
    field: 'valueSelect',
    component: 'Input',
  },
  {
    label: '属性类型[0-销售属性，1-基本属性，2-既是销售属性又是基本属性]',
    field: 'attrType',
    component: 'Select',
  },
  {
    label: '启用状态[0 - 禁用，1 - 启用]',
    field: 'enable',
    component: 'Input',
  },
  {
    label: '所属分类',
    field: 'catelogId',
    component: 'Input',
  },
  {
    label: '快速展示【是否展示在介绍上；0-否 1-是】，在sku中仍然可以调整',
    field: 'showDesc',
    component: 'Input',
  },
];

export const columns: BasicColumn[] = [
  {
    title: '属性id',
    dataIndex: 'attrId',
  },
  {
    title: '属性名',
    dataIndex: 'attrName',
  },
  {
    title: '是否需要检索[0-不需要，1-需要]',
    dataIndex: 'searchType',
  },
  {
    title: '值类型[0-为单个值，1-可以选择多个值]',
    dataIndex: 'valueType',
  },
  {
    title: '属性图标',
    dataIndex: 'icon',
  },
  {
    title: '可选值列表[用逗号分隔]',
    dataIndex: 'valueSelect',
  },
  {
    title: '属性类型[0-销售属性，1-基本属性，2-既是销售属性又是基本属性]',
    dataIndex: 'attrType',
  },
  {
    title: '启用状态[0 - 禁用，1 - 启用]',
    dataIndex: 'enable',
  },
  {
    title: '所属分类',
    dataIndex: 'catelogId',
  },
  {
    title: '快速展示【是否展示在介绍上；0-否 1-是】，在sku中仍然可以调整',
    dataIndex: 'showDesc',
  },
];

export const modalSchemas: FormSchema[] = [
  {
    label: '属性id',
    field: 'attrId',
    required: false,
    component: 'Input',
      show: false,
  },
  {
    label: '属性名',
    field: 'attrName',
    required: true,
    component: 'Input',
  },
  {
    label: '是否需要检索[0-不需要，1-需要]',
    field: 'searchType',
    required: true,
    component: 'Select',
  },
  {
    label: '值类型[0-为单个值，1-可以选择多个值]',
    field: 'valueType',
    required: true,
    component: 'Select',
  },
  {
    label: '属性图标',
    field: 'icon',
    required: true,
    component: 'Input',
  },
  {
    label: '可选值列表[用逗号分隔]',
    field: 'valueSelect',
    required: true,
    component: 'Input',
  },
  {
    label: '属性类型[0-销售属性，1-基本属性，2-既是销售属性又是基本属性]',
    field: 'attrType',
    required: true,
    component: 'Select',
  },
  {
    label: '启用状态[0 - 禁用，1 - 启用]',
    field: 'enable',
    required: true,
    component: 'Input',
  },
  {
    label: '所属分类',
    field: 'catelogId',
    required: true,
    component: 'Input',
  },
  {
    label: '快速展示【是否展示在介绍上；0-否 1-是】，在sku中仍然可以调整',
    field: 'showDesc',
    required: true,
    component: 'Input',
  },
];
