<script setup lang="ts">
import { ref } from "vue";
import { useRoute, } from "vue-router";
const route = useRoute()
let title = ref(route.params.id)
</script>

<template>
  <div style="display: flex; width: 100%;">
    <span style="margin-right: 10px;">{{ title }}</span>
    <el-link type="primary" href="/home" :underline="false">返回首页</el-link>
  </div>
</template>

<style scoped>
a {
  display: inline;
  width: auto;
}
</style>
