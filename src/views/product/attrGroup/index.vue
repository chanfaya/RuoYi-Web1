<template>
  <PageWrapper dense>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button
          @click="downloadExcel(attrGroupExport, '属性分组数据', getForm().getFieldsValue())"
          v-auth="'pms:attrGroup:export'"
          >导出</a-button
        >
        <a-button
          type="primary"
          danger
          @click="multipleRemove(attrGroupRemove)"
          :disabled="!selected"
          v-auth="'pms:attrGroup:remove'"
          >删除</a-button
        >
        <a-button
          type="primary"
          @click="handleAdd"
          v-auth="'pms:attrGroup:add'"
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
                auth: 'pms:attrGroup:edit',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: '删除',
                icon: IconEnum.DELETE,
                type: 'primary',
                danger: true,
                ghost: true,
                auth: 'pms:attrGroup:remove',
                popConfirm: {
                  placement: 'left',
                  title: '是否删除属性分组[' + record.attrGroupId + ']?',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <AttrGroupModal @register="registerModal" @reload="reload" />
  </PageWrapper>
</template>

<script setup lang="ts">
  import { PageWrapper } from '@/components/Page';
  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { attrGroupList, attrGroupExport, attrGroupRemove } from '@/api/pms/attrGroup';
  import { downloadExcel } from '@/utils/file/download';
  import { useModal } from '@/components/Modal';
  import AttrGroupModal from './AttrGroupModal.vue';
  import { formSchemas, columns } from './attrGroup.data';
  import { IconEnum } from '@/enums/appEnum';

  defineOptions({ name: 'AttrGroup' });

  const [registerTable, { reload, multipleRemove, selected, getForm }] = useTable({
    rowSelection: {
      type: 'checkbox',
    },
    title: '属性分组列表',
    api: attrGroupList,
    showIndexColumn: false,
    rowKey: 'attrGroupId',
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
    await attrGroupRemove([record.attrGroupId]);
    await reload();
  }
</script>

<style scoped></style>
