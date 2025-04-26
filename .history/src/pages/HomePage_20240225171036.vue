<template>
  <div class="home">
    <el-container height="100%">
      <el-aside width="100px">
        <Nav :imgUrl=></Nav>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import { mapState } from 'vuex';
import { reqHeadImg } from '@/api';
export default {
  name: "App",
  components: {
    Nav
  },
  data() {
    ret
  }
  computed:{
    ...mapState({
      userName: state => state.userName
    })
  },
  created() {
    reqHeadImg(this.userName).then(resp => {
      this.imgUrl = resp.data
    })
  }
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