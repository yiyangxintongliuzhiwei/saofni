<template>
  <div class="trendwrapper">
    <div class="tab">
      <commonTab :tabinfo="tabinfo" :tabid="tabid" @changeCommonTab="changeCommonTab"></commonTab>
    </div>
    <div class="trendcontent">
    <div class="serarchb" v-if="tabid == 2">
        <select class="trendcontry" v-model="DQ.trendcontry">
         <option :value="item.value" v-for="(item, index) in Coptionlist" :key="'index' + index" >{{item.name}}</option>
        </select>
        <div class="search">查询</div>
    </div>



    <div class="serarchr" v-if="tabid == 3">
        <select class="trendcontry" v-model="RSM.Rtrendcontry">
         <option :value="item.value" v-for="(item, index) in Coptionlist" :key="'index' + index" >{{item.name}}</option>
        </select>
        <select class="trendcontry" v-model="RSM.trendrsm">
         <option :value="item.value" v-for="(item, index) in Roptionlist" :key="'index' + index" >{{item.name}}</option>
        </select>
        <div class="search">查询</div>
    </div>


    <div class="serarchd" v-if="tabid == 4">
        <select class="trendcontry" v-model="DSM.Dtrendcontry">
         <option :value="item.value" v-for="(item, index) in Coptionlist" :key="'index' + index" >{{item.name}}</option>
        </select>
        <select class="trendcontry" v-model="DSM.Dtrendrsm">
         <option :value="item.value" v-for="(item, index) in Roptionlist" :key="'index' + index" >{{item.name}}</option>
        </select>
        <select class="trendcontry1" v-model="DSM.trenddsm">
         <option :value="item.value" v-for="(item, index) in Doptionlist" :key="'index' + index" >{{item.name}}</option>
        </select>
        <div class="search1">查询</div>
    </div>
    </div>
  </div>
</template>
<script>
import commonTab from "@/components/common/CommonTab";
export default {
  components: {commonTab},
  data () {
    return {
      tabid: 1,
      tabinfo: [
        {
          id: 1,
          name: "全国",
          value: 1
        },
        {
          id: 2,
          name: "大区",
          value: 2
        },
        {
          id: 3,
          name: "RSM",
          value: 3
        },
        {
          id: 4,
          name: "DSM",
          value: 4
        }
      ],
      //大区搜索值
      DQ: {
        trendcontry: '',
      },
      //RSM搜索条件
      RSM:{
        Rtrendcontry: '',
        trendrsm: ''
      },
      //DSM搜索条件
      DSM: {
        Dtrendcontry: '',
        Dtrendrsm: '',
        trenddsm: ''
      },
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
      Roptionlist: [
          {
            value: 0,
            name: '请选择RSM'
        },{
            value: 1,
            name: '全国'
        },
        {
            value: 2,
            name: '全国1'
        },
      ],
      Doptionlist: [
          {
            value: 0,
            name: '请选择DSM'
        },{
            value: 1,
            name: '全国'
        },
        {
            value: 2,
            name: '全国1'
        },
      ]
    }
  },
  created() {
      this.DQ.trendcontry = this.RSM.Rtrendcontry = this.DSM.Dtrendcontry= this.Coptionlist[0].value
      this.RSM.trendrsm = this.DSM.Dtrendrsm = this.Roptionlist[0].value
      this.DSM.trenddsm = this.Doptionlist[0].value
  },
  methods: {
    changeCommonTab(item) {
      this.tabid = item.id;
    }
  }
}
</script>>
<style lang="less" scoped>
  .trendwrapper{
    width: 100%;
    height: 100%;
    // background: yellow;
    background:rgba(230,240,250,1);
    .tab {
      width: 100%;
      height: 1.6rem;
      margin-bottom: 0.4rem;
    }
    .trendcontent{
      box-sizing: border-box;
      width: 100%;
      background: #ffffff;
      padding: 0.4rem;
      .serarchb {
          .trendcontry{
            float: left;
            box-sizing: border-box;
            border: none;
            outline: none;
            width: 85%;
            height: 1.12rem;
            padding-left: 0.48rem;
            background:rgba(238,238,238,1);
            border-radius:1rem;
            margin-right: 0.25rem;
        }
        .search{
            font-weight:bold;
          font-size: 0.56rem;
          margin-left: 0.25rem;
          line-height: 1.12rem;
          float: left;
          color:rgba(45,133,205,1);
        }
      }
      .serarchr {
         .trendcontry{
            float: left;
            box-sizing: border-box;
            border: none;
            outline: none;
            width: 45%;
            height: 1.12rem;
            padding-left: 0.48rem;
            background:rgba(238,238,238,1);
            border-radius:1rem;
            margin-right: 0.1rem;
        }
        .search{
            font-weight:bold;
          font-size: 0.56rem;
          margin-left: 0.1rem;
          line-height: 1.12rem;
          float: left;
          color:rgba(45,133,205,1);
        } 
      }
      .serarchd {
         .trendcontry{
            float: left;
            box-sizing: border-box;
            border: none;
            outline: none;
            width: 49%;
            height: 1.12rem;
            padding-left: 0.48rem;
            background:rgba(238,238,238,1);
            border-radius:1rem;
            margin-right: 0.1rem;
        }
        .search{
            font-weight:bold;
          font-size: 0.56rem;
          margin-left: 0.1rem;
          line-height: 1.12rem;
          float: left;
          color:rgba(45,133,205,1);
        } 
        .trendcontry1{
            float: left;
            box-sizing: border-box;
            border: none;
            outline: none;
            width:85%;
            height: 1.12rem;
            padding-left: 0.48rem;
            background:rgba(238,238,238,1);
            border-radius:1rem;
            margin-right: 0.1rem;
            margin-top: 0.3rem
        }
        .search1{
            font-weight:bold;
          font-size: 0.56rem;
          margin-left: 0.5rem;
          line-height: 1.9rem;
          float: left;
          color:rgba(45,133,205,1);
        } 
      }
      
    }
  }
</style>>