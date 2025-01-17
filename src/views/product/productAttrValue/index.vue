<template>
  <PageWrapper dense>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button
          @click="downloadExcel(productAttrValueExport, 'spu属性值数据', getForm().getFieldsValue())"
          v-auth="'pms:productAttrValue:export'"
          >导出</a-button
        >
        <a-button
          type="primary"
          danger
          @click="multipleRemove(productAttrValueRemove)"
          :disabled="!selected"
          v-auth="'pms:productAttrValue:remove'"
          >删除</a-button
        >
        <a-button
          type="primary"
          @click="handleAdd"
          v-auth="'pms:productAttrValue:add'"
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
                auth: 'pms:productAttrValue:edit',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: '删除',
                icon: IconEnum.DELETE,
                type: 'primary',
                danger: true,
                ghost: true,
                auth: 'pms:productAttrValue:remove',
                popConfirm: {
                  placement: 'left',
                  title: '是否删除spu属性值[' + record.id + ']?',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <ProductAttrValueModal @register="registerModal" @reload="reload" />
  </PageWrapper>
</template>

<script setup lang="ts">
  import { PageWrapper } from '@/components/Page';
  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { productAttrValueList, productAttrValueExport, productAttrValueRemove } from '@/api/pms/productAttrValue';
  import { downloadExcel } from '@/utils/file/download';
  import { useModal } from '@/components/Modal';
  import ProductAttrValueModal from './ProductAttrValueModal.vue';
  import { formSchemas, columns } from './productAttrValue.data';
  import { IconEnum } from '@/enums/appEnum';

  defineOptions({ name: 'ProductAttrValue' });

  const [registerTable, { reload, multipleRemove, selected, getForm }] = useTable({
    rowSelection: {
      type: 'checkbox',
    },
    title: 'spu属性值列表',
    api: productAttrValueList,
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
    await productAttrValueRemove([record.id]);
    await reload();
  }
</script>

<style scoped></style>
