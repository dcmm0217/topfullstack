<template>
  <div>
    <avue-crud
    v-if="option.column"
      :data="data.data"
      :option="option"
      @row-save="create"
      @row-del="remove"
      @row-update="update"
    ></avue-crud>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ResourceList extends Vue {
 @Prop(String) resource!:string

  data = {};

  option = {};
  // 请求数据模板
  async fetchOption() {
    const res = await this.$http.get(`${this.resource}/option`);
    this.option = res.data;
  }
  // 请求全部数据
  async fetch() {
    const res = await this.$http.get(`${this.resource}`);
    this.data = res.data;
  }

  // 创建数据
  async create(row: any, done: any, loading: any) {
    await this.$http.post(`${this.resource}`, row);
    this.$message.success("创建成功");
    this.fetch();
    done();
  }
  // 更新数据
  async update(row: any, index: any, done: any, loading: any) {
    const data = JSON.parse(JSON.stringify(row));
    delete data.$index;
    await this.$http.put(`${this.resource}/${row._id}`, data);
    this.$message.success("更新成功");
    this.fetch();
    done();
  }
  // 删除数据
  async remove(row: any) {
    try {
      await this.$confirm("是否确认删除");
    } catch (e) {
      return;
    }
    await this.$http.delete(`${this.resource}/${row._id}`);
    this.$message.success("删除成功");
    this.fetch();
  }
  created() {
    this.fetch();
    this.fetchOption();
  }
}
</script>

<style>
</style>