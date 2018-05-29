<template>
  <div class="home-container">
    <div class="home-welcome">
      <div class="title">可视化埋点，带你走进数据的精彩世界</div>
      <div class="sec-title">不是程序员也能随心所欲操作数据</div>
      <button class="start-sta" @click="$router.push('/statistics/overview')" >开始统计</button>
    </div>

    <div class="chart-container">
      <div class="chart-intro">
			  <h1>丰富的图表数据显示</h1>
			  <p>使用可视化埋点，个性化编辑您需要的信息，更准确的把握网站数据</p>
		  </div>

      <div id="showChart"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.drawChart()
  },
  methods: {
    drawChart: function(){
       let myChart = this.$echarts.init(document.getElementById('showChart'))
       myChart.setOption({
        tooltip : {
            trigger: 'axis'
        },
        xAxis : [
            {
                type : 'category',
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'直方1',
                type:'bar',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'直方2',
                type:'bar',
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                markPoint : {
                    data : [
                        {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                        {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            },
            {
            name: '曲线1',                            // 系列名称
            type: 'line',                           // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
            data: [3.7, 8.6,5.3, 15.4, 20.8, 60.9,160.7, 200.6, 90.5, 50.3, 25.1, 10.2]
            },
            {
            name: '曲线2',                            // 系列名称
            type: 'line',                           // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
            data: [4.5, 15.4,30.7, 24.5, 34.8, 55.4,190.3, 140.2, 160.4, 70.5, 15.4, 3.2]
            }
        ]
      })
      window.onresize = myChart.resize
    }

  }
}
</script>

<style>
img {
  display: block; 
}
.home-container {
  width: 100%;

}
.home-welcome {
  height: 650px;
  overflow: hidden;
  background-image: url(../../assets/homepage.jpg);
}
.title {
  width: 100%;
  text-align: center; 
  margin-top: 220px;
  font-size: 36px;
  color: white;
}
.sec-title {
  width: 100%; 
  text-align: center; 
  margin-top: 20px;
  font-size: 22px; 
  color: white;
}
.start-sta {
  display: block; 
  cursor: pointer;
  width: 160px; 
  height: 50px; 
  margin: 40px auto; 
  border-radius: 8px; 
  font-size: 20px; 
  border: none; 
  color: white;
  background-color: rgba(45, 110, 252, 0.5); 
}
.chart-container {
  width: 100%;
  height: 650px; 
}
.chart-intro {
  height: 100px;
	width: 100%;
	padding-top:50px;
	font-size:15px;
	text-align: center;
}
.chart-intro h1 {
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 5px;
}
#showChart {
  width: 100%;
  height: 500px;
}
</style>
