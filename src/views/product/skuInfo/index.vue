<template>
  <PageWrapper dense>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button
          @click="downloadExcel(skuInfoExport, 'sku信息数据', getForm().getFieldsValue())"
          v-auth="'pms:skuInfo:export'"
          >导出</a-button
        >
        <a-button
          type="primary"
          danger
          @click="multipleRemove(skuInfoRemove)"
          :disabled="!selected"
          v-auth="'pms:skuInfo:remove'"
          >删除</a-button
        >
        <a-button
          type="primary"
          @click="handleAdd"
          v-auth="'pms:skuInfo:add'"
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
                auth: 'pms:skuInfo:edit',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: '删除',
                icon: IconEnum.DELETE,
                type: 'primary',
                danger: true,
                ghost: true,
                auth: 'pms:skuInfo:remove',
                popConfirm: {
                  placement: 'left',
                  title: '是否删除sku信息[' + record.skuId + ']?',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <SkuInfoModal @register="registerModal" @reload="reload" />
  </PageWrapper>
</template>

<script setup lang="ts">
  import { PageWrapper } from '@/components/Page';
  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { skuInfoList, skuInfoExport, skuInfoRemove } from '@/api/pms/skuInfo';
  import { downloadExcel } from '@/utils/file/download';
  import { useModal } from '@/components/Modal';
  import SkuInfoModal from './SkuInfoModal.vue';
  import { formSchemas, columns } from './skuInfo.data';
  import { IconEnum } from '@/enums/appEnum';

  defineOptions({ name: 'SkuInfo' });

  const [registerTable, { reload, multipleRemove, selected, getForm }] = useTable({
    rowSelection: {
      type: 'checkbox',
    },
    title: 'sku信息列表',
    api: skuInfoList,
    showIndexColumn: false,
    rowKey: 'skuId',
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
    await skuInfoRemove([record.skuId]);
    await reload();
  }
</script>

<style scoped></style>
