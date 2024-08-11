import { BasicColumn } from '@/components/Table';
import { FormSchema } from '@/components/Form';

export const formSchemas: FormSchema[] = [
  {
    label: '分类名称',
    field: 'name',
    component: 'Input',
  },
];

export const columns: BasicColumn[] = [
  {
    title: 'id',
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
    title: '是否显示',
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
    label: 'id',
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
    label: '上级分类',
    field: 'parentCid',
    required: true,
    component: 'Input',
  },
  {
    label: '是否显示',
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
];
