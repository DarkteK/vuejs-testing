<template>
  <div class="modal">
    <v-card class="pa-2 scrollable-header text-center" tile fixed dark>
      Reddit Posts
    </v-card>
    <div class="scrollable-content" v-if="listData">
      <v-card
        :loading="loading"
        class="pa-1"
        tile
        dark
        elevation
        color="#202022"
        v-for="(items, index) in listData"
        v-bind:key="index"
      >
        <span class="section__author unread">
          Author
        </span>
        <span class="section__created_date">
          Date
        </span>

        <v-list-item three-line>
          <v-list-item-avatar size="100px">
            <!--<img :src="image" />-->
          </v-list-item-avatar>
          <span
            class="section__title unread"
          >Title</span
          >
        </v-list-item>

        <v-row style="margin: 0">
          <v-col cols="6" md="6" class="section__actions">
            <v-card-actions>
              <v-btn icon color="orange">
                <v-icon>mdi-close-box-multiple-outline</v-icon>
              </v-btn>
              Dismiss Post
            </v-card-actions>
          </v-col>
          <v-col cols="6" md="6" class="section__num_comments">
            Number of comments
          </v-col>
        </v-row>
      </v-card>
    </div>
    <div v-else class="scrollable-content no-results">
      <v-progress-circular
        v-if="loading"
        indeterminate
        :size="150"
        :width="8"
        color="orange"
      >
      </v-progress-circular>
    </div>
    <v-card
      class="pa-2 scrollable-footer text-center"
      outlined
      tile
      dark
    >
      Dismiss All
    </v-card>
  </div>
</template>

<script>
import TopListService from "@/services/TopListService";

export default {
  name: "TopList",
  data() {
    return {
      loading: true,
      listData: ""
    };
  },
  methods: {
    async getTopList() {
      await TopListService.getTopList().then(response => {
        if (response.data.data !== null) {
          this.listData = response.data.data.children;
          this.loading = false;
        }
      });
    }
  },
  mounted() {
    this.getTopList();
  }
};
</script>

<style lang="scss" scoped>
.modal {
  height: 100%;
  display: grid;

  .scrollable-content {
    overflow-y: auto;
    height: auto !important;
    max-height: calc(100vh - 84px) !important;
    box-sizing: border-box;
    &.no-results {
      min-height: calc(100vh - 84px) !important;
      overflow-y: hidden;
      background-color: #202022;
      color: white;
      text-align: center;
      padding: 50% 0;
    }
  }
  .scrollable-footer {
    bottom: 0;
    color: #ff9800;
  }

  .v-card {
    border: 1px solid grey !important;

    &__title {
      font-size: 1rem;
      line-height: 1.1rem;
    }
    .v-avatar {
      border-radius: 0;
    }
    .section__author {
      margin-right: 10px;
      &.unread {
        color: white;
      }
    }
    .section__created_date {
      color: gray;
    }
    .section__actions {
      padding: 0;
    }
    .section__title {
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }
    }
    .section__num_comments {
      padding: 6px;
      color: #ff9800;
    }
    .v-card__actions {
      padding: 0;
    }
  }
}
</style>
