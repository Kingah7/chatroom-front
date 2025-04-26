<template>
  <div>
    <el-card>
      <el-form class="loginForm">
        <h2>聊天室</h2>
        <el-form-item label="用户名">
          <el-input
            v-model="formData.name"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-button type="primary">登 录</el-button>
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
  background-color: white;
  height: 100vh;

  display: flex;
  align-items: center;

  .el-card {
    width: 550px;
    height: 350px;

    .loginForm {
      width: 500px;
      height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .
    }
  }
}
</style>