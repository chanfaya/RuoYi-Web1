import { BasicColumn } from '@/components/Table';
import { FormSchema } from '@/components/Form';

export const formSchemas: FormSchema[] = [
  {
    label: '品牌id',
    field: 'brandId',
    component: 'Input',
  },
  {
    label: '分类id',
    field: 'catelogId',
    component: 'Input',
  },
  {
    label: '',
    field: 'brandName',
    component: 'Input',
  },
  {
    label: '',
    field: 'catelogName',
    component: 'Input',
  },
];

export const columns: BasicColumn[] = [
  {
    title: '',
    dataIndex: 'id',
  },
  {
    title: '品牌id',
    dataIndex: 'brandId',
  },
  {
    title: '分类id',
    dataIndex: 'catelogId',
  },
  {
    title: '',
    dataIndex: 'brandName',
  },
  {
    title: '',
    dataIndex: 'catelogName',
  },
];

export const modalSchemas: FormSchema[] = [
  {
    label: '',
    field: 'id',
    required: false,
    component: 'Input',
      show: false,
  },
  {
    label: '品牌id',
    field: 'brandId',
    required: true,
    component: 'Input',
  },
  {
    label: '分类id',
    field: 'catelogId',
    required: true,
    component: 'Input',
  },
  {
    label: '',
    field: 'brandName',
    required: true,
    component: 'Input',
  },
  {
    label: '',
    field: 'catelogName',
    required: true,
    component: 'Input',
  },
];
