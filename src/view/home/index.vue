<script setup lang="ts">

</script>

<template>
  <el-row justify="space-between" :gutter="20">
    <!-- 快捷功能 -->
    <el-col :span="18">
      <fast></fast>
    </el-col>
    <!-- 日历 -->
    <el-col :span="6">
      <calendar></calendar>
    </el-col>


  </el-row>
  <el-row class="br" justify="space-between" :gutter="20">
    <!-- 功能地图 -->
    <el-col :span="18">
      <flowChart></flowChart>
    </el-col>
    <!-- 资讯 -->
    <el-col :span="6">
      <information></information>
    </el-col>
  </el-row>
</template>

<style scoped>
.br {
  margin-top: 20px;
}
</style>
