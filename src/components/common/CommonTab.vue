<template>
  <section class="common-tab">
    <div
      class="tab-item"
      v-for="(item) in tabinfo"
      :key="'tab'+item.id"
      :class="{'active':item.id==tabid}"
      @click="changetabbar(item)"
    >{{item.name}}</div>
  </section>
</template>

<script>
export default {
  name: "CommonTab",
  props: {
    tabinfo: {
      type: Array
    },
    tabid: {
      type: Number
    }
  },
  data() {
    return {};
  },
  methods: {
    changetabbar(item) {
      this.$emit("changeCommonTab", item);
    }
  },
  created() {},
  watch: {}
};
</script>

<style lang="less" scoped>
.common-tab {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #ffffff;
  .tab-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:0.64rem;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(65,86,104,1);
    transition: all 0.5s;
    position: relative;
    &.active {
      font-size:0.64rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(45,133,205,1);
    }
    &.active:after{
      content: "";
      width: 1.2rem;
      height: 1px;
      position: absolute;
      top: 1.4rem;
      left: 1.26rem;
      background:rgba(45,133,205,1);
    }
    &::before{
      content: "";
      width: 1px;
      height: 0.64rem;
      position: absolute;
      top: 0.48rem;
      left: 100%;
      opacity:0.2;
      background:rgba(65,86,104,1);
    }
  }
}
</style>