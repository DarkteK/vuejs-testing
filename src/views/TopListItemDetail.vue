<template>
  <v-card class="pa-2" outlined tile height="100%">
    <v-card dark>
      <v-card-text class="white--text text-center">
        <div class="headline mb-2">
          {{ this.item.author }}
        </div>
      </v-card-text>
      <img
        height="194"
        style="vertical-align: middle"
        :src="item.thumbnail"
      />
      <v-card-text class="white--text">
        <div class="mb-2">
          {{ this.item.title }}
        </div>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "TopListItem",
  data() {
    return {
      item: ""
    };
  },
  mounted() {
    this.$store.watch(
      state => state.topListItem,
      () => {
        this.item = this.$store.state.topListItem;
      }
    );
  }
};
</script>

<style lang="scss" scoped>
.v-card {
  img {
    display: block;
    margin: auto;
  }
}
</style>
