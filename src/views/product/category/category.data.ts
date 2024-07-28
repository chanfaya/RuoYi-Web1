import { BasicColumn } from '@/components/Table';
import { FormSchema } from '@/components/Form';

export const formSchemas: FormSchema[] = [
  {
    label: '分类名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '父分类id',
    field: 'parentCid',
    component: 'Input',
  },
  {
    label: '层级',
    field: 'catLevel',
    component: 'Input',
  },
  {
    label: '是否显示[0-不显示，1显示]',
    field: 'showStatus',
    component: 'RadioButtonGroup',
  },
  {
    label: '排序',
    field: 'sort',
    component: 'Input',
  },
  {
    label: '图标地址',
    field: 'icon',
    component: 'Input',
  },
  {
    label: '计量单位',
    field: 'productUnit',
    component: 'Input',
  },
  {
    label: '商品数量',
    field: 'productCount',
    component: 'Input',
  },
];

export const columns: BasicColumn[] = [
  {
    title: '分类id',
    dataIndex: 'catId',
  },
  {
    title: '分类名称',
    dataIndex: 'name',
  },
  {
    title: '父分类id',
    dataIndex: 'parentCid',
  },
  {
    title: '层级',
    dataIndex: 'catLevel',
  },
  {
    title: '是否显示[0-不显示，1显示]',
    dataIndex: 'showStatus',
  },
  {
    title: '排序',
    dataIndex: 'sort',
  },
  {
    title: '图标地址',
    dataIndex: 'icon',
  },
  {
    title: '计量单位',
    dataIndex: 'productUnit',
  },
  {
    title: '商品数量',
    dataIndex: 'productCount',
  },
];

export const modalSchemas: FormSchema[] = [
  {
    label: '分类id',
    field: 'catId',
    required: false,
    component: 'Input',
      show: false,
  },
  {
    label: '分类名称',
    field: 'name',
    required: true,
    component: 'Input',
  },
  {
    label: '父分类id',
    field: 'parentCid',
    required: true,
    component: 'Input',
  },
  {
    label: '层级',
    field: 'catLevel',
    required: true,
    component: 'Input',
  },
  {
    label: '是否显示[0-不显示，1显示]',
    field: 'showStatus',
    required: true,
    component: 'RadioButtonGroup',
  },
  {
    label: '排序',
    field: 'sort',
    required: true,
    component: 'Input',
  },
  {
    label: '图标地址',
    field: 'icon',
    required: true,
    component: 'Input',
  },
  {
    label: '计量单位',
    field: 'productUnit',
    required: true,
    component: 'Input',
  },
  {
    label: '商品数量',
    field: 'productCount',
    required: true,
    component: 'Input',
  },
];
