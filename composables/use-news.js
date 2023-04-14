const categories = [
  { id: 1, title: "General", value: "general" },
  { id: 2, title: "Technology", value: "technology" },
  { id: 3, title: "Business", value: "business" },
  { id: 3, title: "Entertainment", value: "entertainment" },
  { id: 3, title: "Science", value: "science" },
  { id: 3, title: "Health", value: "health" },
  { id: 4, title: "Sports", value: "sports" },
];

export function useNews() {
  const config = useRuntimeConfig();

  const page = ref(1);
  const currentCategory = ref(categories[0]);

  const { data: news, pending } = useLazyFetch(
    () =>
      `/top-headlines?apiKey=${config.newsApiKey}&category=${currentCategory.value.value}&language=en&page=${page.value}&pageSize=1`,
    {
      baseURL: config.baseURL,
    }
  );

  const nextPage = () => page.value++;

  return {
    currentCategory,
    categories,
    pending,
    news,
    nextPage,
  };
}
