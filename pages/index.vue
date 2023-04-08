<template>
  <v-card class="noBorderRadius h-screen">
    <NavBar
      :categories="categories"
      :current-category="currentCategory"
      @category-selected="categorySelected"
    />
    <div v-if="pending">Loading...</div>
    <ArticleCard
      v-for="article in news.articles"
      v-else
      :key="article.id"
      :article="article"
    >
    </ArticleCard>
  </v-card>
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

.noBorderRadius {
  border-radius: 0;
}
</style>
