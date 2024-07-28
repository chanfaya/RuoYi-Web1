import { BasicColumn } from '@/components/Table';
import { FormSchema } from '@/components/Form';

export const formSchemas: FormSchema[] = [
  {
    label: '评论id',
    field: 'commentId',
    component: 'Input',
  },
  {
    label: '回复id',
    field: 'replyId',
    component: 'Input',
  },
];

export const columns: BasicColumn[] = [
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title: '评论id',
    dataIndex: 'commentId',
  },
  {
    title: '回复id',
    dataIndex: 'replyId',
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
    label: '评论id',
    field: 'commentId',
    required: true,
    component: 'Input',
  },
  {
    label: '回复id',
    field: 'replyId',
    required: true,
    component: 'Input',
  },
];
