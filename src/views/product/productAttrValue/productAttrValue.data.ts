import { BasicColumn } from '@/components/Table';
import { FormSchema } from '@/components/Form';

export const formSchemas: FormSchema[] = [
  {
    label: '商品id',
    field: 'spuId',
    component: 'Input',
  },
  {
    label: '属性id',
    field: 'attrId',
    component: 'Input',
  },
  {
    label: '属性名',
    field: 'attrName',
    component: 'Input',
  },
  {
    label: '属性值',
    field: 'attrValue',
    component: 'Input',
  },
  {
    label: '顺序',
    field: 'attrSort',
    component: 'Input',
  },
  {
    label: '快速展示【是否展示在介绍上；0-否 1-是】',
    field: 'quickShow',
    component: 'Input',
  },
];

export const columns: BasicColumn[] = [
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title: '商品id',
    dataIndex: 'spuId',
  },
  {
    title: '属性id',
    dataIndex: 'attrId',
  },
  {
    title: '属性名',
    dataIndex: 'attrName',
  },
  {
    title: '属性值',
    dataIndex: 'attrValue',
  },
  {
    title: '顺序',
    dataIndex: 'attrSort',
  },
  {
    title: '快速展示【是否展示在介绍上；0-否 1-是】',
    dataIndex: 'quickShow',
  },
];

export const modalSchemas: FormSchema[] = [
  {
    label: 'id',
    field: 'id',
    required: false,
    component: 'Input',
      show: false,
  },
  {
    label: '商品id',
    field: 'spuId',
    required: true,
    component: 'Input',
  },
  {
    label: '属性id',
    field: 'attrId',
    required: true,
    component: 'Input',
  },
  {
    label: '属性名',
    field: 'attrName',
    required: true,
    component: 'Input',
  },
  {
    label: '属性值',
    field: 'attrValue',
    required: true,
    component: 'Input',
  },
  {
    label: '顺序',
    field: 'attrSort',
    required: true,
    component: 'Input',
  },
  {
    label: '快速展示【是否展示在介绍上；0-否 1-是】',
    field: 'quickShow',
    required: true,
    component: 'Input',
  },
];
