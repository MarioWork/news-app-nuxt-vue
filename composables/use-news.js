const categories = [
  { id: 1, title: "General", value: "general" },
  { id: 2, title: "Technology", value: "technology" },
  { id: 3, title: "Business", value: "business" },
  { id: 3, title: "Entertainment", value: "entertainment" },
  { id: 3, title: "Science", value: "science" },
  { id: 3, title: "Health", value: "health" },
  { id: 4, title: "Sports", value: "sports" },
];

export async function useNews() {
  const config = useRuntimeConfig();

  const currentCategory = ref(categories[1]);

  const {
    data: news,
    pending,
    refresh,
  } = await useLazyFetch(() => `/top-headlines`, {
    baseURL: config.baseURL,
    query: {
      apiKey: config.newsApiKey,
      category: currentCategory.value.value,
    },
  });

  watch(currentCategory, async () => {
    await refresh();
  });

  return {
    currentCategory,
    categories,
    pending,
    news,
  };
}
