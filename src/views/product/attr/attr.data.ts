import { BasicColumn } from '@/components/Table';
import { FormSchema } from '@/components/Form';

export const formSchemas: FormSchema[] = [
  {
    label: '属性名',
    field: 'attrName',
    component: 'Input',
  },
  {
    label: '是否需要检索',
    field: 'searchType',
    component: 'Select',
  },
  {
    label: '值类型',
    field: 'valueType',
    component: 'Select',
  },
  {
    label: '属性图标',
    field: 'icon',
    component: 'Input',
  },
  {
    label: '可选值列表',
    field: 'valueSelect',
    component: 'Input',
  },
  {
    label: '属性类型',
    field: 'attrType',
    component: 'Select',
  },
  {
    label: '启用状态',
    field: 'enable',
    component: 'Input',
  },
  {
    label: '所属分类',
    field: 'catelogId',
    component: 'Input',
  },
  {
    label: '快速展示',
    field: 'showDesc',
    component: 'Input',
  },
];

export const columns: BasicColumn[] = [
  {
    title: '属性名',
    dataIndex: 'attrName',
  },
  {
    title: '是否需要检索',
    dataIndex: 'searchType',
  },
  {
    title: '值类型',
    dataIndex: 'valueType',
  },
  {
    title: '属性图标',
    dataIndex: 'icon',
  },
  {
    title: '可选值列表',
    dataIndex: 'valueSelect',
  },
  {
    title: '属性类型',
    dataIndex: 'attrType',
  },
  {
    title: '启用状态',
    dataIndex: 'enable',
  },
  {
    title: '所属分类',
    dataIndex: 'catelogId',
  },
  {
    title: '快速展示',
    dataIndex: 'showDesc',
  },
];

export const modalSchemas: FormSchema[] = [
  {
    label: '属性名',
    field: 'attrName',
    required: true,
    component: 'Input',
  },
  {
    label: '是否需要检索',
    field: 'searchType',
    required: true,
    component: 'Select',
  },
  {
    label: '值类型',
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
    label: '可选值列表',
    field: 'valueSelect',
    required: true,
    component: 'Input',
  },
  {
    label: '属性类型',
    field: 'attrType',
    required: true,
    component: 'Select',
  },
  {
    label: '启用状态',
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
    label: '快速展示',
    field: 'showDesc',
    required: true,
    component: 'Input',
  },
];
