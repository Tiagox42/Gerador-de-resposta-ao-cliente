function retornaMensagem(vSexo, vNome, vHorario, vIncFinalizacao, vIncFecharaSemRetorno, vTipoMensagem, vContexto) {

    //Mensagens padrao

    let mFinalizacao = "<p>Qualquer dúvida estou a disposição.</p><p>Atenciosamente,</p>"

    let mFecharaSemRetorno = "<p>Ficou alguma dúvida ou tem alguma observação sobre o chamado? Não deixe de me retornar por gentileza, caso contrário considerarei que está tudo bem e estarei encerrando o mesmo.<br></p>";

    let mContexto = '[ADICIONAR O CONTEXTO AQUI]'

    //Verifica se precisa de finalizacao, aviso de fechamento ou contexto.
    if (vIncFinalizacao == false) {
        mFinalizacao = '';
    }
    if (vIncFecharaSemRetorno == false) {
        mFecharaSemRetorno = '';
    }
    if (vContexto == false) {
        mContexto = '';
    }

    const mSemRetornoCliente = `<span>${vNome}, ${vHorario}</span><p><br></p><p>Espero que esta mensagem ${vSexo} encontre bem.<br>${mContexto}</p><p><br></p><p>Gostaria de informá-l${vSexo} que estou encerrando o chamado, uma vez que não recebi resposta sua. No entanto, caso ainda precise de ajuda, por favor, sinta-se à vontade para entrar em contato comigo para continuarmos o atendimento.</p><p><br></p><p>Por favor, esteja ciente de que a ocorrência ficará passível de reabertura por 7 dias a partir do encerramento. Se você precisar de ajuda posteriormente, por favor, crie uma nova ocorrência.</p><p><br></p><p>Se tiver alguma dúvida ou precisar de mais informações, não hesite em entrar em contato comigo. Ficarei feliz em ajudá-l${vSexo}.</p><p></p><p>${mFecharaSemRetorno}</p><p><br></p><p>${mFinalizacao}</p>`;

    const mConfirmarRetornoValido = "";

    //Seleciona Mensagem
    console.log(vTipoMensagem)
    switch (vTipoMensagem) {
        case "Primeiro retorno":
            break;

        case "Cobrar retorno cliente [genérico]":
            break;

        case "Cobrar retorno valido":
            break;

        case "Cobrar mais info":
            break;

        case "Fechar sem retorno":
            return mSemRetornoCliente;
            break;

        case "Fechar oc simples":
            break;

        default:
            
            break;
    }

};
