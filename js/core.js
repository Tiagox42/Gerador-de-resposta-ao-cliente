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

let vSexo;
let vNome;
let vHorario;
let vIncFinalizacao;
let vIncFecharaSemRetorno;
let vTipoMensagem;
let vContexto;

function limpaBloco() {
    $('#summernote').summernote('reset');
}

function gerarRetorno() {

    console.log(vSexo)
    console.log(vNome)
    console.log(vHorario)
    console.log(vIncFinalizacao)
    console.log(vIncFecharaSemRetorno)
    console.log(vTipoMensagem)
    console.log('tipo mens acima');
    console.log(vContexto)
}

function verificaCampos() {

    //Sexo
    iSexoF = document.getElementById('feminino').checked;
    if (iSexoF == true) {
        vSexo = 'a';
    } else {
        vSexo = 'o';
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
    vIncFinalizacao = document.getElementById('fsim').checked ? true : false;
    //Incluir Fechara sem retorno
    vIncFecharaSemRetorno = document.getElementById('avisoSim').checked ? true : false;
    //Tipo de mensagem
    vTipoMensagem = document.getElementById('tipoInput').value;
    //Marcar contexto
    vContexto = document.getElementById('cSim').checked ? true : false;
}

function processar() {
    verificaCampos();
    $('#summernote').summernote('pasteHTML', retornaMensagem(vSexo, vNome, vHorario, vIncFinalizacao, vIncFecharaSemRetorno, vTipoMensagem, vContexto));
}