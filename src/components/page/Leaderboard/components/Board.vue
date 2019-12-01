<template>
  <div class="boardwrap">
    <div class="titlewrap">
      <div>排名</div>
      <div>大区</div>
      <div>RSM</div>
      <div>DSM</div>
      <div>创新值</div>
      <div>优秀案例数</div>
    </div>
    <div class="contentwrap" v-for="(item, index) in dataList" :key="index">
        <div :class="[item.No == 1 ? 'active' : (item.No == 2 ? 'active1': '')]" class="paiming">{{item.No == 1 ? '' : (item.No == 2 ? '': item.No)}}</div>
        <div>{{item.area}}</div>
        <div>{{item.RSM}}</div>
        <div>{{item.DSM}}</div>
        <div>{{item.chuanxinzhi}}</div>
        <div>{{item.anlishu}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dataList: {
      type: Array 
    }
  }
}
</script>>
<style lang="less" scoped>
.boardwrap{
    box-sizing: border-box;
    width: 100%;
    overflow-y: auto;
    height: 100%;
    padding: 0.34rem 0.58rem;
    .titlewrap{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size:0.56rem;
      font-family:Source Han Sans CN;
      font-weight:bold;
      color:rgba(131,140,159,1);
      padding-bottom: 0.45rem;
      border-bottom: 0.04rem solid rgba(197,204,214,1);
    }
    .contentwrap{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size:0.56rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(65,86,104,1);
      padding: 0.34rem 0;
      border-bottom: 0.04rem solid rgba(197,204,214,1);
    }
    .paiming{
        width: 1.2rem;
        height: 1.2rem;
    };
    .active{
      background: url('../../../../styles/img/No1.png') no-repeat;
      background-size: 100% 100%;
    }
    .active1{
      background: url('../../../../styles/img/No1.png') no-repeat;
      background-size: 100% 100%;
    }
    .active2{
      background: url('../../../../styles/img/No1.png') no-repeat;
      background-size: 100% 100%;
    }
}
</style>>