<template>
  <div class="role-modal">
    <el-dialog
      v-model="DialogVisible"
      :title="isNewRef ? '新建用户' : '编辑用户'"
      width="500"
      center
    >
      <el-form v-model="formData" class="form" size="large">
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="formData.name" placeholder="请输入角色名称"></el-input>
        </el-form-item>
        <el-form-item label="权限介绍" prop="intro">
          <el-input v-model="formData.intro" placeholder="请输入权限介绍"></el-input>
        </el-form-item>
      </el-form>
      <el-form-item prop="menuList">
        <el-tree
          ref="TreeRef"
          class="tree"
          style="max-width: 600px"
          :data="menuList"
          show-checkbox
          node-key="id"
          :props="defaultProps"
        />
      </el-form-item>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="DialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'
import type { TreeInstance } from 'element-plus'
import type { Tree } from 'element-plus/lib/components/tree-v2/src/types.js'

const DialogVisible = ref(false)
const isNewRef = ref(true)
const queryInfo = {}
const editdata = ref()
const systemStore = useSystemStore()
const TreeRef = ref<TreeInstance | null>(null)

interface FormDataType {
  name: string
  intro: string
  menuList: any[]
}
const formData = reactive<FormDataType>({
  name: '',
  intro: '',
  menuList: []
})

const defaultProps = {
  children: 'children',
  label: 'name'
}

function setModalVisible(isNew: boolean = true, itemdata?: any) {
  DialogVisible.value = true
  isNewRef.value = isNew
  if (!isNew && itemdata) {
    // 编辑
    for (const key in formData) {
      const handleKey = key as keyof FormDataType
      formData[handleKey] = itemdata[key]
    }
    editdata.value = itemdata
  } else {
    // 新建
    for (const key in formData) {
      const handleKey = key as keyof FormDataType
      if (handleKey === 'menuList') {
        formData[handleKey] = []
      } else {
        formData[handleKey] = ''
      }
    }
    editdata.value = null
  }
}
defineExpose({ setModalVisible })

// 拿菜单数据
systemStore.getMenuListDataAction(queryInfo)
const { menuList } = storeToRefs(systemStore)

function getIds(data: any[]) {
  const idArr: number[] = []
  if (data) {
    for (let item of data) {
      idArr.push(item.id)
      if (item.children?.length) {
        const arr = getIds(item.children)
        idArr.push(...arr)
      }
    }
  }
  return idArr
}

// 发送网络请求
function handleConfirmClick() {
  const arr = TreeRef.value?.getCheckedNodes(true, true) ?? []

  formData.menuList = Array.from(new Set(getIds(arr)))

  systemStore.newRoleAction(formData)
  DialogVisible.value = false
}
</script>

<style lang="less" scoped>
.role-modal {
  .form {
    padding: 0 20px;
  }
  .tree {
    text-align: center;
  }
}
</style>
