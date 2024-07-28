import { BasicColumn } from '@/components/Table';
import { FormSchema } from '@/components/Form';

export const formSchemas: FormSchema[] = [
  {
    label: '组名',
    field: 'attrGroupName',
    component: 'Input',
  },
  {
    label: '排序',
    field: 'sort',
    component: 'Input',
  },
  {
    label: '描述',
    field: 'descript',
    component: 'Input',
  },
  {
    label: '组图标',
    field: 'icon',
    component: 'Input',
  },
  {
    label: '所属分类id',
    field: 'catelogId',
    component: 'Input',
  },
];

export const columns: BasicColumn[] = [
  {
    title: '分组id',
    dataIndex: 'attrGroupId',
  },
  {
    title: '组名',
    dataIndex: 'attrGroupName',
  },
  {
    title: '排序',
    dataIndex: 'sort',
  },
  {
    title: '描述',
    dataIndex: 'descript',
  },
  {
    title: '组图标',
    dataIndex: 'icon',
  },
  {
    title: '所属分类id',
    dataIndex: 'catelogId',
  },
];

export const modalSchemas: FormSchema[] = [
  {
    label: '分组id',
    field: 'attrGroupId',
    required: false,
    component: 'Input',
      show: false,
  },
  {
    label: '组名',
    field: 'attrGroupName',
    required: true,
    component: 'Input',
  },
  {
    label: '排序',
    field: 'sort',
    required: true,
    component: 'Input',
  },
  {
    label: '描述',
    field: 'descript',
    required: true,
    component: 'Input',
  },
  {
    label: '组图标',
    field: 'icon',
    required: true,
    component: 'Input',
  },
  {
    label: '所属分类id',
    field: 'catelogId',
    required: true,
    component: 'Input',
  },
];
