<template>
  <div id="hello">
    <!--<tree :data="data3" :load-data="loadData" show-checkbox></tree>-->

    <span style="font-size: large">上级： <el-button type="text" style="font-size: large" v-text="own"></el-button></span>

    <el-tree :data="data" node-key="id" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>
<script>

  export default {
    name: 'HelloWorld',
    data: function () {
      return {
        defaultProps: {
          label: 'name'
        },
        data: [],
        own: ''
      }
    },
    methods: {
      handleNodeClick: function (data) {
        console.log(data);
      }

    },
    created: function () {
      var that = this;
      let userId = that.$route.params.userId;
      that.$http.get(that.$pre + '/Three/backCategory', {
        params: {
          userId: userId
        }
      }).then(function (res) {
        let data = res.data.data;
        console.log(data);
        that.data = data.list;
        that.own = data.own;
      });
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("//unpkg.com/iview/dist/styles/iview.css");
  @import url("//unpkg.com/element-ui@2.0.4/lib/theme-chalk/index.css");

  #hello {
    padding: 32px;
  }
</style>
