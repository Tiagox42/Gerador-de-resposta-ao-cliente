function esconderVariavel() {
    if (document.getElementById("configInput").style.display == 'flex') {
        document.getElementById("configInput").style.display = 'none';
        document.getElementById("botoesGerador").style.display = 'none';
        document.getElementById("esconderBotao").value = 'Mostrar';
    } else {
        document.getElementById("configInput").style.display = 'flex'
        document.getElementById("botoesGerador").style.display = 'block'
        document.getElementById("esconderBotao").value = 'Esconder';
    }
}

let lorep = 'Contrary to \npopular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.';

var HTMLstring = '<p>Hello, world</p><p>Summernote can insert HTML string</p>';

function teste1() {
    $('#summernote').summernote('insertText', lorep);
}

function teste2() {
    $('#summernote').summernote('pasteHTML', semRetornoCliente);
}

let vSexo;
let vNome;
let vHorario;
let vIncFinalizacao;
let vIncFecharaSemRetorno;
let vTipoMensagem;
let vContexto;
let retornoFinal;

function gerarRetorno() {

    console.log(vSexo)
    console.log(vNome)
    console.log(vHorario)
    console.log(vIncFinalizacao)
    console.log(vIncFecharaSemRetorno)
    console.log(vTipoMensagem)
    console.log(vContexto)
}

function verificaCampos() {
    //Sexo
    iSexoM = document.getElementById('masculino').checked;
    iSexoF = document.getElementById('feminino').checked;
    if (iSexoM == true) {
        vSexo = 'masculino'
    } else if (iSexoF == true) {
        vSexo = 'feminino'
    };
    //Nome
    vNome = document.getElementById('nome').value;
    //Horario
    iHmanha = document.getElementById('manha').checked;
    iHtarde = document.getElementById('tarde').checked;
    iHnoite = document.getElementById('noite').checked;
    if (iHmanha == true) {
        vHorario = 'bom dia!'
    } else if (iHtarde == true) {
        vHorario = 'boa tarde!'
    } else if (iHnoite == true) {
        vHorario = 'boa noite!'
    }
    //Incluir Finalização
    vIncFinalizacao = document.getElementById('fsim').checked ? true:false;
    //Incluir Fechara sem retorno
    vIncFecharaSemRetorno = document.getElementById('avisoSim').checked ? true:false;
}