<template>
  <div class="leaderboardwrap">
    <div class="imgcontent">
        <div class="tab">
          <commonTab :tabinfo="tabinfo" :tabid="tabid" @changeCommonTab="changeCommonTab"></commonTab>
        </div>
    </div>
    <div class="trendcontent">
      <div class="serarchb" v-if="tabid !== 1">
        <select class="same" v-model="trendcontry">
          <option :value="item.value" v-for="(item, index) in Coptionlist" :key="'index' + index" >{{item.name}}</option>
        </select>
      </div>

      <div class="tablecontent">
        <board :dataList="dataList"></board>
      </div>
    </div>
  </div>
</template>
<script>
import commonTab from "@/components/common/CommonTab";
import board from './components/Board.vue'
export default {
  components: {commonTab, board},
  data() {
    return {
      tabid: 1,
      tabinfo: [
            {
                id: 1,
                name: "全国榜",
                value: 1
            },
            {
                id: 2,
                name: "RSM榜",
                value: 2
            },
            {
                id: 3,
                name: "DSM榜",
                value: 3
            },
            {
                id: 4,
                name: "个人榜",
                value: 4
            }
      ],
      trendcontry: '',
      Coptionlist: [
          {
            value: 0,
            name: '请选择大区'
        },{
            value: 1,
            name: '全国'
        },
        {
            value: 2,
            name: '全国1'
        },
      ],
      dataList: [
        {
          id: '',
          No: '1',
          area: '中区',
          RSM: 'RSM01',
          DSM: 'DSM01',
          chuanxinzhi: 1000,
          anlishu: 12
        },
        {
          id: '',
          No: '2',
          area: '中区',
          RSM: 'RSM01',
          DSM: 'DSM01',
          chuanxinzhi: 1000,
          anlishu: 12
        },
        {
          id: '',
          No: '3',
          area: '中区',
          RSM: 'RSM01',
          DSM: 'DSM01',
          chuanxinzhi: 1000,
          anlishu: 12
        },
        {
          id: '',
          No: '4',
          area: '中区',
          RSM: 'RSM01',
          DSM: 'DSM01',
          chuanxinzhi: 1000,
          anlishu: 12
        },
      ]
    }
  },
  created() {
    this.trendcontry = this.Coptionlist[0].value
  },
  methods: {
    changeCommonTab(item) {
      this.tabid = item.id;
    }
  }
}
</script>>
<style lang="less" scoped>
.leaderboardwrap{
    width: 100%;
    height: 100%;
    // background: yellow;
    background:rgba(230,240,250,1);
    overflow-y: auto;
    .imgcontent{
      width: 100%;
      height: 5.6rem; 
      background: url('../../../styles/img/paihang.png') no-repeat;
      background-size: 100% 100%;
      position: relative;
      margin-bottom: 0.4rem;
      .tab{
        width: 100%;
        height: 1.6rem;
        position: absolute;
        left: 0;
        bottom: 0;
        box-shadow:0rem 0rem 0rem 0rem rgba(47,116,172,0.2);
        opacity:0.9;
      }
    }
    .trendcontent{
      box-sizing: border-box;
      width: 100%;
      background: #ffffff;
      // padding: 0.4rem;
      .serarchb {
          box-sizing: border-box;
          padding: 0.4rem 0.4rem 0 0.4rem;
          .same {
            width: 100%;
            box-sizing: border-box;
            border: none;
            outline: none;
            height: 1.12rem;
            padding-left: 0.48rem;
            background:rgba(238,238,238,1);
            border-radius:1rem;
            margin-bottom: 0.25rem
          }
      }
      .tablecontent{
        width: 100%;
        // background: yellow;
      }
    }
}
</style>>