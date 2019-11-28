<template>
  <div class="chartDiv">
      <div class="canvasOne"  v-for='(id,index) in ids' :key='id'>
          <div :id="id" class="canvasStyle"></div>
          <p>图{{index+1}}</p>
      </div>
    
  </div>
</template>
<script>
var echarts = require("echarts");
export default {
    data(){
        return {
            ids:['echart1','echart2','echart3','echart4','echart5','echart6','echart7','echart8','echart9','echart10','echart11']
        }
        
    },
  mounted() {
    this.ids.forEach(item => {
        echarts.init(document.getElementById(item)).setOption(this[item]());
    })
  },
  methods: {
      // 图1
    echart1() {
      var dataTitle = ["1级 : 16人", "2级 : 20人", "3级 : 14人", "4级 : 12人"];
      var sunPeople = "52总数";
      let option = {
        // 图形的配置
        legend: {
          x: "68%",
          y: "center",
          itemWidth: 14,
          itemHeight: 14,
          textStyle: {
            fontSize: 12
          },
          data: dataTitle
        },
        // 标题1的配置项
        title: [
          {
            text: "52",
            x: "21%",
            y: "25%",
            textStyle: {
              color: "#495ca1",
              fontWeight: 800,
              fontWeight: "normal",
              fontSize: 48
            }
            // 标题2的配置项
          },
          {
            text: "总数",
            x: "24%",
            y: "63%",
            textStyle: {
              color: "#a0a0a0",
              fontWeight: "normal",
              fontSize: 14,
              aline: "right"
            }
          }
        ],
        // 饼图的配置项
        series: [
          {
            center: ["30%", "50%"],
            name: "申请人数",
            type: "pie",
            radius: ["75%", "90%"],
            x: "left",
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontWeight: "bold"
                }
              }
            },
            color: ["#b18cf1", "#589afd", "#facf22", "#85c033"],
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 3,
                borderColor: "#ffffff"
              }
            },
            // 数据
            data: [
              { value: 16, name: dataTitle[0] },
              { value: 20, name: dataTitle[1] },
              { value: 14, name: dataTitle[2] },
              { value: 12, name: dataTitle[3] }
            ]
          }
        ]
      };
      return option;
    },

     // 图2
    echart2() {
       let option = {
        series: [
          {
            name: "360仪表盘",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              normal: {
                show: true,
                position: "center",
                formatter: "54.2%",
                color: "#f05253",
                fontWeight: "bold",
                fontSize: 12
              }
            },
            data: [
              { value: 44531, name: "实际", itemStyle: { color: "#f05253" } },
              { value: 37705, name: "目标", itemStyle: { color: "#fbd4d4" } }
            ]
          }
        ]
      };
      return option;
    },

     // 图3
    echart3() {
        let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        color: ["#ff736b", "#5581C7", "#9bb5d1"],
        legend: {
          data: ["目标销量", "实际销量", "去年销量"],
          right: 20
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [   // X轴配置
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisTick: {   // 是否显示X轴刻度
              show: false
            },
            axisLabel: {
              interval: 0
            }
          }
        ],
        yAxis: [   // Y轴配置
          {
            type: "value",
            name: "",
            axisLabel: { // 是否显示左边标尺
              show: false
            },
            axisTick: {    // 是否显示左边刻度
              show: false
            },
            splitLine: {   // 是否显示横线
              show: false
            }
          }
        ],
        series: [
          {
            name: "目标销量",
            type: "line",
            symbol: "circle",
            data: [4, 24, 12, 45, 21, 18, 32, 81, 3]
          },
          {
            name: "实际销量",
            type: "bar",
            data: [21, 22, 13, 45, 32, 71, 43,23, 3]
          },
          {
            name: "去年销量",
            type: "line",
            symbol: "circle", // 实心
            data: [12, 2, 1, 89, 91, 7, 23, 34, 3]
          }
        ]
      };
     
      return option;
    },

     // 图4
    echart4() {
      let option = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          orient: "vertical",
          right: "right",  // 标志图形位置
          y: "center",
          itemWidth: 13, // 标志图形的长度
          itemHeight: 8, // 标志图形的宽度
          width: 150,
          textStyle: {
            color: "#333333",
            fontSize: "0.1rem"
          },
          data: ["赛增", "安苏萌", "珍怡", "海之元", "尤得盼", "诺泽"]
        },
        grid: {  // 图形距离配置
          left: "0%",  
          right: "30%",
          bottom: "5%",
          containLabel: true
        },

        xAxis: {  // X轴配置
          type: "category",
          boundaryGap: false,
          data: ["1", "2", "3", "4"]
        },
        yAxis: {     // y轴配置
          type: "value",
          show: false,
          interval: 20
        },
        series: [  
          {
            name: "赛增",
            type: "line",   // 线型
            stack: "总量",
            color:"red",   // 颜色
            symbol: "circle",  // 实心
            data: [120, 132, 101, 134]
          },
          {
            name: "安苏萌",
            type: "line",
            stack: "总量",
            symbol: "circle",
            data: [220, 182, 191, 234]
          },
          {
            name: "珍怡",
            type: "line",
            stack: "总量",
            symbol: "circle",
            data: [150, 232, 201, 154]
          },
          {
            name: "海之元",
            type: "line",
            stack: "总量",
            symbol: "circle",
            data: [320, 332, 301, 334]
          },
          {
            name: "尤得盼",
            type: "line",
            stack: "总量",
            symbol: "circle",
            data: [820, 932, 901, 934]
          },
          {
            name: "诺泽",
            type: "line",
            stack: "总量",
            symbol: "circle",
            data: [820, 932, 901, 934]
          }
        ]
      };

      return option;
    },

     // 图5
    echart5() {
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        legend: {   // 图标配置
          x: "right",  // 图标位置
          data: ["销量", "实际", "增长%",'新增']  // 图标数据    若是需要新增一个柱状图,或者折线  在此添加数据,并且在下方新增数据即可.例如:"新增" 数据
        },
        xAxis: [   // X轴配置
          {
            type: "category",
            data: [     // 数据
              "201807",
              "201808",
              "201809",
              "201810",
              "201811",
              "201812",
              "201901"
            ],
            axisPointer: {
              type: "shadow"
            }
          }
        ], 
        yAxis: [  // Y轴配置  
          {     
            show: false,   // 不显示刻度
            color: "#8f8e90",  // 颜色
            type: "value",
            min: 0,    // Y轴最小值
            max: 250,  // Y轴最大值
            interval: 50,    // 间隔大小
            axisLabel: {     
              formatter: "{value}"
            }
          },
          {    // Y轴第二条配置
            show: false,
            type: "value",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value}"
            }
          }
        ],
        series: [
          {
            name: "销量",
            type: "bar",     // 柱状图 
            color: "#dfecf5",  // 颜色
            data: [23.0, 24.9, 5.0, 23.2, 25.6, 76.7, 135.6]
          },
          {
            name: "实际",
            type: "bar",    // 柱状图 
            color: "#2179a7",   // 颜色
            data: [21.6, 5.9, 92.0, 46.4, 28.7, 70.7, 175.6]
          },
          {    
            name: "增长%",
            type: "line",   // 折线图
            yAxisIndex: 1,
            symbol: "circle",  // 实心
            color: "#f4aa0f",
            data: [5.0, 2.2, 3.3, 2.5, 6.3, 10.2, 20.3]
          },
          {   // 第二条折线图 
            name: "新增",
            type: "line",   // 折线图
            yAxisIndex: 1,
            symbol: "circle", // 实心 
            color: "red", // 颜色
            data: [5.3, 2.1, 2.3, 4.5, 2.3, 9.2, 10.3]
          }
        ]
      };
      return option;
    },

     // 图6
    echart6() {
      let option = {
        tooltip: {},
        radar: {
          splitNumber: 3,
          center: ["50%", "50%"], 
          name: {
            textStyle: {
              color: "#415668",   // 文字颜色
              fontSize: 12   // 文字大小
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              // 连接坐标线的颜色
              color: ["#cce3fd", "#d7e8fc", "#d7e8fc", "#add1fc"]
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              // 阴影颜色 可多色
              color: "#eef5fa"
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              // 坐标线的颜色
              color: "#cce3fd"
            }
          },
          indicator: [
            { name: "临床研究", max: 6500 },
            { name: "项目执行", max: 16000 },
            { name: "市场策略", max: 30000 },
            { name: "指南共识", max: 38000 },
            { name: "指南推荐", max: 52000 },
            { name: "疾病知识", max: 25000 },
            { name: "产品知识", max: 25000 }
          ]
        },
        series: [
          {
            type: "radar",
            itemStyle: {
              normal: {
                // 阴影的颜色
                color: "#7dc2ff",
                lineStyle: {
                  // 阴影边线的颜色
                  color: "#40a0f6" // 图表中各个图区域的边框线颜色
                },
                areaStyle: {
                  type: "default",
                  // 阴影透明度
                  opacity: 0.6
                }
              }
            },
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000]
              }
            ]
          }
        ]
      };

      return option;
    },

     // 图7
    echart7() {
        let option ={
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    startAngle: 180,
                    endAngle: 0,
                    min: -100.0,
                    max: 200.0,
                    splitNumber: 3,
                    center: ['50%', '90%'],    // 默认全局居中
                    radius: 40,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            width: 20,		// 仪表盘轴线样式
                            color: [
                                [0.333, '#FE6B62'],
                                [0.666, '#96B1DC'],
                                [1, '#5581C7']
                            ]
                        },
                    },
                    axisTick: {
                        show: false,	
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        distance: -64,
                        formatter: '{value}%',
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontSize: 10,
                            fontWeight: 'bolder'
                        }
                    },
                    pointer: {
                        width: 3,
                        length: '80%',
                        color: 'red'
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: true,
                        width: 200,
                        height: 40,
                        offsetCenter: [0, 0],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontSize: 12,
                            color: "black"
                        }
                    },
                    itemStyle: {
                        color: "#fff"
                    },
                    data:[{value:40.1, name:'数值1'}]
                }
            ]
        };
      return option;
    },

     // 图8
    echart8() {
        let option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    radius : '60%',
                    center: ['50%', '50%'],
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:274, name:'联盟广告'},
                        {value:235, name:'视频广告'},
                        {value:400, name:'搜索引擎'}
                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: '#000'  // 字体颜色
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: '#ccc' // 线的颜色
                            },
                            smooth: 0.2,
                            length: 8,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',   // 图形主色调
                            shadowBlur: 200,
                            shadowColor: 'rgba(255, 255, 255, 0.5)'  // 阴影颜色
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        };
      return option;
    },
     // 图9
    echart9() {
        let option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '50%'],  // 内圈半径

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    
                    data:[
                        {value:335, name:'直达', selected:true},
                        {value:679, name:'营销广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                },
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['60%', '75%'],  // 外圈半径
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    data:[
                        {value:335, name:'直达'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1048, name:'百度'},
                        {value:251, name:'谷歌'},
                        {value:147, name:'必应'},
                        {value:102, name:'其他'}
                    ]
                }
            ]
        };
        return option;
    },
     // 图10
    echart10() {
        let option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis:  {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [320, 302, 301, 334, 390, 330, 320]
                },
                {
                    name: '邮件营销',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [150, 212, 201, 154, 190, 330, 410]
                },
                {
                    name: '搜索引擎',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [820, 832, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
        return option;
    },
     // 图11
    echart11() {
        let option = {
            grid: {
                left: '3%',
                right: '7%',
                bottom: '3%',
                containLabel: true
            },
            tooltip : {
                // trigger: 'axis',
                showDelay : 0,
                formatter : function (params) {
                    if (params.value.length > 1) {
                        return params.seriesName + ' :<br/>'
                        + params.value[0] + '% '
                        + params.value[1] + '% ';
                    }
                    else {
                        return params.seriesName + ' :<br/>'
                        + params.name + ' : '
                        + params.value + '% ';
                    }
                },
                axisPointer:{
                    show: true,
                    type : 'cross',
                    lineStyle: {
                        type : 'dashed',
                        width : 1
                    }
                }
            },
            legend: {
                data: ['Q1','Q2'],
                left: 'center'
            },
            xAxis : [
                {
                    type : 'value',
                    scale:true,
                    min:0,
                    max:100,
                    axisLabel : {
                        formatter: '{value} %'
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    min:0,
                    max:100,
                    scale:true,
                    axisLabel : {
                        formatter: '{value} %'
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series : [
                {
                    name:'Q1',
                    type:'scatter',
                    data: [[61.2, 51.6], [67.5, 59.0]
                    ],
                    markArea: {
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                                borderWidth: 0,   // 连接虚线 0:没有线 1:有线
                                borderType: 'dashed'
                            }
                        },
                        
                    },
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        },
                        data : [
                        
                            { xAxis: 50 ,yAxis: 50}
                        ]
                    }
                },
                {
                    name:'Q2',
                    type:'scatter',
                    data: [[4.0, 65.6], [29.3, 21.8],[40.3, 30.8]],
                    markArea: {
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                                borderWidth: 0,
                                borderType: 'dashed'
                            }
                        },
                        data: [[{
                            xAxis: 'min',
                            yAxis: 'min'
                        }, {
                            xAxis: 'max',
                            yAxis: 'max'
                        }]]
                    },
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},  // 标注最大值
                            {type : 'min', name: '最小值'}   // 标注最小值
                        ]
                    },
                    markLine : {
                        lineStyle: {
                            normal: {
                                type: 'dashed'  // 线型
                            }
                        },
                        data : [
                        
                            { xAxis: 50 }
                        ]
                    }
                }
            ]
        };
        return option;
    }
  }
};
</script>

<style lang="less">
h1 {
  font-size: 0.6rem;
}
.chartDiv {
    padding-top: 0.5rem;
  width: 100%;
  text-align: center;
  .canvasStyle {
    border: 1px solid #f2f2f2;
    height: 7rem;
    width: 90%;
    display: inline-block;
    
  }
  .canvasOne {
      margin-bottom: 0.5rem;
        &:nth-child(9),&:nth-child(10) {
            .canvasStyle {
                height: 9rem !important;
            }
        
        }
  }
  
}
</style>