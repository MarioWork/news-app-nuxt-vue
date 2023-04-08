<template>
  <v-app class="noBorderRadius h-screen">
    <NavBar
      :categories="categories"
      :current-category="currentCategory"
      @category-selected="categorySelected"
    />
    <div v-if="pending">Loading...</div>
    <v-main v-else style="height: 100%; overflow-y: scroll">
      <v-row>
        <v-col v-for="article in news.articles" :key="article.id" cols="6">
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

.noBorderRadius {
  border-radius: 0;
}
</style>
