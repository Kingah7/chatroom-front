<template>
  <div>
    <el-card>
      <el-form class="loginForm">
        <h2>聊天室</h2>
        <el-form-item label="用户名：">
          <el-input
            v-model="formData.name"
            placeholder="请输入用户名"
            autofocus
          ></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input
            v-model="formData.pwd"
            placeholder="请输入密码"
            type="password"
          ></el-input>
        </el-form-item>

        <el-button 
        type="primary" style="margin-top: 15px" >登 录</el-button>
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
  methods: {
    login() {},
  },
};
</script>

<style lang="scss" scoped>
div {
  margin: auto;
  padding: 0;
  overflow: hidden !important;
  background-color: white;
  background-image: url("https://pic4.zhimg.com/v2-b10aa278478f11c60975d00c93a1ffff_r.jpg");
  height: 100vh;

  display: flex;
  align-items: center;

  .el-card {
    width: 550px;
    height: 300px;

    .loginForm {
      width: 500px;
      height: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .el-form-item {
        height: 50px;
        margin: 10px;
        .el-input {
          height: auto;
          background-color: transparent !important;
        }
      }
    }
  }
}
</style>