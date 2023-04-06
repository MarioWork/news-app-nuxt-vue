export function useNews() {
  const categories = [
    { id: 1, title: "General", value: "general" },
    { id: 2, title: "Technology", value: "technology" },
    { id: 3, title: "Business", value: "business" },
    { id: 3, title: "Entertainment", value: "entertainment" },
    { id: 3, title: "Science", value: "science" },
    { id: 3, title: "Health", value: "health" },
    { id: 4, title: "Sports", value: "sports" },
  ];

  const currentCategory = ref(categories[0]);

  return {
    currentCategory,
    categories,
  };
}
