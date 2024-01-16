export default async (id) => {
  const { data, error } = await useFetch(`/api/car/${id}`);

  if (error.value) {
    throw createError({
      ...error.value,
      message: "Unable to get car",
    });
  }

  return { data };
};
