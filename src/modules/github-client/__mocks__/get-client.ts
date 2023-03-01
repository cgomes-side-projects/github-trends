export function getClient() {
  (getClient as any).reposMock = jest.fn().mockImplementation(async () => {
    return {
      data: {
        items: [{}],
      },
    };
  });

  return {
    search: {
      repos: (getClient as any).reposMock,
    },
  };
}
