<template>
  <v-app>
    <Layout :resize="false" :edit="false" :splits="tree">
      <!-- 0 - view -->
      <div class="view0">
        <TopList />
      </div>
      <!-- 1 - view -->
      <div class="view1">
        <TopListItemDetail />
      </div>
    </Layout>
  </v-app>
</template>

<script>
import { Layout } from "vue-split-layout";
import TopList from "./views/TopList";
import TopListItemDetail from "./views/TopListItemDetail";

export default {
  components: {
    TopList,
    TopListItemDetail,
  },
  data() {
    return {
      tree: {
        dir: "horizontal",
        first: 0, // this number represents the pane slot ID
        second: 1,
        split: "30%"
      }
    };
  }
};
</script>
<style lang="scss">
.layout-container > .views {
  margin: 0;
  position: relative;
}
.split .splitter {
  display: none;
}
</style>
