export function getClient() {
  const repos = jest.fn().mockImplementation(async () => {
    return {
      data: repos,
    };
  });

  return {
    search: {
      repos,
    },
  };
}
