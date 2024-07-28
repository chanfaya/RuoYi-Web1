import { BasicColumn } from '@/components/Table';
import { FormSchema } from '@/components/Form';

export const formSchemas: FormSchema[] = [
  {
    label: 'spuId',
    field: 'spuId',
    component: 'Input',
  },
  {
    label: 'sku名称',
    field: 'skuName',
    component: 'Input',
  },
  {
    label: 'sku介绍描述',
    field: 'skuDesc',
    component: 'InputTextArea',
  },
  {
    label: '所属分类id',
    field: 'catalogId',
    component: 'Input',
  },
  {
    label: '品牌id',
    field: 'brandId',
    component: 'Input',
  },
  {
    label: '默认图片',
    field: 'skuDefaultImg',
    component: 'Input',
  },
  {
    label: '标题',
    field: 'skuTitle',
    component: 'Input',
  },
  {
    label: '副标题',
    field: 'skuSubtitle',
    component: 'InputTextArea',
  },
  {
    label: '价格',
    field: 'price',
    component: 'Input',
  },
  {
    label: '销量',
    field: 'saleCount',
    component: 'Input',
  },
];

export const columns: BasicColumn[] = [
  {
    title: 'skuId',
    dataIndex: 'skuId',
  },
  {
    title: 'spuId',
    dataIndex: 'spuId',
  },
  {
    title: 'sku名称',
    dataIndex: 'skuName',
  },
  {
    title: 'sku介绍描述',
    dataIndex: 'skuDesc',
  },
  {
    title: '所属分类id',
    dataIndex: 'catalogId',
  },
  {
    title: '品牌id',
    dataIndex: 'brandId',
  },
  {
    title: '默认图片',
    dataIndex: 'skuDefaultImg',
  },
  {
    title: '标题',
    dataIndex: 'skuTitle',
  },
  {
    title: '副标题',
    dataIndex: 'skuSubtitle',
  },
  {
    title: '价格',
    dataIndex: 'price',
  },
  {
    title: '销量',
    dataIndex: 'saleCount',
  },
];

export const modalSchemas: FormSchema[] = [
  {
    label: 'skuId',
    field: 'skuId',
    required: false,
    component: 'Input',
      show: false,
  },
  {
    label: 'spuId',
    field: 'spuId',
    required: true,
    component: 'Input',
  },
  {
    label: 'sku名称',
    field: 'skuName',
    required: true,
    component: 'Input',
  },
  {
    label: 'sku介绍描述',
    field: 'skuDesc',
    required: true,
    component: 'InputTextArea',
  },
  {
    label: '所属分类id',
    field: 'catalogId',
    required: true,
    component: 'Input',
  },
  {
    label: '品牌id',
    field: 'brandId',
    required: true,
    component: 'Input',
  },
  {
    label: '默认图片',
    field: 'skuDefaultImg',
    required: true,
    component: 'Input',
  },
  {
    label: '标题',
    field: 'skuTitle',
    required: true,
    component: 'Input',
  },
  {
    label: '副标题',
    field: 'skuSubtitle',
    required: true,
    component: 'InputTextArea',
  },
  {
    label: '价格',
    field: 'price',
    required: true,
    component: 'Input',
  },
  {
    label: '销量',
    field: 'saleCount',
    required: true,
    component: 'Input',
  },
];
