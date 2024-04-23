<template>
  <div class="panel-account">
    <el-form :model="account" :rules="accountRules" label-width="60px" size="large" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormRules, ElForm } from 'element-plus/lib'
import useLoginStore from '@/store/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'

const CACHE_NAME = 'name'
const CACHE_PASSWORD = 'password'

// 1. 定义数据
const account = reactive<IAccount>({
  name: localCache.getCache(CACHE_NAME) ?? '',
  password: localCache.getCache(CACHE_PASSWORD) ?? ''
})
// 2. 定义校验规则
const accountRules: FormRules = {
  name: [
    { required: true, message: '必须输入账号信息！', trigger: 'blur' },
    { pattern: /^[a-z0-9]{6,20}$/, message: '必须是6~20数字或字母组成', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '必须输入密码！', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,}$/, message: '必须是3位以上数字或字母组成', trigger: 'blur' }
  ]
}
// 3.执行账号的登录逻辑
const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()
function loginAction(isRempwd: boolean) {
  formRef.value?.validate(valid => {
    if (valid) {
      // 1. 获取登录的帐号和密码
      const name = account.name
      const password = account.password
      // 2. 向服务器发送网络请求（携带账号和密码）
      loginStore.loginAccountAction({ name, password }).then(() => {
        if (isRempwd) {
          localCache.setCache(CACHE_NAME, name)
          localCache.setCache(CACHE_PASSWORD, password)
        } else {
          localCache.removeCache(CACHE_NAME)
          localCache.removeCache(CACHE_PASSWORD)
        }
      })
    } else {
      ElMessage.error('请输入正确的格式再进行登录！')
    }
  })
}
defineExpose({
  loginAction
})
</script>

<style lang="less" scoped>
.panel-account {
  color: red;
}
</style>
