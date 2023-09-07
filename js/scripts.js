
function preencherEndereco() {
    const cep = document.getElementById('cep').value;

    // Fazer uma requisição HTTP para a API de consulta de CEPs
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())     
      .then(data => {

      // Preencher os campos com os dados retornados pela API
      document.getElementById('bairro').value = data.bairro;
      document.getElementById('endereco').value = data.logradouro;
      document.getElementById('cidade').value = data.localidade;
      document.getElementById('estado').value = data.uf;
      })
      .catch(error => {
      console.error('Ocorreu um erro ao consultar o CEP, insira um CEP válido:', error);
      document.getElementById('bairro').value = "Insira um CEP válido!";
      document.getElementById('endereco').value = "Insira um CEP válido!";
      document.getElementById('cidade').value = "Insira um CEP válido!";
      document.getElementById('estado').value = "INV";
      });

}

function blockletras(keypress)
{
  // campo senha - bloqueia letras                               
  if(keypress>=48 && keypress<=57)
  {
    return true;
  }
  else{
    return false;
  }
}

function blocknumero(keypress)
{
  // campo nome - bloqueia numero                               
  if(keypress>=48 && keypress<=57)
  {
    return false;
  }
  else{
    return true;
  }
}

function formatarCPF(cpf) {
  // Remove qualquer caractere que não seja número
  cpf = cpf.replace(/\D/g, '');

  // Aplica a máscara
  cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

  return cpf;
}


function formatCEP(event) {
  const cepInput = event.target;
  const cep = cepInput.value.replace(/\D/g, '');

  // Formata o CEP
  if (cep.length > 5) {
    cepInput.value = cep.replace(/(\d{5})(\d{1,3})/, '$1-$2');
  }
}

function formatarTelefone(event) {
  const telefoneInput = event.target;
  const telefone = telefoneInput.value.replace(/\D/g, '');

  // Formata o telefone
  if (telefone.length > 2) {
    telefoneInput.value = `(${telefone.slice(0, 2)}) ${telefone.slice(2, 7)}-${telefone.slice(7, 11)}`;
  }
}

function formatarTelefoneFixo(event) {
  const telefoneInput = event.target;
  const telefone = telefoneInput.value.replace(/\D/g, '');

  // Formata o telefone
  if (telefone.length > 2) {
    telefoneInput.value = `(${telefone.slice(0, 2)}) ${telefone.slice(2, 6)}-${telefone.slice(6, 11)}`;
  }
}


function formatarRG(rg) {
  // Remove todos os caracteres não numéricos do RG
  const rgNumerico = rg.replace(/\D/g, '');

  // Verifica se o RG possui 9 dígitos
  if (rgNumerico.length === 9) {
    // Formata o RG no padrão "XX.XXX.XXX-X"
    return rgNumerico.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
  }

  // Retorna o RG sem formatação caso não possua 9 dígitos
  return rg;
}


function formatarCPF(cpf) {
  // Remove todos os caracteres que não são números
  cpf = cpf.replace(/\D/g, '');

  // Adiciona os pontos e o traço de formatação
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  // Atualiza o valor do input com o CPF formatado
  document.getElementById('cpf').value = cpf;
}



function validarFormulario() {
 // Remove todos os caracteres não numéricos
 var cpf = document.getElementById('cpf').value.replace(/\.|\-/g, "");
 var rg = document.getElementById('rg').value.replace(/\.|\-/g, "");
 var nome = document.getElementById('nome').value;
 var celular = document.getElementById('celular').value;
 var telefone = document.getElementById('telefone').value;
 var numeroend = document.getElementById('numeroend').value;
 var cep = document.getElementById('cep').value;
 var endereco = document.getElementById('endereco').value;
 var bairro = document.getElementById('bairro').value;
 var cidade = document.getElementById('cidade').value;
 var estado = document.getElementById('estado').value;

var cad = 0;

if (nome !== ""){
    if(nome.length <10){
      console.log("Nome inválido! Insira seu nome completo.")
      alert("Nome inválido! Insira seu nome completo.")
    }else{
    console.log("Nome válido!")
    cad +=1;
  }}
else{
  console.log("Nome inválido! Preencha o campo nome.")
  alert("Nome inválido! Preencha o campo nome.")
}

if (celular !== ""){
  if(celular.length <15){
    console.log("Celular inválido! Insira seu celular completo.")
    alert("Celular inválido! Insira seu celular completo.")
  }else{
  console.log("Celular válido!")
  cad +=1;}
}else{
console.log("Celular inválido! Preencha o campo celular.")
alert("Celular inválido! Preencha o campo celular.")
}

if (telefone !== ""){
  if(telefone.length <14){
    console.log("Telefone inválido! Insira seu telefone completo.")
    alert("Telefone inválido! Insira seu telefone completo.")
  }else{
  console.log("Telefone válido!")
  cad +=1;}
}else{
console.log("Telefone inválido! Preencha o campo telefone.")
alert("Telefone inválido! Preencha o campo telefone.")
}



  // Verificando se o RG possui 9 dígitos
  if (rg.length !== 9) {
    console.log("RG inválido! O RG precisa possuir 9 dígitos!")
    alert("RG inválido! O RG precisa possuir 9 dígitos!");

  }else{
    console.log("RG válido!")
    cad +=1;
  }

  // Verificando se o CPG possui 11 dígitos
  if (cpf.length !== 11) {
    console.log("CPF inválido! O CPF precisa possuir 11 dígitos!")
    alert("CPF inválido! O CPF precisa possuir 11 dígitos!");

  }else{

  var Soma;
    var Resto;
    Soma = 0;

      for (i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
      if ((Resto == 10) || (Resto == 11)) {Resto = 0;}

      if (Resto != parseInt(cpf.substring(9, 10)) ) 
        {
          console.log("CPF inválido!");
          alert("CPF inválido!");
        }
      else{

      Soma = 0;
      for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if ((Resto == 10) || (Resto == 11)) { Resto = 0;}

      if (Resto != parseInt(cpf.substring(10, 11) ) ) 
      {console.log("CPF inválido!");
      alert("CPF inválido!");}
      else{
    
    console.log("CPF válido!")
    cad +=1;}
    }}

    if (cep !== ""){
      if(cep.length <9){
        console.log("CEP inválido! Insira seu CEP completo.")
        alert("CEP inválido! Insira seu CEP completo.")
      }else{
      console.log("CEP válido!")
      cad +=1;}
    }else{
    console.log("CEP inválido! Preencha o campo CEP.")
    alert("CEP inválido! Preencha o campo CEP.")
    }

    if (endereco !== "") {
      if (endereco == "Insira um CEP válido!" || endereco == "undefined") {
        console.log("Endereço inválido! Insira seu CEP corretamente.");
        alert("Endereço inválido! Insira seu CEP corretamente.");
      } else {
        console.log("Endereço válido!");
        cad += 1;
      }
    } else {
      console.log("Endereço inválido! Preencha o campo endereço informando seu CEP.");
      alert("Endereço inválido! Preencha o campo endereço informando seu CEP.");
    }
    
    if (numeroend !== "") {
      console.log("Número válido!");
      cad += 1;
    } else {
      console.log("Número inválido! Preencha o campo número");
      alert("Número inválido! Preencha o campo número");
    }
    
    if (bairro !== "") {
      if (bairro == "Insira um CEP válido!" || bairro == "undefined") {
        console.log("Bairro inválido! Insira seu CEP corretamente.");
        alert("Bairro inválido! Insira seu CEP corretamente.");
      } else {
        console.log("Bairro válido!");
        cad += 1;
      }
    } else {
      console.log("Bairro inválido! Preencha o campo bairro informando seu CEP.");
      alert("Bairro inválido! Preencha o campo bairro informando seu CEP.");
    }
    
    if (cidade !== "") {
      if (cidade == "Insira um CEP válido!" || cidade == "undefined") {
        console.log("Cidade inválido! Insira seu CEP corretamente.");
        alert("Cidade inválido! Insira seu CEP corretamente.");
      } else {
        console.log("Cidade válido!");
        cad += 1;
      }
    } else {
      console.log("Cidade inválido! Preencha o campo cidade informando seu CEP.");
      alert("Cidade inválido! Preencha o campo cidade informando seu CEP.");
    }
    
    if (estado !== "") {
      if (estado == "INV" || estado == "undefined") {
        console.log("Estado inválido! Insira seu CEP corretamente.");
        alert("Estado inválido! Insira seu CEP corretamente.");
      } else {
        console.log("Estado válido!");
        cad += 1;
      }
    } else {
      console.log("Estado inválido! Preencha o campo estado informando seu CEP.");
      alert("Estado inválido! Preencha o campo estado informando seu CEP.");
    }
    
    if (cad == 11) {
      alert("Cadastro realizado com sucesso!");
    }

}