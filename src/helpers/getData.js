const CARDS_PER_PAGE = 12;

async function getJSONTools() {
  const response = await fetch("https://pluga.co/ferramentas_search.json");
  const tools = await response.json();

  let pagination = [];
  let i = 0;

  while (i < tools.length) {
    pagination.push(tools.slice(i, i + CARDS_PER_PAGE));
  i += 12;
  }

  return pagination;

//  return tools;
}

export {
  getJSONTools
}