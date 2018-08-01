<template>
  <div class="app">
    <mt-tabbar
      v-model="selected"
      fixed>
      <mt-tab-item id="index">
        <img
          slot="icon"
          src="https://cn.vuejs.org/images/logo.png"> 首页
      </mt-tab-item>
      <mt-tab-item id="detail">
        <img
          slot="icon"
          src="https://cn.vuejs.org/images/logo.png"> 详情
      </mt-tab-item>
    </mt-tabbar>
    <router-view />
  </div>
</template>
<style>
div {
  color: green;
}
</style>
<script>
export default {
  data() {
    return {
      selected: '',
    };
  },
  watch: {
    selected(select) {
      if (select) {
        if (select === 'index') {
          this.$router.push('/index');
        } else if (select === 'detail') {
          this.$router.push('/detail');
        }
      }
    },
  },
};
</script>
