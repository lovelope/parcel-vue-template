<template>
  <div class="index">
    {{ username }}
    <mt-field
      v-model="username"
      label="用户名"
      placeholder="请输入用户名" />
  </div>
</template>
<script>
export default{
  data() {
    return {
      username: '',
    };
  },
};
</script>
