function criptografarTxt(){
        var procura = /[A-Z&&áàâãä-úùũûü&&Çç]/;
        var procuraLetra = texto.value.search(procura); 
        
        if(procuraLetra != -1){
                alert ("Válido somente letras minúsculas e sem acentos.Tente novamente!");
            } else {
                textoCriptografado = texto.value;
                textoCriptografado = textoCriptografado.replaceAll("e", "enter").replaceAll("i", "imes")
                .replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");

                document.getElementById("resultado").value = textoCriptografado;
                texto.value = "";
            } 
        
}
            
function decriptografarTxt() {
        var procura = /[A-Z&&áàâãä-úùũûü&&Çç]/;
        var procuraLetra = texto.value.search(procura); 
        
        if(procuraLetra != -1) {
                    alert ("Válido somente letras minúsculas e sem acentos.Tente novamente!");
            } else {
        
                textoDecriptografado = texto.value;
                textoDecriptografado = textoDecriptografado.replaceAll("enter", "e").replaceAll("imes", "i")
                .replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");

                document.getElementById("resultado").value = textoDecriptografado;
                texto.value = "";
            } 
                    
} 
        
function copiar() {
        
        const textInput = document.getElementById("resultado");
        const copyButton = document.getElementById("copy");

        copyButton.addEventListener("click", ()=> {
            textInput.select();
            textInput.setSelectionRange(0, 99999);
            document.execCommand("copy");
            alert("Copiado!");
            resultado.value = "";
        })
}
        
        var textoCriptografado;
        var textoDecriptografado;
        var texto = document.querySelector("textarea");
        var botaoCopiar = document.getElementById("copy");
            
        var botaoCriptografa = document.getElementById("cripto");
        var botaoDecriptografa = document.getElementById("descripto");
            
        botaoCriptografa.onclick = criptografarTxt;
        botaoDecriptografa.onclick = decriptografarTxt;
        botaoCopiar.onclick = copiar;