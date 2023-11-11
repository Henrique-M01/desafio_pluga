async function getJSONTools() {
  const response = await fetch("https://pluga.co/ferramentas_search.json");
  const tools = await response.json();

  console.log(tools);
  return tools;
}

export {
  getJSONTools
}