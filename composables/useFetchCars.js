export default async (city, params, watchArray) => {
  const { data, error } = await useFetch(`/api/${city}`, {
    query: {
      ...params,
    },
    watch: watchArray,
  });

  if (error.value) {
    throw createError({
      ...error.value,
      message: "Unable to get cars",
    });
  }

  return data;
};
