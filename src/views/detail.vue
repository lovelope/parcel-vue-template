<template>
  <div class="detail">
    <mt-radio
      v-model="value"
      title="单选框列表"
      :options="['选项A', '选项B', '选项C']" />
  </div>
</template>
<style scoped>
div {
  height: 100%;
}
</style>
