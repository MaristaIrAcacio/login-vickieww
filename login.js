//Código de validação do formulário de login



function Verificar(){
 let email = document.getElementById('loginEmail').value;
let senha = document.getElementById('senha').value;
 if(!email || !senha){
 alert("Campo de preenchimento obrigatório. Favor preencher");
}
else {

    alert("Campos preenchidos com sucesso");
}

}




