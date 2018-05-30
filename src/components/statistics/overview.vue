<template>
  <div>
    <div>当前监测站点：{{user}}</div>
    <div class="create-track">
      请输入埋点页面名称：
      <el-input
        placeholder="输入名称"
        v-model="trackName"
        style="width:40%"
        >
      </el-input>
      <el-button type="primary" style="margin-left:20px" @click="checkUser">确 认</el-button>
      <el-button type="success" @click="dialogVisible = true">创 建</el-button>
    </div>
    <!-- 对话框 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
        请输入埋点的页面名称：
        <el-input
          v-model="regist.webName">
        </el-input>
        请输入操作者名称：
        <el-input
          v-model="regist.operator">
        </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="createWeb">确 定</el-button>
      </span>
    </el-dialog>

    <div class="web-table">
      <!-- 站点名称/创建日期/操作者/编辑 -->
      <el-table
        :data="webData"
        border
        style="width: 100%">
        <el-table-column
          prop="userName"
          label="站点名称">
        </el-table-column>
        <el-table-column
          prop="operator"
          label="操作者">    
        </el-table-column>
        <el-table-column
          prop="time"
          label="操作日期">
        </el-table-column>
        <el-table-column
          label="编辑">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleUse(scope.$index, scope.row)">监测</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>


  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      trackName:'',
      dialogVisible: false,
      regist: {
        webName: "",
        operator: ""
      },
      webData: []
    }
  },
  computed: {
      ...mapState([
          'user'
      ])
  },
  mounted() {
    this.getUser()
  },
  methods: {
    //获取_user中所有的数据填入表格
    getUser() {
      var that = this
      fetch('http://127.0.0.1:3000/users/getUser',{method:'GET'})
        .then(function(res){
          res.json().then(function(data){
            that.webData = data
          })
        })
        .catch(function(err){ console.log(err) })
    },
    //监测站点是否存在
    checkUser() {
      var that = this
      var opts = {
        method: "POST",
        body: JSON.stringify({"user":this.trackName}),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
      }
      fetch('http://127.0.0.1:3000/users/checkUser',opts)
        .then(function(res){ 
          res.json().then(function(data){
            if(data.status == "0"){
            that.$message.error('不存在该站点')
            }
            else if(data.status == "1"){
              that.$store.commit('changeUser',that.trackName)
              that.$message({
                message: '切换成功',
                type: 'success'
              });
            }
          }); 
         })
        .catch(function(err){ console.log(err) })
    },
    onSubmit() {
      console.log('submit!');
    },
    createWeb() {
      this.dialogVisible = false
      if(this.regist.webName == "" || this.regist.operator == ""){
        this.$message({
          message: '请输入完整信息',
          type: 'warning'
        });
      }
      else {

      var that = this
      var opts = {
        method: "POST",
        body: JSON.stringify({"webName":this.regist.webName,"operator":this.regist
        .operator}),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
      }
      fetch('http://127.0.0.1:3000/users/createUser',opts)
        .then(function(res){ 
          res.json().then(function(data){
            if(data.status == "0"){
              that.$message.error('操作失败')
            }
            else if(data.status == "1"){
              // that.$store.commit('changeUser',that.trackName)
              // console.log(that.trackName)
              // console.log(that.user)
              that.$message({ 
                message: '新建成功',
                type: 'success'
              });
              that.getUser()
            }
            else if(data.status == "2"){
              that.$message.error('已存在该站点')
            }
          }); 
         })
        .catch(function(err){ console.log(err) })

      }     
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleUse(a,b) {
      this.$store.commit('changeUser',b.userName)
      this.$message({
        message: '监测成功',
        type: 'success'
      });
    },
    handleDelete(a,b) {
      var user = this.webData[a].userName
      var that = this
      this.$confirm('确认删除？')
        .then(_ => {
          fetch('http://127.0.0.1:3000/users/deleteUser',{
            method: "POST",
            body: JSON.stringify({"user":user}),
            headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
            })
            .then(function(res){
              that.getUser()
            })
            .catch(function(res){ console.log(res) })



          done();
        })
        .catch(_ => {});
    }
  }
}
</script>

<style scoped>
  .create-track{
    display:flex;
    display: -webkit-flex; 
    align-items:center;
    margin-top: 20px;
    widows: 100%;
    height: 200px;
    border-radius: 6px;
    border: 1px solid #d3dce6;
    justify-content:center;
  }
  .web-table {
    margin-top: 20px;
  }
</style>


