<template>
  <PageWrapper dense>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button
          @click="downloadExcel(commentReplayExport, '商品评价回复关系数据', getForm().getFieldsValue())"
          v-auth="'pms:commentReplay:export'"
          >导出</a-button
        >
        <a-button
          type="primary"
          danger
          @click="multipleRemove(commentReplayRemove)"
          :disabled="!selected"
          v-auth="'pms:commentReplay:remove'"
          >删除</a-button
        >
        <a-button
          type="primary"
          @click="handleAdd"
          v-auth="'pms:commentReplay:add'"
          >新增</a-button
        >
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            stopButtonPropagation
            :actions="[
              {
                label: '修改',
                icon: IconEnum.EDIT,
                type: 'primary',
                ghost: true,
                auth: 'pms:commentReplay:edit',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: '删除',
                icon: IconEnum.DELETE,
                type: 'primary',
                danger: true,
                ghost: true,
                auth: 'pms:commentReplay:remove',
                popConfirm: {
                  placement: 'left',
                  title: '是否删除商品评价回复关系[' + record.id + ']?',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <CommentReplayModal @register="registerModal" @reload="reload" />
  </PageWrapper>
</template>

<script setup lang="ts">
  import { PageWrapper } from '@/components/Page';
  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { commentReplayList, commentReplayExport, commentReplayRemove } from '@/api/pms/commentReplay';
  import { downloadExcel } from '@/utils/file/download';
  import { useModal } from '@/components/Modal';
  import CommentReplayModal from './CommentReplayModal.vue';
  import { formSchemas, columns } from './commentReplay.data';
  import { IconEnum } from '@/enums/appEnum';

  defineOptions({ name: 'CommentReplay' });

  const [registerTable, { reload, multipleRemove, selected, getForm }] = useTable({
    rowSelection: {
      type: 'checkbox',
    },
    title: '商品评价回复关系列表',
    api: commentReplayList,
    showIndexColumn: false,
    rowKey: 'id',
    useSearchForm: true,
    formConfig: {
      schemas: formSchemas,
      baseColProps: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 6,
      },
    },
    columns: columns,
    actionColumn: {
      width: 200,
      title: '操作',
      key: 'action',
      fixed: 'right',
    },
  });

  const [registerModal, { openModal }] = useModal();

  function handleEdit(record: Recordable) {
    openModal(true, { record, update: true });
  }

  function handleAdd() {
    openModal(true, { update: false });
  }

  async function handleDelete(record: Recordable) {
    await commentReplayRemove([record.id]);
    await reload();
  }
</script>

<style scoped></style>
