<template>
  <v-layout>
    <v-app-bar color="grey">
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>{{ currentCategory }} News</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item title="All"></v-list-item>
        <v-list-item title="Technology"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup>
const drawer = ref(false);
const currentCategory = ref("All");
</script>
