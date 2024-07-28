import { BasicColumn } from '@/components/Table';
import { FormSchema } from '@/components/Form';

export const formSchemas: FormSchema[] = [
  {
    label: '品牌名',
    field: 'name',
    component: 'Input',
  },
  {
    label: '品牌logo地址',
    field: 'logo',
    component: 'InputTextArea',
  },
  {
    label: '介绍',
    field: 'descript',
    component: 'InputTextArea',
  },
  {
    label: '显示状态[0-不显示；1-显示]',
    field: 'showStatus',
    component: 'RadioButtonGroup',
  },
  {
    label: '检索首字母',
    field: 'firstLetter',
    component: 'Input',
  },
  {
    label: '排序',
    field: 'sort',
    component: 'Input',
  },
];

export const columns: BasicColumn[] = [
  {
    title: '品牌id',
    dataIndex: 'brandId',
  },
  {
    title: '品牌名',
    dataIndex: 'name',
  },
  {
    title: '品牌logo地址',
    dataIndex: 'logo',
  },
  {
    title: '介绍',
    dataIndex: 'descript',
  },
  {
    title: '显示状态[0-不显示；1-显示]',
    dataIndex: 'showStatus',
  },
  {
    title: '检索首字母',
    dataIndex: 'firstLetter',
  },
  {
    title: '排序',
    dataIndex: 'sort',
  },
];

export const modalSchemas: FormSchema[] = [
  {
    label: '品牌id',
    field: 'brandId',
    required: false,
    component: 'Input',
      show: false,
  },
  {
    label: '品牌名',
    field: 'name',
    required: true,
    component: 'Input',
  },
  {
    label: '品牌logo地址',
    field: 'logo',
    required: true,
    component: 'InputTextArea',
  },
  {
    label: '介绍',
    field: 'descript',
    required: true,
    component: 'InputTextArea',
  },
  {
    label: '显示状态[0-不显示；1-显示]',
    field: 'showStatus',
    required: true,
    component: 'RadioButtonGroup',
  },
  {
    label: '检索首字母',
    field: 'firstLetter',
    required: true,
    component: 'Input',
  },
  {
    label: '排序',
    field: 'sort',
    required: true,
    component: 'Input',
  },
];
