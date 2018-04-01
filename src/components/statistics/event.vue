<template>
  <div class="event-container">

    <div class="event-header">
      <span class="event-font">事件：</span>
        <!-- 选择框 -->
        <el-select v-model="value" placeholder="请选择" size="mini" class="select-set">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
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
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="250">
        </el-table-column>
        <el-table-column
          prop="address"
          label="点击次数">
        </el-table-column>
      </el-table>  
    </div> 
    <!-- 分页 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
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
          options: [{
            value: '选项1',
            label: '购买'
          }, {
            value: '选项2',
            label: '查看文档'
          }, {
            value: '选项3',
            label: '联系客服'
          }],
          value: '选项1',

          tableData: [{
            date: '2016-05-02',
            name: '购买',
            address: '30'
          }, {
            date: '2016-05-04',
            name: '查看文档',
            address: '50'
          }, {
            date: '2016-05-01',
            name: '联系客服',
            address: '80'
          }]
          
        }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: 'echarts' },
            tooltip: {},
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
          }]
        });
        window.onresize = myChart.resize;
    }
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
