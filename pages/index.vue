<template>
  <v-grid class="container" fluid>
    <NavBar
      :categories="categories"
      :current-category="currentCategory"
      @category-selected="categorySelected"
    />
    <div v-if="pending">Loading...</div>
    <div v-else id="test">
      <ArticleCard
        v-for="article in news.articles"
        :key="article.id"
        :article="article"
      >
      </ArticleCard>
    </div>
  </v-grid>
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

.container {
  margin: 0;
  padding: 0;
}

#test {
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
