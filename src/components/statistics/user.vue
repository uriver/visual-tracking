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
  }
}
</script>

<style scoped>

</style>
