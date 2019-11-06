<template>
  <el-container>
    <el-aside width="200px">
      菜单
    </el-aside>
    <el-container>
      <el-header>
        绯色天空-后台管理界面
      </el-header>
      <el-main>
       
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Main extends Vue {
  menu = {
    items: [
      {
        title: "内容管理",
        items: [
          { title: "首页", path: "/" },
          { title: "课程管理", path: "/courses/list" },
          { title: "课时管理", path: "/courses/list" }
        ]
      },
      {
        title: "运营管理",
        items: [{ title: "用户管理", path: "/users/list" }]
      }
    ]
  };
}
</script>

<style>
</style>