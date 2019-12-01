<template>
  <div class="trendwrapper">
    <div class="tab">
      <commonTab :tabinfo="tabinfo" :tabid="tabid" @changeCommonTab="changeCommonTab"></commonTab>
    </div>
    <div class="trendcontent">

      <div class="serarchb" v-if="tabid !== 1">
          <select class="same trendcontry" v-model="trendcontry" :class="[tabid == 3||tabid == 4 ? 'active': '']">
          <option :value="item.value" v-for="(item, index) in Coptionlist" :key="'index' + index" >{{item.name}}</option>
          </select>
          <select class="same trendrsm" v-model="trendrsm" v-if="tabid !== 2">
          <option :value="item.value" v-for="(item, index) in Roptionlist" :key="'index' + index" >{{item.name}}</option>
          </select>
          <select class="same trendcontry" v-model="trenddsm" v-if="tabid == 4">
          <option :value="item.value" v-for="(item, index) in Doptionlist" :key="'index' + index" >{{item.name}}</option>
          </select>
          <div class="search">查询</div>
      </div>

      <div class="counter">
        <div class="zonganli">
          <div class="zonganli1">
            <img src="../../../styles/img/案例.png" alt="">
            <span>总案例数</span>
          </div>
          <div class="count">32300</div>
        </div>
        <div class="zonganli">
          <div class="zonganli1">
            <img src="../../../styles/img/案例.png" alt="">
            <span>总案例数</span>
          </div>
          <div class="count">32300</div>
        </div>
      </div>

      <div id="charts1"></div>

    </div>
  </div>
</template>
<script>
import commonTab from "@/components/common/CommonTab";
var echarts = require("echarts");
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
      trendcontry: '',
      trendrsm: '',
      trenddsm: '',
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
      ],
      chart: null
    }
  },
  created() {
      this.trendcontry = this.Coptionlist[0].value
      this.trendrsm = this.Roptionlist[0].value
      this.trenddsm = this.Doptionlist[0].value
  },
  mounted() {
    this.init()
  },
  methods: {
    changeCommonTab(item) {
      this.tabid = item.id;
    },
    init() {
      this.chart = echarts.init(document.getElementById('charts1'))
      var xdata = ['1901', '1902', '1903', '1904', '1905', '1906', '1907', '1908', '1909', '1910', '1911', '1912'];
      var legendData =['案例数','点子数'];
      var dataArr = [20, 12, 31, 34, 31, 20, 12, 31, 34, 31, 20, 12];
      var dataArr2 =  [10, 20, 5, 9, 3, 10, 20, 5, 9, 3, 10, 20];
      var colorSet =new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#2D85CD'
                }, {
                    offset: 1,
                    color: '#006EFB'
                }]);
      var colorSet2 =  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FACB67'
                }, {
                    offset: 1,
                    color: '#FACB67'
      }])
      var option = {
          title: {
              // text: '2016年12月长宁区合规成本分析'
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                  type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              }
          },
          legend: {
              // show:true,
              selectedMode:false,
              data:legendData,
              align: 'right',
              right: 10,
              textStyle: {
                  color: '#000'
              },
          },
          grid: {
              top: '10%',
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          calculable: true,
          xAxis: [{
              type: 'category',
              axisLabel: {
                  textStyle: {
                      fontSize: 14,
                      color: '#000'
                  },
                  interval: '0',
                  formatter:function(params) {
                      var newParamsName = "";
                      var paramsNameNumber = params.length;
                      var provideNumber = 2;  //一行显示几个字
                      var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                      if (paramsNameNumber > provideNumber) {
                          for (var p = 0; p < rowNumber; p++) {
                              var tempStr = "";
                              var start = p * provideNumber;
                              var end = start + provideNumber;
                              if (p == rowNumber - 1) {
                                  tempStr = params.substring(start, paramsNameNumber);
                              } else {
                                  tempStr = params.substring(start, end) + "\n";
                              }
                              newParamsName += tempStr;
                          }

                      } else {
                          newParamsName = params;
                      }
                      return newParamsName
                  },
              },
              axisLine: {
                  lineStyle: {
                      color: '#00A2FF',
                      width: 2
                  }
              },
              axisTick: {
                  show: false
              },
              // splitLine: {
              //     lineStyle: {
              //         type: 'dashed',
              //         color: '#DDD'
              //     }
              // },
              data:xdata
          }],
          yAxis: [{
              type: 'value',
              // name: '总价(万元)',
              axisLabel: {
                  formatter: '{value}',
                  color: '#415668',
                  fontSize: 14
              },
              axisLine: {
                  lineStyle: {
                      color: 'rgba(255,255,255,0)'
                      // color:'65F5FD'
                  }
              },
              splitLine: {
                  lineStyle: {
                      type: 'dashed',
                      color: '#385B71'
                  }
              },
          }],
          series: [{
              name: legendData[0],
              type: 'bar',
              barWidth: 8, //柱子宽度
              barGap: 0.5, //柱子之间间距
              itemStyle: {
                  normal: {
                      color:colorSet
                      // barBorderRadius: 10,
                  }
              },
              data: dataArr
          }, {
              name:legendData[1],
              type: 'bar',
              barWidth: 8, //柱子宽度
              barGap: 0.5, //柱子之间间距
              itemStyle: {
                  normal: {
                      color:colorSet2
                      // barBorderRadius: 10,
                  }
              },
              data:dataArr2
          },{
            data: dataArr,
            type: 'line',
            showSymbol: false,
            lineStyle: {
              color: '#2D85CD',
            }
          },{
            data: dataArr2,
            type: 'line',
            showSymbol: false,
            lineStyle: {
              color: '#FFB85D',
            }
          }]
      };
      this.chart.setOption(option);
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
    overflow-y: auto;
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
          .same {
            float: left;
            box-sizing: border-box;
            border: none;
            outline: none;
            height: 1.12rem;
            padding-left: 0.48rem;
            background:rgba(238,238,238,1);
            border-radius:1rem;
            margin-bottom: 0.25rem
          }
          .trendcontry{
            width: 85%;
            margin-right: 0.15rem;
          }
          .trendrsm {
            width: 45%;
            margin-right: 0.05rem;
          }
        .active {
          width: 45%;
        }
        .search{
            font-weight:bold;
          font-size: 0.56rem;
          margin-left: 0.05rem;
          line-height: 1.12rem;
          float: left;
          color:rgba(45,133,205,1);
        }
      }
      .counter{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: url("../../../styles/img/counter.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        .zonganli{
          box-sizing: border-box;
          padding-top: 0.56rem;
          padding-bottom: 0.64rem;
          
          .zonganli1{
            box-sizing: border-box;
            padding: 0.1rem 0.38rem;
            font-size:0.48rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(45,133,205,1);
            background:rgba(255,255,255,1);
            opacity:0.8;
            border-radius:1rem;
            letter-spacing: 0.05rem;
            img{
              width: 0.48rem;
              height: 0.48rem;
            }
          }
          .count{
            text-align: center;
            font-size:1.04rem;
            font-family:Source Han Sans CN;
            font-weight:bold;
            color:#FFFFFF;
            margin-top: 0.22rem;
          }
        }
        .zonganli::before{
          content: "";
          width: 1px;
          height: calc(~"100% - 0.60rem - 0.64rem");
          position: absolute;
          top: 0.60rem;
          left: 50%;
          opacity:0.4;
          background:rgba(255,255,255,1);
        }
      }
      #charts1{
        width: 100%;
        height: 15rem;
        margin-top: 0.6rem;
      }
    }
  }
</style>>