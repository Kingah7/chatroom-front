<template>
  <div>
    <el-card>
      <el-form class="loginForm">
        <el-form-item label="用户名">
          <el-input
            v-model="formData.name"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      formData: {
        name: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  margin: 0;
  padding: 0;
  overflow: hidden !important;

  .el-card {
    width: 500px;
    height: 500px;
    .loginForm {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
  }
}
</style>