<template>
  <div class="home">
    <el-container height="100%">
      <el-aside width="100px">
        <Nav :imgUrl="imgUrl"></Nav>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import { mapState } from "vuex";
import { reqHeadImg, reqLogin } from "@/api";
import connect from "@/api/ws";

export default {
  name: "App",
  components: {
    Nav,
  },
  data() {
    return {
      imgUrl: "",
    };
  },
  computed: {
    ...mapState({
      userName: (state) => state.userName,
    }),
  },
  created() {
    // 不需要带参
    reqLogin().then((resp) => {
      if (resp.code == 200) {
        this.$store.commit("SETUSERNAME", resp.data);
        // 建立socket连接
        this.$store.commit("SOCKET", connect(resp.data));
            reqHeadImg(this.userName).then((resp) => {
      this.imgUrl = resp.data;
    });
      }
    });

  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 90vw;
  height: 90vh;
  background-color: rgb(39, 42, 55);
  border-radius: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>