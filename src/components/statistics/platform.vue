<template>
  <div class="platform-container">
    <div class="top-chart">
      <div id="plantform-pie"></div>
    </div>
    <div class="bottom-chart">
      <div id="plantform-bar"></div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
		return {
			pieLegend:[],
			pieSeries:[],
			barXAxis:[],
			barSeries:[]
		}
	},
	computed: {
      ...mapState([
          'user'
      ])
  },
	mounted() {
		this.getPlantformData()
	},
	methods: {
		getPlantformData() {
			var that = this
			if(this.user == "暂未选择" || this.user == ""){
				this.pieLegend = []
				this.pieSeries = []
				this.barXAxis = []
				this.barSeries = []
			}
			else{
				//获取平台数据
				fetch('http://127.0.0.1:3000/users/getPlantform',{
				method: "POST",
				body: JSON.stringify({"user":that.user}),
				headers: {
								'Accept': 'application/json, text/plain, */*',
								'Content-Type': 'application/json'
						},
				})
				.then(function(res){
					res.json().then(function(data){
						//数据处理
						data.forEach(function(obj,index){
							if(obj.type == "browser"){
								that.barXAxis.push(obj.name)
								that.barSeries.push(obj.visit)
							}
							else if(obj.type == "os"){
								that.pieLegend.push(obj.name)
								that.pieSeries.push({
									value: obj.visit,
									name: obj.name
								})
							}
						})
						//结束数据处理
						//绘图
						that.drawBar()
						that.drawPie()
						
					})
				})
				.catch(function(res){ console.log(res) })
			}
		},
		drawPie() {
			let pieChart = this.$echarts.init(document.getElementById('plantform-pie'))
			let that = this
			pieChart.setOption({
					title : {
							text: '用户浏览器',
							subtext: '根据页面浏览次数记录',
							x:'center'
					},
					tooltip : {
							trigger: 'item',
							formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
							orient: 'vertical',
							left: 'left',
							data: that.pieLegend
					},
					series : [
						{
							name: '访问来源',
							type: 'pie',
							radius : '70%',
							center: ['50%', '60%'],
							data:that.pieSeries,
							itemStyle: {
									emphasis: {
											shadowBlur: 10,
											shadowOffsetX: 0,
											shadowColor: 'rgba(0, 0, 0, 0.5)'
									}
							}
						}
					]
				})
				window.addEventListener("resize", function () { 
					pieChart.resize(); 
				});
		},
		drawBar() {
			let barChart = this.$echarts.init(document.getElementById('plantform-bar'))
			let that = this
			let a = that.barXAxis
			let b = that.barSeries
			
			barChart.setOption({
				xAxis: {
					type: 'category',
					data: a
				},
				yAxis: {
					type: 'value'
				},
				series: [{
					data: b,
					type: 'bar'
				}]
			})
            // window.onresize = barChart.resize
			window.addEventListener("resize", function () { 
					barChart.resize(); 
			});
  	}
	}
}
</script>

<style>
	.platform-container {
		width: 100%;
	}
	.top-chart {
		width: 1000px;
		margin: auto auto;
	}
	#plantform-pie {
		width: 100%;
		height: 400px;
	}
	#plantform-bar {
		width: 100%;
		height: 400px;
	}
</style>


