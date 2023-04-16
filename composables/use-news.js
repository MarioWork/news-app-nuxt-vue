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

  const page = ref(1);
  const newsArticles = ref();
  const currentCategory = ref(categories[0]);
  const dataPending = ref(false);

  const getNews = async () => {
    const { data, pending } = await useLazyFetch(
      () =>
        `/top-headlines?apiKey=${config.public["newsApiKey"]}&category=${currentCategory.value.value}&language=en&page=${page.value}&pageSize=1`,
      {
        baseURL: config.public["baseURL"],
        transform: (data) => data.articles,
      }
    );
    dataPending.value = pending.value;
    newsArticles.value = newsArticles.value
      ? [...newsArticles.value, ...data.value]
      : data.value;
  };

  const onCategorySelected = (selected) => {
    currentCategory.value = selected;
    newsArticles.value = [];
  };

  const nextPage = () => page.value++;

  await getNews();

  watch([page, currentCategory], async () => await getNews());

  return {
    currentCategory,
    categories,
    pending: dataPending,
    newsArticles,
    nextPage,
    onCategorySelected,
  };
}
