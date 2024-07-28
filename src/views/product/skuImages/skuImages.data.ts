import { BasicColumn } from '@/components/Table';
import { FormSchema } from '@/components/Form';

export const formSchemas: FormSchema[] = [
  {
    label: 'sku_id',
    field: 'skuId',
    component: 'Input',
  },
  {
    label: '图片地址',
    field: 'imgUrl',
    component: 'Input',
  },
  {
    label: '排序',
    field: 'imgSort',
    component: 'Input',
  },
  {
    label: '默认图[0 - 不是默认图，1 - 是默认图]',
    field: 'defaultImg',
    component: 'Input',
  },
];

export const columns: BasicColumn[] = [
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title: 'sku_id',
    dataIndex: 'skuId',
  },
  {
    title: '图片地址',
    dataIndex: 'imgUrl',
  },
  {
    title: '排序',
    dataIndex: 'imgSort',
  },
  {
    title: '默认图[0 - 不是默认图，1 - 是默认图]',
    dataIndex: 'defaultImg',
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
    label: 'sku_id',
    field: 'skuId',
    required: true,
    component: 'Input',
  },
  {
    label: '图片地址',
    field: 'imgUrl',
    required: true,
    component: 'Input',
  },
  {
    label: '排序',
    field: 'imgSort',
    required: true,
    component: 'Input',
  },
  {
    label: '默认图[0 - 不是默认图，1 - 是默认图]',
    field: 'defaultImg',
    required: true,
    component: 'Input',
  },
];
