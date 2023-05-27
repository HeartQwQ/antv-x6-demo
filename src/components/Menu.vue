<template>
  <el-menu class="menu" active-text-color="#fff" background-color="#545c64" text-color="#fff" @open="handleOpen"
    @close="handleClose">
    <el-menu-item index="1">
      <router-link to="/home">首页</router-link>
    </el-menu-item>
    <!-- 订单 -->
    <el-sub-menu index="2">
      <template #title>
        <span>订单</span>
      </template>
      <el-menu-item index="2-1">
        <router-link to="/index/销售订单">销售订单</router-link>
      </el-menu-item>
      <el-menu-item index="2-2">
        <router-link to="/index/交付单">交付单</router-link>
      </el-menu-item>
      <el-menu-item index="2-3">
        <router-link to="/index/任务单">任务单</router-link>
      </el-menu-item>
      <el-menu-item index="2-4">
        <router-link to="/index/采购订单">采购订单</router-link>
      </el-menu-item>
      <el-menu-item index="2-5">
        <router-link to="/index/工作单">工作单</router-link>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
}

a {
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;
  text-decoration: none
}
</style>