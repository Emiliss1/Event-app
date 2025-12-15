export function pagination(posts, curPage) {
  const itemsPerPage = 6;
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const pageItems = [];

  for (let i = curPage * itemsPerPage; i <= (curPage + 1) * itemsPerPage; i++) {
    if (posts[i]) {
      pageItems.push(posts?.[i]);
    }
  }

  return { pageItems, totalPages };
}
