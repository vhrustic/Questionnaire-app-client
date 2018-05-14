export const getNextPageId = (pages, activePageId) => {
  const index = pages.findIndex(p => p.id === parseInt(activePageId, 10));
  const nextPage = pages[index + 1] ? pages[index + 1].id : -1;
  return nextPage;
};

export const getPreviousPageId = (pages, activePageId) => {
    const index = pages.findIndex(p => p.id === parseInt(activePageId, 10));
    const nextPage = pages[index - 1] ? pages[index - 1].id : -1;
    return nextPage;
};