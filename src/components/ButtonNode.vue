<template>
  <el-button :style="{ width: '100px', height: '50px' }" :type="type" @click="add">{{ title }}</el-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  inject: ["getNode"],
  data() {
    return {
      title: "",
      url: "",
      type: ""
    };
  },
  mounted() {
    const node = (this as any).getNode();
    this.title = node.data.title
    this.url = node.data.url
    this.type = node.data.type
  },
  methods: {
    add() {
      this.$router.push(this.url)
    }
  }
});
</script>