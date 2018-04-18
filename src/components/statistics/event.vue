<template>
  <div class="event-container">

    <div class="event-header">
      <span class="event-font">事件：</span>
        <!-- 选择框 -->
        <el-select v-model="selectValue" placeholder="请选择" size="mini" class="select-set">
          <el-option
            v-for="item in options"
            :key="item.eventName"
            :label="item.eventName"
            :value="item.eventName">
          </el-option>
        </el-select>
    </div>

    <!-- 图表 -->
    <div id="myChart"></div>

    <!-- 表格 -->
    <div class="event-table">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="eventName"
          label="事件"
          width="180">
        </el-table-column>
        <el-table-column
          prop="data.one"
          :label= "date.one">
        </el-table-column>
        <el-table-column
          prop="data.two"
          :label= "date.two">
        </el-table-column>
        <el-table-column
          prop="data.three"
          :label= "date.three">
        </el-table-column>
        <el-table-column
          prop="data.four"
          :label= "date.four">
        </el-table-column>
        <el-table-column
          prop="data.five"
          :label= "date.five">
        </el-table-column>
        <el-table-column
          prop="data.six"
          :label= "date.six">
        </el-table-column>
        <el-table-column
          prop="data.seven"
          :label= "date.seven">
        </el-table-column>
      </el-table>  
    </div> 
    <!-- 分页 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="3">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
        return {
          user: "shallow",
          options: [],
          selectValue: '请选择事件',
          currentPage: 1,
          date:{
            one: null,
            two: null,
            three: null,
            four: null,
            five: null,
            six: null,
            seven: null
          },
          chartData: [],
          testData: [820, 932, 901, 934, 1290, 1330, 1320],
          tableData: []

        }
  },
  mounted(){
    this.getDate()
    this.getEvent()
    this.drawLine()
  },
  watch: {
    selectValue: function(){
      this.drawLine(this.selectValue)
    }
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
    //获取所有事件名
    getEvent(){
      var that = this
      var opts = {
        method: "POST",
        body: JSON.stringify({"user":this.user}),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
      }
      fetch('http://127.0.0.1:3000/event/getEvent',opts)
        .then(function(res){ 
            res.json().then(function(data){
            that.options = data
            for(let i=0;i<data.length;i++){
              // that.tableData[i] = {}
              that.tableData.push({})
              that.$set(that.tableData[i],'eventName',data[i].eventName)
              // that.tableData[i].eventName = data[i].eventName
            }
            that.getTable()
          }); 
         })
        .catch(function(err){ console.log(err) })
    },
    //获取echarts数据
    // getChart(event){
    //   var that = this
    //   var opts = {
    //     method: "POST",
    //     body: JSON.stringify({"user":this.user,"eventName":event}),
    //     headers: {
    //         'Accept': 'application/json, text/plain, */*',
    //         'Content-Type': 'application/json'
    //     },
    //   }
    //   fetch('http://127.0.0.1:3000/event/getEventData',opts)
    //     .then(function(res){ 
    //         res.json().then(function(data){
    //         that.chartData = data
    //       }); 
    //      })
    //     .catch(function(err){ console.log(err) })
    // },

    //获取表格数据*************************************************************
    getTable(){
      var that = this
      for(let item in this.tableData){
        var opts = {
        method: "POST",
        body: JSON.stringify({"user":this.user,"eventName":that.tableData[item].eventName}),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
      }
      fetch('http://127.0.0.1:3000/event/getEventData',opts)
        .then(function(res){ 
            res.json().then(function(data){
              //that.tableData[item].data = data
              that.$set(that.tableData[item],'data',data)
          }); 
         })
        .catch(function(err){ console.log(err) })
      }
    },

    //******************************************************** */



    drawLine(item){
        var mydata = []
        for(var index in this.tableData){
          if(item == this.tableData[index].eventName){
            mydata = this.tableData[index].data
          }
        }
        var echartData = []
        echartData.push(mydata.one)
        echartData.push(mydata.two)
        echartData.push(mydata.three)
        echartData.push(mydata.four)
        echartData.push(mydata.five)
        echartData.push(mydata.six)
        echartData.push(mydata.seven)
        console.log(echartData)
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: 'echarts' },
            tooltip: {},
            xAxis: {
              type: 'category',
              data: [this.date.one, this.date.two, this.date.three, this.date.four, this.date.five, this.date.six, this.date.seven]
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: echartData,
              type: 'line'
          }]
        });
        window.onresize = myChart.resize;
    },
    handleSizeChange(){},
    handleCurrentChange(){}
  }
}
</script>

<style scoped>
.event-container {
  width: 100%;
}
.event-header {
  width: 100%; 
  height: 40px;
  background-color: #C0C4CC;
  border-radius: 8px; 
}
.event-font{
  font-size: 14px;
  line-height: 40px; 
  margin-left: 18px;
}
.select-set{
  height: 40px;
}
#myChart {
  width: 100%; 
  height: 500px;
  margin-bottom: 20px;
  border-bottom: 1px solid #C0C4CC;
}
.block {
  float: right;
}
</style>
