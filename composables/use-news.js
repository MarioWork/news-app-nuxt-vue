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
  const currentCategoryValue = ref(currentCategory.value.value);

  const { data, pending } = await useFetch(() => "/top-headlines", {
    baseURL: config.public["baseURL"],
    query: {
      apiKey: config.public["newsApiKey"],
      category: currentCategoryValue,
      language: "en",
      page: page,
      pageSize: 1,
    },
    transform: (data) => data.articles,
  });

  newsArticles.value = data.value;

  const onCategorySelected = (selected) => {
    currentCategory.value = selected;
    currentCategoryValue.value = selected.value;
    newsArticles.value = [];
  };

  const nextPage = () => page.value++;

  watch(data, (newValue) => {
    newsArticles.value = [...newsArticles.value, ...newValue];
  });

  return {
    currentCategory,
    categories,
    pending,
    newsArticles,
    nextPage,
    onCategorySelected,
  };
}
