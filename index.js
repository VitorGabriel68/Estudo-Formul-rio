function mostrarOla(){
    console.log("teste mostrar")
    var nome = document.getElementById("nome").value;
    document.getElementById("resposta").textContent = "Olá " + nome;
    console.log(nome)
}
