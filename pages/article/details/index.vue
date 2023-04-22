<template>
  <v-card class="remove-padding border-none">
    <v-container class="w-100 h-screen remove-padding">
      <v-row class="h-50">
        <v-img :src="articleThumbnail" class="w-100" aspect-ratio="16/9" cover>
        </v-img>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card-text class="text-h6 font-weight-bold">
            {{ state.title }}
          </v-card-text>
          <v-card-text>
            {{ state.description }}
          </v-card-text>
          <v-card-text>
            {{ state?.content }}
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
const state = useState("article");

const articleThumbnail = computed(() => {
  return state.value.urlToImage
    ? state.value.urlToImage
    : "https://img.freepik.com/free-photo/top-view-old-french-newspaper-pieces_23-2149318857.jpg?w=2000&t=st=1681428463~exp=1681429063~hmac=4079efc95881044810b96f8a70a191fbfa2d648d4295f75461fd67e71d804b8f";
});
</script>

<style lang="scss" scoped>
.remove-padding {
  padding: 0;
}

.border-none {
  border-radius: 0;
}
</style>
