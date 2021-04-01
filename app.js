function NewURL() {
    //Aquí estan los diferentes arreglos con los valores para las URL
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dot = [".com", ".es", ".net", ".us", ".io"];

//   Con el siguiente ciclo aninado se pueden imprimir las diferentes URL que se pueden tener
  for (let pronounIndx = 0; pronounIndx < pronoun.length; pronounIndx++) {
    for (let adjIndx = 0; adjIndx < adj.length; adjIndx++) {
      for (let nounIndx = 0; nounIndx < noun.length; nounIndx++) {
        for (let dotIndx = 0; dotIndx < dot.length; dotIndx++) {
            console.log(
               pronoun[pronounIndx] + adj[adjIndx] + noun[nounIndx] + dot[dotIndx]
            );
        }
      }
    }
  }
}

console.log(NewURL());