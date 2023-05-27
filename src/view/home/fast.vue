<template>
  <el-card class="box-card">
    <h3 style="text-align: center;">快捷功能</h3>
    <el-row justify="end" :style="{ paddingRight: '20px' }">
      <el-icon class="setting" :size="26">
        <Setting />
      </el-icon>
    </el-row>
    <el-row>
      <el-col>
        <el-button type="primary">销售订单</el-button>
        <el-button type="primary">交付单</el-button>
      </el-col>
    </el-row>

  </el-card>
</template>

<style scoped>
.setting {
  cursor: pointer;
}
</style>
