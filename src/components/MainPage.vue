<template>
  <el-container class="contain">
      <el-header class="header"> </el-header>
      <el-aside class="menuList">
        <el-radio-group v-model="isCollapse" style="margin-left: -144px;margin-top: 30px;">
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
      <el-main class="box">
        <div class="mapBox" id="allMap"></div>
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
  import {MP} from '../map.js'
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
      mounted () {
        this.$nextTick(function() {
          var _this = this;
          MP(_this.ak).then(BMap => {
            //在此调用api
            var map = new BMap.Map("allMap");                         // 创建Map实例
            map.centerAndZoom("上海",15);                               // 初始化地图,用城市名设置地图中心点
            map.enableScrollWheelZoom(true);
            function showInfo(e){
              console.log(e.point.lng + ", " + e.point.lat);
            }
            map.addEventListener("click", showInfo);
            //地图标注和窗口信息
            var data_info = [
              [121.477594, 31.239078,"地址：人民广场"],
              [121.466095, 31.233644,"地址：南京西路"],
              [121.465305, 31.246673,"地址：汉中路"],
              [121.508855, 31.243586,"地址：陆家嘴"]
            ];
            var opts = {
              width : 250,     // 信息窗口宽度
              height: 80,     // 信息窗口高度
              title : "信息窗口" , // 信息窗口标题
              enableMessage:true//设置允许信息窗发送短息
            };
            for(var i=0;i<data_info.length;i++){
              var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注
              var content = data_info[i][2];
              map.addOverlay(marker);               // 将标注添加到地图中
              addClickHandler(content,marker);
            }
            function addClickHandler(content,marker){
              marker.addEventListener("click",function(e){
                openInfo(content,e)}
              );
            }
            function openInfo(content,e){
              var p = e.target;
              var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
              var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
              map.openInfoWindow(infoWindow,point); //开启信息窗口
            }
          })
        })
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
  position: relative;
}
.box{
}
.menuList{
  position: absolute;
  left: 0;
  top: 40px;
  z-index: 999;
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
