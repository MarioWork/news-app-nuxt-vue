<template>
  <v-container class="container" fluid>
    <v-card class="card">
      <v-card-title class="text-center justify-center py-6 text-white">
        <h1 class="font-weight-bold">{{ currentCategory.title }} News</h1>
      </v-card-title>

      <v-tabs
        v-model="currentCategory"
        bg-color="transparent"
        color="white"
        grow
        fixed-tabs
      >
        <v-tab
          v-for="category in categories"
          :key="category.id"
          :value="category"
          class="font-weight-bold text-white"
        >
          {{ category.title }}
        </v-tab>
      </v-tabs>
    </v-card>
    <div v-if="pending">Loading...</div>
    <div v-else id="test">
      <ArticleCard
        v-for="article in news.articles"
        :key="article.id"
        :article="article"
      >
      </ArticleCard>
    </div>
  </v-container>
</template>

<script setup>
const { categories, currentCategory, news, pending } = useNews();
</script>

<style scope>
.text-white {
  color: white;
}

.container {
  margin: 0;
  padding: 0;
}

.card {
  background-color: #219ebc;
  border-radius: 0;
}

#test {
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
