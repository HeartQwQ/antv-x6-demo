<template>
  <el-card class="box-card">
    <el-config-provider :locale="zhCn">
      <el-calendar v-model="value">
      </el-calendar>
    </el-config-provider>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const value = ref(new Date())
</script>

<style scoped>
:deep .el-calendar-day {
  height: 60px !important;
  line-height: 44px;
  text-align: center;
}

:deep .el-calendar__body {
  padding: 0;
}
</style>