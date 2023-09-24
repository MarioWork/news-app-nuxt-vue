<template>
  <v-app class="h-screen">
    <NavBar
      :categories="categories"
      :current-category="currentCategory"
      @on-category-selected="onCategorySelected"
    />
    <v-main v-if="pending">Loading...</v-main>
    <v-main v-else :scrollable="true" class="h-100">
      <v-btn @click="nextPage">Load more</v-btn>
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
    </v-main>
  </v-app>
</template>

<script setup>
const {
  categories,
  currentCategory,
  articles,
  pending,
  nextPage,
  onCategorySelected,
} = await useNews();
</script>

<style scope>
.text-white {
  color: white;
}
</style>
