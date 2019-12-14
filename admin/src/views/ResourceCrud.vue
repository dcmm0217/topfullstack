<template>
  <div>
    <avue-crud
      v-if="option.column"
      :page="page"
      :data="data.data"
      :option="option"
      @row-save="create"
      @row-del="remove"
      @row-update="update"
      @on-load="changePage"
      @sort-change="changeSort"
      @search-change="search"
    ></avue-crud>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ResourceList extends Vue {
  @Prop(String) resource!: string;

  data = {};
  page = {
    pageSize: 2,
    pageSizes: [2, 5, 10],
    total: 0
  };
  option: any = {};
  query: any = {
    limit: 2,
    page: 1
  };
  // 请求数据模板
  async fetchOption() {
    const res = await this.$http.get(`${this.resource}/option`);
    this.option = res.data;
  }
  // 请求全部数据
  async fetch() {
    const res = await this.$http.get(`${this.resource}`, {
      params: {
        query: this.query
      }
    });
    this.page.total = res.data.total;
    this.data = res.data;
  }
  // 分页
  async changePage({ pageSize, currentPage }: any) {
    this.query.page = currentPage;
    this.query.limit = pageSize;
    this.fetch();
  }
  // 排序
  async changeSort({ prop, order }: any) {
    if (!order) {
      this.query.sort = null;
    } else {
      this.query.sort = {
        [prop]: order === "ascending" ? 1 : -1
      };
    }
    this.fetch();
  }
  // 搜索
  async search(where: any) {
    for (let k in where) {
      const field = this.option.column.find((v: any) => v.prop === k);
      where[k] = { $regex: where[k] };
    }

    this.query.where = where;
    this.fetch();
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