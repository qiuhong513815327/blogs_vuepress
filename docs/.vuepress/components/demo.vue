<template>
  <div class="container">
    <h1>vue组件</h1>
    <div class="box">{{ txt1 }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txt: "vue组件",
      txt1: "",
    };
  },
  mounted() {
    this.test();
  },
  methods: {
    test() {
      this.txt1 = "less模块";
    },
  },
};
</script>

<style lang="less">
.container {
  .box {
    width: 100px;
    height: 100px;
    background: rgb(131, 68, 156);
    color: #fff;
    border-radius: 50px;
    text-align: center;
    line-height: 100px;
  }
}
</style>sa