import { BasicColumn } from '@/components/Table';
import { FormSchema } from '@/components/Form';

export const formSchemas: FormSchema[] = [
  {
    label: '属性id',
    field: 'attrId',
    component: 'Input',
  },
  {
    label: '属性分组id',
    field: 'attrGroupId',
    component: 'Input',
  },
  {
    label: '属性组内排序',
    field: 'attrSort',
    component: 'Input',
  },
];

export const columns: BasicColumn[] = [
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title: '属性id',
    dataIndex: 'attrId',
  },
  {
    title: '属性分组id',
    dataIndex: 'attrGroupId',
  },
  {
    title: '属性组内排序',
    dataIndex: 'attrSort',
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
    label: '属性id',
    field: 'attrId',
    required: true,
    component: 'Input',
  },
  {
    label: '属性分组id',
    field: 'attrGroupId',
    required: true,
    component: 'Input',
  },
  {
    label: '属性组内排序',
    field: 'attrSort',
    required: true,
    component: 'Input',
  },
];
