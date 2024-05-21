function mascaraEmail (input){
  let valor = input.value.replace(/[^\w.-@]/g, '');

  input.value = valor;
}