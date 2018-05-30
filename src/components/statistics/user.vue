<template>
  <div class="user-statistic">
    <el-table
      :data="ipDataSlice"
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
    <!-- 分页 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[20]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="ipData.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      ipData:[],
      ipDataSlice: [],
      currentPage: 1
    }
  },
  computed: {
      ...mapState([
          'user'
      ])
  },
  mounted() {
    this.getIP()
  },
  methods: {
    getIP(){
      var that = this
      if(this.user == "暂未选择" || this.user == ""){
        this.ipData = []
        this.ipDataSlice = ipData
      }
      else{
        //获取IP数据
        fetch('http://127.0.0.1:3000/users/getIP',{
        method: "POST",
        body: JSON.stringify({"user":that.user}),
        headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        })
        .then(function(res){
          res.json().then(function(data){
            that.ipData = data
            that.ipDataSlice = that.ipData.slice(0,20)
          })
        })
        .catch(function(res){ console.log(res) })
      }   
    },
    handleSizeChange(){},
    handleCurrentChange(page){
      this.ipDataSlice = this.ipData.slice(page*20 - 10,page*20 )
    }
  }
}
</script>

<style scoped>
  .block {
    float: right;
  }
</style>
