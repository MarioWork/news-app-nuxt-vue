<template>
  <v-app class="h-screen">
    <NavBar
      :categories="categories"
      :current-category="currentCategory"
      @category-selected="categorySelected"
    />
    <v-main v-if="pending">Loading...</v-main>
    <v-main v-else scrollable="true" class="h-100">
      <v-row class="pa-6">
        <v-col
          v-for="article in news.articles"
          :key="article.id"
          cols="12"
          lg="6"
          xl="4"
        >
          <ArticleCard :article="article"> </ArticleCard>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script setup>
const { categories, currentCategory, news, pending } = useNews();

const categorySelected = (selected) => {
  currentCategory.value = selected;
};
</script>

<style scope>
.text-white {
  color: white;
}
</style>
