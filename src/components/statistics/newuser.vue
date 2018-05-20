<template>
  <div class="newuser-container">
    <!-- 图表 -->
		<div class="top-part">
			<div class="newuser-data">
				<p>记录日期：</p>
				<p>七日内新用户人数：</p>
				<p>七日内新用户UV：</p>
				<p>七日内新用户PV：</p>
			</div>
			<div class="bar-container">
				<div id="myChart"></div>
			</div>
		</div>
		<!-- 表格 -->
		<el-table
		:data="ipData"
		border
		style="width: 100%">
			<el-table-column
				prop="ip"
				label="IP地址"
				width="180">
			</el-table-column>
			<el-table-column
				prop="firstDate"
				label="首次浏览日期"
				width="180">
			</el-table-column>
			<el-table-column
				prop="lastDate"
				label="上次浏览日期">
			</el-table-column>
			<el-table-column
				prop="time"
				label="上次浏览时间">
			</el-table-column>
			<el-table-column
				prop="userVisit"
				label="浏览天数">
			</el-table-column>
			<el-table-column
				prop="pageVisit"
				label="浏览次数">
			</el-table-column>
		</el-table>

  </div>
</template>

<script>
export default {
  data() {
		return {
			ipData:[{
			ip: "120.0.0.1",
			firstDate: "2018-5-7",
			lastDate: "2018-5-9",
			time: "15:37",
			userVisit: "3",
			pageVisit: "21"
		}]
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

