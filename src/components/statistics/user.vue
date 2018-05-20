<template>
  <div class="user-statistic">
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
import {mapState} from 'vuex'
export default {
  data() {
    return {
      ipData:[]
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
          })
        })
        .catch(function(res){ console.log(res) })
      }   
    }
  }
}
</script>

<style scoped>

</style>
