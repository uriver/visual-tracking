<template>
  <div class="newuser-container">
    <!-- 图表 -->
		<div class="top-part">
			<div class="newuser-data">

			</div>
			<div class="bar-container">
				<div id="myChart"></div>
			</div>
		</div>
		<!-- 表格 -->

  </div>
</template>

<script>
export default {
  data() {
		return {

		}
	},
	mounted() {
		this.drawBar()
	},
	methods: {
		drawBar() {
			let myChart = this.$echarts.init(document.getElementById('myChart'))
			myChart.setOption({
				xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: {
						type: 'value'
				},
				series: [{
						data: [120, 200, 150, 80, 70, 110, 130],
						type: 'bar'
				}]
			})
			window.onresize = myChart.resize
		}
		
	}
}
</script>

<style scoped>
	.newuser-container {
		width: 100%;
	}
	.top-part {
		width: 100%;
		height: 400px;
		display:flex;/*设为伸缩容器*/  
  	flex-flow:row;/*伸缩项目单行排列*/  
		border: 1px solid gray;
	}
	.newuser-data {
		width: 400px;
		height: 100%;
		border-right: 1px solid gray;
	}
	.bar-container {
		flex:1;
	}
	#myChart {
		width: 100%; 
		height: 350px;
		margin-bottom: 20px;
		border-bottom: 1px solid #C0C4CC;
	}
</style>

