<template>
  <el-container class="contain">
      <el-header class="header"> </el-header>
      <el-aside>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="mapBox"></div>
        <div class="tableBox">
          <el-table :data="tableData" height="250" border style="width: 100%">
            <el-table-column prop="date" label="Base" width="180"> </el-table-column>
            <el-table-column prop="name" label="StratumID" width="180"> </el-table-column>
            <el-table-column prop="address" label="Top"> </el-table-column>
          </el-table>
        </div>
      </el-main>
  </el-container>
</template>

<script>
    export default {
      data() {
        return {
          isCollapse: true,
          tableData: []
          }
        },
      created: function(){
          this.getTableData()
      },
      methods: {
        getTableData: function(){
          $.ajax({
            type: "get",
            url: "http://192.168.10.23:8088/api/geology/borehole?project=iS3Demo&id=1",
            async: true,
            dataType: 'json',
            success: function (data) {
              console.log(data);
              // var datas = data.data;
              // projectA = new Borehole(datas);
              // projectA.top();
              // projectA.geo();
              // var list = datas.geologies;
              // chirdren = new BoreholeGeo(list);
              // chirdren.id();
            },
            error: function (e) {
              console.log(e);
            }
          })
        },
        handleOpen(key,keyPath){
          console.log(key,keyPath);
        },
        handleClose(key,keyPath){
          console.log(key,keyPath);
        }
      }

    }
</script>

<style scoped>
.contain{
  width: 100%;
  height: 100%;
  min-width: 1024px;
  min-height: 800px;
  border: 1px solid #eee;
}
.header{
  width: 100%;
  min-height: 40px;
  background: #65A7EB;
}
  .mapBox{
    width: 100%;
    height: 600px;
  }
  .tableBox{
    width: 100%;
    height: 200px;
  }
</style>
