<template>
  <div class="newuser-container">
    <!-- 图表 -->
		<div class="top-part">
			<div class="newuser-data">
				<p>记录日期：{{date.one}}——{{date.seven}}</p>
				<p>七日内新用户人数：{{peopleMessage.number}}</p>
				<p>七日内新用户UV：{{peopleMessage.UV}}</p>
				<p>七日内新用户PV：{{peopleMessage.PV}}</p>
			</div>
			<div class="bar-container">
				<div id="myChart"></div>
			</div>
		</div>
		<!-- 表格 -->
		<el-table
		:data="tableData"
		border
		style="width: 100%;margin-top:10px;">
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
import {mapState} from 'vuex'
export default {
  data() {
		return {
			date:{
				one: null,
				two: null,
				three: null,
				four: null,
				five: null,
				six: null,
				seven: null
      },
			peopleMessage: {
				number: 0,
				UV: 0,
				PV: 0
			},
			tableData: [],
			peopleData: []
		}
  },
  computed: {
      ...mapState([
          'user'
      ])
  },
	mounted() {
    this.getDate()
    this.getNewUser()
	},
	methods: {
    GetDateStr(AddDayCount) { 
      var dd = new Date(); 
      dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期 
      var y = dd.getFullYear(); 
      var m = dd.getMonth()+1;//获取当前月份的日期 
      var d = dd.getDate(); 
      return y+"-"+m+"-"+d; 
    }, 
    getDate() {
      this.date["seven"] = this.GetDateStr(0)
      this.date["six"] = this.GetDateStr(-1)
      this.date["five"] = this.GetDateStr(-2)
      this.date["four"] = this.GetDateStr(-3)
      this.date["three"] = this.GetDateStr(-4)
      this.date["two"] = this.GetDateStr(-5)
      this.date["one"] = this.GetDateStr(-6)
    },
    getNewUser(){
      var that = this
      if(this.user == "暂未选择" || this.user == ""){
        this.ipData = []
      }
      else{
        //获取IP数据
        fetch('http://127.0.0.1:3000/users/getNewUser',{
        method: "POST",
        body: JSON.stringify({"user":that.user}),
        headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        })
        .then(function(res){
          res.json().then(function(data){
            that.initialData = data;
						that.dataSplit(data)
          })
        })
        .catch(function(res){ console.log(res) })
      }   
    },
		dataSplit(data) {
			var peopleData = []
			var that = this
			data.forEach(function(arr){
				peopleData.push(arr.length)
				arr.forEach(function(obj){
					that.peopleMessage.UV += obj.userVisit
					that.peopleMessage.PV += obj.pageVisit
					that.tableData.push(obj)
				})
			})
			this.peopleData = peopleData.reverse()
			this.peopleMessage.number = this.tableData.length
			this.drawBar()
		},
		drawBar() {
			var that = this
			let myChart = this.$echarts.init(document.getElementById('myChart'))
			myChart.setOption({
				xAxis: {
						type: 'category',
						data: [this.date.one, this.date.two, this.date.three, this.date.four, this.date.five, this.date.six, this.date.seven]
				},
				yAxis: {
						type: 'value'
				},
				series: [{
						data: that.peopleData,
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
		height: 350px;
		display:flex;/*设为伸缩容器*/  
  		flex-flow:row;/*伸缩项目单行排列*/  
		border: 1px solid #C0C4CC;
	}
	.newuser-data {
		box-sizing: border-box;
		width: 320px;
		height: 100%;
		padding-left: 40px;
		padding-top: 40px; 
		/* border-right: 1px solid gray; */
	}
	.newuser-data p{
		margin-bottom: 10px;
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

