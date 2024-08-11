<template>
  <PageWrapper dense>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button
          @click="downloadExcel(attrExport, '商品属性数据', getForm().getFieldsValue())"
          v-auth="'pms:attr:export'"
          >导出</a-button
        >
        <a-button
          type="primary"
          danger
          @click="multipleRemove(attrRemove)"
          :disabled="!selected"
          v-auth="'pms:attr:remove'"
          >删除</a-button
        >
        <a-button type="primary" @click="handleAdd" v-auth="'pms:attr:add'">新增</a-button>
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
                auth: 'pms:attr:edit',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: '删除',
                icon: IconEnum.DELETE,
                type: 'primary',
                danger: true,
                ghost: true,
                auth: 'pms:attr:remove',
                popConfirm: {
                  placement: 'left',
                  title: '是否删除商品属性[' + record.attrId + ']?',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <AttrModal @register="registerModal" @reload="reload" />
  </PageWrapper>
</template>

<script setup lang="ts">
  import { PageWrapper } from '@/components/Page';
  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { attrList, attrExport, attrRemove } from '@/api/pms/attr';
  import { downloadExcel } from '@/utils/file/download';
  import { useModal } from '@/components/Modal';
  import AttrModal from './AttrModal.vue';
  import { formSchemas, columns } from './attr.data';
  import { IconEnum } from '@/enums/appEnum';

  defineOptions({ name: 'Attr' });

  const [registerTable, { reload, multipleRemove, selected, getForm }] = useTable({
    rowSelection: {
      type: 'checkbox',
    },
    title: '商品属性列表',
    api: attrList,
    showIndexColumn: false,
    rowKey: 'attrId',
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
    await attrRemove([record.attrId]);
    await reload();
  }
</script>

<style scoped></style>
