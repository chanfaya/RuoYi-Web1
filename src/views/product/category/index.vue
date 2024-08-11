<template>
  <PageWrapper dense>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button
          @click="downloadExcel(categoryExport, '分类维护', getForm().getFieldsValue())"
          v-auth="'pms:category:export'"
          >导出</a-button
        >
        <a-button
          type="primary"
          danger
          @click="multipleRemove(categoryRemove)"
          :disabled="!selected"
          v-auth="'pms:category:remove'"
          >删除</a-button
        >
        <a-button type="primary" @click="handleAdd" v-auth="'pms:category:add'">新增</a-button>
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
                auth: 'pms:category:edit',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: '删除',
                icon: IconEnum.DELETE,
                type: 'primary',
                danger: true,
                ghost: true,
                auth: 'pms:category:remove',
                popConfirm: {
                  placement: 'left',
                  title: '是否删除商品三级分类[' + record.catId + ']?',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <CategoryModal @register="registerModal" @reload="reload" />
  </PageWrapper>
</template>

<script setup lang="ts">
  import { PageWrapper } from '@/components/Page';
  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { categoryList, categoryExport, categoryRemove } from '@/api/pms/category';
  import { downloadExcel } from '@/utils/file/download';
  import { useModal } from '@/components/Modal';
  import CategoryModal from './CategoryModal.vue';
  import { formSchemas, columns } from './category.data';
  import { IconEnum } from '@/enums/appEnum';

  defineOptions({ name: 'Category' });

  const [registerTable, { reload, multipleRemove, selected, getForm }] = useTable({
    rowSelection: {
      type: 'checkbox',
    },
    title: '分类维护',
    api: categoryList,
    showIndexColumn: false,
    rowKey: 'catId',
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
    await categoryRemove([record.catId]);
    await reload();
  }
</script>

<style scoped></style>
