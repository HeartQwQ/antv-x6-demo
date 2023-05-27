<template>
  <div :style="{ width, height }"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  inject: ["getNode"],
  data() {
    return {
      width: "",
      height: ""
    };
  },
  mounted() {
    const node = (this as any).getNode();
    this.width = node.data.width
    this.height = node.data.height
  },
});
</script>

<style scoped>
div {
  border: 1px dashed #000;
}
</style>