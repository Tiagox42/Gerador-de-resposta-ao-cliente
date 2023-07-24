function retornaMensagem(vSexo, vNome, vHorario, vIncFinalizacao, vIncFecharaSemRetorno, vTipoMensagem, vContexto) {

    //Mensagens padrao

    let mFinalizacao = "<p>Qualquer dúvida estou à disposição.</p><p>Atenciosamente,</p>"

    let mFecharaSemRetorno = "<p>Ficou alguma dúvida ou tem alguma observação sobre o chamado? Não deixe de me retornar por gentileza, caso contrário considerarei que está tudo bem e estarei encerrando o mesmo.<br></p>";

    let mContexto = '<p><br></p><p>[ADICIONAR O CONTEXTO AQUI]<br></p>'

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

    const mSemRetornoCliente = `<span>${vNome}, ${vHorario}</span><p><br></p><p>Espero que essa mensagem ${vSexo} encontre bem.<br>${mContexto}</p><p><br></p><p>Gostaria de informá-l${vSexo} que estou encerrando o chamado, uma vez que não recebi resposta sua. No entanto, caso ainda precise de ajuda, por favor, sinta-se à vontade para entrar em contato comigo para continuarmos o atendimento.</p><p><br></p><p>Por favor, esteja ciente de que a ocorrência ficará passível de reabertura por 7 dias a partir do encerramento. Se você precisar de ajuda posteriormente, por favor, crie uma nova ocorrência.</p><p><br></p><p>Se tiver alguma dúvida ou precisar de mais informações, não hesite em entrar em contato comigo. Ficarei feliz em ajudá-l${vSexo}.</p><p></p><p>${mFecharaSemRetorno}</p><p><br></p><p>${mFinalizacao}</p>`;

    const mConfirmarRetornoValido = `<span>${vNome}, ${vHorario}</span><br><p></p><p>${mContexto}</p><p></p><p>Espero que esteja bem. Gostaria de confirmar se o último retorno enviado foi satisfatório para você. Caso tenha alguma pendência ou dúvida, por favor, não hesite em nos contatar novamente.</p><p><br></p><p>No entanto, caso não haja nenhuma resposta, consideraremos que a solicitação foi atendida e encerraremos o caso por hora. Mas, por favor, saiba que estamos disponíveis para ajudá-l${vSexo} caso precise de mais assistência. Basta responder a esta mensagem e continuaremos a prestar o suporte necessário.</p><p><br></p><p>Agradeço pela sua compreensão e espero ter atendido às suas expectativas.</p><p><br></p><p>${mFinalizacao}</p>`;

    const mOcSimples = `<span>${vNome}, ${vHorario}</span><p><br></p><p>Espero que essa mensagem ${vSexo} encontre bem.<br>${mContexto}</p><p><br></p><p>Considerando que se tratou de uma ocorrência simples e que já validamos a correção, estarei encerrando o chamado após o envio deste e-mail. Caso você ainda tenha alguma dúvida ou pendência pendente, por favor, sinta-se à vontade para entrar em contato comigo.</p><p><br></p><p>É importante lembrar que, após o encerramento da ocorrência, ela ficará passível de reabertura por até 7 dias. Se precisar reportar um novo problema posteriormente, uma nova ocorrência deve ser criada.</p><p><br></p><p>Agradeço pela sua compreensão e espero ter atendido às suas expectativas.</p><p><br></p><p>${mFinalizacao}</p>`;

    const mMaisInfo = `<span>${vNome}, ${vHorario}</span><p><br></p><p>Espero que essa mensagem ${vSexo} encontre bem.<br></p><p><br></p><p>Estou responsável por atender a sua ocorrência, identificada pelo número [NUMERO OC], referente à [ASSUNTO].</p><p><br></p><p>Gostaria de solicitar mais informações sobre o [ITEM] para que eu possa entender melhor o problema e ajudar a encontrar uma solução. Por favor, forneça todas as informações que julgar relevantes.</p><p></p><p>${mContexto}</p><p><br></p><p>Aguardo seu retorno e fico à disposição para qualquer esclarecimento adicional.</p><p><br></p><p>${mFinalizacao}</p>`;

    const primeiroEmail = `<span>${vNome}, ${vHorario}</span><p><br></p><p>Espero que essa mensagem ${vSexo} encontre bem.</p><p><br></p><p>Estou responsável por atender a sua ocorrência, identificada pelo número [NUMERO OC], referente à [ASSUNTO].</p><p>${mContexto}</p><p><br></p><p>${mFinalizacao}</p>`;

    const cobrarRetorno = `<span>${vNome}, ${vHorario}</span><p><br></p><p>Espero que essa mensagem ${vSexo} encontre bem.</p><p><br></p><p>Gostaria de confirmar se você teve a oportunidade de ler meu último e-mail. Caso ainda não tenha tido a chance, por gentileza, peço que o verifique para que possamos prosseguir com o atendimento.<br></p><p><br></p><p>Se tiver alguma dúvida, por favor, não hesite em entrar em contato. Estou à disposição para ajudá-l${vSexo} no que for necessário.</p><p><br></p><p></p><p>${mFecharaSemRetorno}</p><p><br></p><p>${mFinalizacao}</p>`;

    //Seleciona Mensagem
    console.log(vTipoMensagem)
    switch (vTipoMensagem) {
        case "Primeiro e-mail":
            return primeiroEmail;
            break;

        case "Cobrar retorno cliente [genérico]":
            return cobrarRetorno;
            break;

        case "Cobrar retorno valido":
            return mConfirmarRetornoValido;
            break;

        case "Cobrar mais info":
            return mMaisInfo;
            break;

        case "Fechar sem retorno":
            return mSemRetornoCliente;
            break;

        case "Fechar oc simples":
            return mOcSimples;
            break;
    }

};
