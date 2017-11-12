<template>
  <div style="margin:0 auto;">


    <el-table :data="userList" border style="width: auto">
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column label="推荐人" prop="referee_id">
        <template slot-scope="scope">
          <el-button type="text" size="small" v-text="scope.row.referee_id==0?'暂无':scope.row.referee_id"></el-button>
        </template>
      </el-table-column>
      <el-table-column prop="pid" label="上级">
        <template slot-scope="scope">
          <el-button type="text" size="small" v-text="scope.row.pid==0?'暂无':scope.row.pid"></el-button>
        </template>
      </el-table-column>
      <el-table-column prop="money" label="金钱">
      </el-table-column>
      <el-table-column prop="reward" label="奖励">
      </el-table-column>
      <el-table-column prop="count" label="下级碰对数量">
      </el-table-column>
      <el-table-column prop="create_time" label="创建时间" width="103">
      </el-table-column>
      <el-table-column fixed="right" label="下级列表" min-width="100">
        <template slot-scope="scope">
          <!--<router-link to="/insert">Go to </router-link>-->
          <!-- 命名的路由 -->
          <router-link :to="{ name: 'lowlist', params: { userId: scope.row.id }}">下级列表</router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  export default {
    name: 'myTable',
    data: function(){
      return{
        userList: []

      }
    },
    methods: {},
    created: function () {
      var that = this
      that.$http.get(that.$pre + '/Three/userList', {
        params: {}
      }).then(function (res) {
        that.userList = res.data.data;
      }, function (error) {
        console.log(error)
      }).catch(function (error) {
        console.log(error)
      });
    }
  }
</script>

<style>

</style>
