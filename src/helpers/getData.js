function getJSONTools() {
  
    return fetch("https://pluga.co/ferramentas_search.json")
      .then((response) => {
        response.json().then((tools) => tools) 
      })
      .catch((error) => undefined);
}

export {
  getJSONTools
}