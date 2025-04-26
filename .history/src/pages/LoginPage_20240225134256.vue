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
  margin: auto;
  padding: 0;
  overflow: hidden !important;
  height: 100vh;

  background-color: white;
  .el-card {
    width: 500px;
    margin: a;
    .loginForm {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>