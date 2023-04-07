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

