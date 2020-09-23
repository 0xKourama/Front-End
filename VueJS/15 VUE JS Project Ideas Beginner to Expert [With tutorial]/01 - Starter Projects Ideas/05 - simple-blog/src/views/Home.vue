<template>
  <div>
    <app-header>
      <h1>Blog</h1>
    </app-header>
    <div class="container" v-if="blogs">
      <app-card v-for="blog in blogs" :key="blog.id" :data="blog"></app-card>
    </div>
    <div class="text-center">
      <button
        type="button"
        class="load-more-button"
        @click="loadMore"
        v-if="blogs && blogs.length < totalCount"
      >
        Load more
      </button>
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/app-header";
import AppCard from "../components/blog-card";
import axios from "axios";
export default {
    data() {
    return {
      blogs: null,
      page: 1,
      totalCount: null
    };
  },
  components: {
    AppHeader,
    AppCard,
  },
  mounted() {
    this.getBlogs(this.page);
  },
  methods: {
    getBlogs(page) {
      axios.get(`http://localhost:3000/blog?_page=${page}&_limit=6`).then((res) => {
        this.blogs = this.blogs ? this.blogs.concat(res.data) : res.data;
        this.totalCount = res.headers['x-total-count'];
      });
    },
    loadMore() {
      this.page++;
      this.getBlogs(this.page)
    }
  },
};
</script>

<style scpoed>
.load-more-button {
  color: #fff;
  background-color: #990099;
  border-radius: 5px;
  border: none;
  padding: 10px 25px;
  font-size: 18px;
  line-height: 1;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
