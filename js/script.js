var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var sobre = document.getElementById("sobre");
var saiba = document.getElementById("saiba");
var subir = document.getElementById("subir");
var subir2 = document.getElementById("subir2");
var mensagem = document.getElementById("mensagem");
var materiais = "";

var principal = "não cadastrado"; /*através dessa variável que o meu sistema irá saber que o usuário está cadastrado ou não*/ 
var local = 0; /*essa variável irá armazenar a localização do meu usuário dentro de um vetor*/

var usuarios = new Array(); //aqui ficará armazenado as informações de cada usuário cadastrado 


function btao() {  // função do botão do usuario
  if (principal == "não cadastrado") {
    modal.style.display = "block";
    tudo.style.position = "fixed";
  }
  if (principal == "cadastrado") {
    modal3.style.display = "block";
    tudo.style.position = "fixed";
  } 
}

function spann() { //função do botão de fechar modal
  modal.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
  tudo.style.position = "static";
}

function sobreAgente() { //função do botão 'sobre a gente'
  sobre.style.display = "block";
  saiba.style.display = "none";
}

function mudar() { //função do botão para ir para os materiais
  if (principal == "não cadastrado") {
    btao();
    materiais = "yes";
  }
  if (principal == "cadastrado") {
    botaoMudar('tela1','tela2');
  }
}

function cadastro(n,e,s) { //função do botão cadastrar
  if(n != "" && e != "" && s != ""){
    var ok ="";
    var i;
    for(i = 0; i < e.length; i++){
      if(e[i] == "@" && i+1 < e.length){
        let usuario = {nome:n, email:e, senha:s};
        usuarios[usuarios.length] = usuario;
        modal.style.display = "none";
        modal2.style.display = "block"; 
        ok = "ok"
      }
    }  
    if(ok != "ok"){
      alert("Por favor, utilizar endereço de e-mail válido!");
    }  
  } 
  else{
    alert("Preencha todos os campos!");
  } 
}

function entrar2(e,s) { //função do botão para entrar
  var iden = "sei";
  if(e != "" && s != ""){
    var ok ="";
    var i, u;
    for(i = 0; i < e.length; i++){
      if(e[i] == "@" && i+1 < e.length){
        ok = "ok";
        for (u = 0; u < usuarios.length; u++) {

          if (e == usuarios[u].email) {
            iden = "ok";
      
            if(s == usuarios[u].senha){
              if (materiais == "yes") {
                botaoMudar('tela1','tela2');
              }
              aq_nome.innerHTML = usuarios[u].nome;
              aq_email.innerHTML = usuarios[u].email;
              modal2.style.display = "none";
              tudo.style.position = "static";
              principal = "cadastrado"
              local = u;
              u = e.length;
            }
            else{
              alert("Sua senha está incorreta");
            }
          }
        }
        if (iden == "sei") {
          alert("Seu e-mail está incorreto");
        }
      }
    }  
    if(ok != "ok"){
      alert("Por favor, utilizar endereço de e-mail válido!")
    }  
  } 
  else{
    alert("Preencha todos os campos!")
  } 
}

function n_cadast(){//função do botão caso o usuario não for cadastrado
  modal2.style.display = "none";
  modal.style.display = "block";
}

function entrar() {//função do botão caso o usuario possua cadastro
  modal.style.display = "none";
  modal2.style.display = "block";
}

function edicao() {//função do botão para ir para a parte de edição de dados
  modal3.style.display = "none";
  modal4.style.display = "block";

  nome3.value = usuarios[local].nome;
  email3.value = usuarios[local].email;
  senha3.value = usuarios[local].senha;
}

function editar(n, e, s){//função do botão para editar dados
  if(n != "" && e != "" && s != ""){
    var ok ="";
    var i;
    for(i = 0; i < e.length; i++){
      if(e[i] == "@" && i+1 < e.length){
        ok = "ok";
        usuarios[local].nome = n;
        usuarios[local].email = e;
        usuarios[local].senha = s;
        aq_nome.innerHTML = usuarios[local].nome;
        aq_email.innerHTML = usuarios[local].email;

        modal4.style.display = "none";
        modal3.style.display = "block";
      }
    }  
    if(ok != "ok"){
      alert("Por favor, utilizar endereço de e-mail válido!")
    }  
  } 
  else{
    alert("Preencha todos os campos!")
  } 
}

function cancelar(){//função do botão para cancelar a edição de dados
  modal4.style.display = "none";
  modal3.style.display = "block";
}

function sair() {//função do botão de logout
  modal3.style.display = "none";
  modal.style.display = "block";

  principal = "não cadastrado";
  materiais = "";

  nome.value = "";
  email.value = "";
  senha.value = "";
  email2.value = "";
  senha2.value = "";
}

function botaoMudar(a,b){//função do botão para mudar de bloco na parte de competições
  document.getElementById(a).className = "invisivel";
  document.getElementById(b).className = "visivel";
}

function btn_enviarComentario(t){//função do botão para enviar comentário
  if(t != ""){
    aqui_comentarios.innerHTML += "<div class='mens_user'><h6 class='user'>"+usuarios[local].nome+"</h6><p class='comen'>"+t+"</p></div>";
    texto.value = "";
    aqui_comentarios.scrollTop = aqui_comentarios.scrollHeight;
  }
  else{
    alert('Digite um comentário antes de enviar!')
  }
}

window.onscroll = function () {/*com essa função, os botões como voltar para o topo e ir para a parte de comentários só aparecem quando sua presença é nescessária, e desaparecendo quando não possuem mais utilidade*/
  var tmnh = document.getElementById("comentario").scrollHeight + document.getElementById("footer").scrollHeight + (document.getElementById("comentario").scrollHeight/2);
  
  if (document.body.scrollTop > document.body.scrollHeight - tmnh || document.documentElement.scrollTop >document.documentElement.scrollHeight - tmnh) {
    mensagem.style.display = "none";
  }
  else{
    mensagem.style.display = "block";
  }
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    subir.style.display = "block";
    subir2.style.display = "block";
  }
  else{
    subir.style.display = "none";
    subir2.style.display = "none";
  }
}


