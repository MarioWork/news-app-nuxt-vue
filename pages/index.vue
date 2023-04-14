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
          v-for="article in articles"
          :key="article.id"
          cols="12"
          lg="6"
          xl="4"
        >
          <ArticleCard :article="article"> </ArticleCard>
        </v-col>
      </v-row>
      <v-btn @click="nextPage">Press me</v-btn>
    </v-main>
  </v-app>
</template>

<script setup>
const { categories, currentCategory, news, pending, nextPage } = useNews();
const articles = ref();

const categorySelected = (selected) => {
  currentCategory.value = selected;
  articles.value = undefined;
};

watch(news, (newValue) => {
  articles.value = articles.value
    ? [...articles.value, ...newValue.articles]
    : newValue.articles;
});
</script>

<style scope>
.text-white {
  color: white;
}
</style>
