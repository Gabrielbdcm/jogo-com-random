
        let numero = Math.floor(Math.random() * 10) + 1; 
        console.log(numero); 

        function consigo(){
            let numeroEscolhido = document.getElementById('numeroEscolhido').value;
            if (numeroEscolhido === ''){
            alert ('A regra é essa, você quer continuar no meu genjustu?');
           return;
    }

            
            if (parseInt(numeroEscolhido) === numero) {
                document.getElementById('area').innerHTML = 'Você conseguiu? COMO?';
                document.getElementById('img').innerHTML = '<img src="imagem/itachicerto.jpg">';
                document.getElementById('numeroEscolhido').classList.remove('errou'); 
                document.getElementById('numeroEscolhido').classList.add('acertou');
                document.getElementById('numeroEscolhido').disabled = true; 
            } else {
                document.getElementById('area').innerHTML = 'Errou, você é fraco!';
                document.getElementById('img').innerHTML = '<img src="imagem/itachierro.jpg">';
                document.getElementById('numeroEscolhido').classList.add('errou');
                document.getElementById('numeroEscolhido').style.backgroundColor = '#000000';
                document.getElementById('numeroEscolhido').style.color = '#ffffff'; 
            }
        }

        function nemfudendo(){
            document.getElementById('area').innerHTML = 'Já esperava, VOCÊ É FRACO!';
            document.getElementById('img').innerHTML = '<img src="imagem/itachierro.jpg">';
            document.getElementById('numeroEscolhido').classList.add('errou'); 
            document.getElementById('numeroEscolhido').style.backgroundColor = '#000000'; 
            document.getElementById('numeroEscolhido').style.color = '#ffffff'; 
        }