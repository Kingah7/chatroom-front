<template>
  <div></div>
</template>

<script>
export default {
  name:"ChatRoomPage",
  methods:{
        //发送文字信息
    sendText() {
      if (this.inputMsg) {
        let chatMsg = {
          headImg: require("@/assets/img/head_portrait.jpg"),
          name: "大毛是小白",
          time: "09：12 AM",
          msg: this.inputMsg,
          chatType: 0, //信息类型，0文字，1图片
          uid: "1001", //uid
        };
        this.sendMsg(chatMsg);
        this.$emit('personCardSort', this.frinedInfo.id)
        this.inputMsg = "";
      } else {
        this.$message({
          message: "消息不能为空哦~",
          type: "warning",
        });
      }
    },
  }
}
</script>

<style lang="scss" scoped>
<