export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  addBtn: false,
  editBtn: false,
  delBtn: false,
  column: [
    {
      label: '公告标题',
      prop: 'title',
      search: true
    },
    {
      label: '状态',
      prop: 'status',
      search: true,
      slot: true,
      type: 'select',
      dicData: [
        {
          label: '撤销',
          value: 0
        }, {
          label: '公布',
          value: 1
        }
      ]
    },
    {
      label: '是否置顶',
      prop: 'isTop',
      search: true,
      slot: true,
      type: 'select',
      dicData: [
        {
          label: '否',
          value: 0
        }, {
          label: '是',
          value: 1
        }
      ]
    }
  ]
}
