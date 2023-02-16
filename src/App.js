
import './App.css';



const App = () => {

  const nome = document.getElementById('nome')
  const telefone = document.getElementById('numtelefone')

function enviarDados(){
  if(nome.value !== '' & telefone.value !== ''){
      alert("Dados salvos")
  }
}
  return (
    <div className="App">

        <h1 class="titulo__principal">Minha agenda</h1>
      <section class="container">
        <form class="container__formulario">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" placeholder="Nome do contato" required class="caixa__input"></input>

            
            <label for="numtelefone">Número de telefone:</label>
            <input type="tel" id="numtelefone" placeholder="(XX) XXXXX-XXXX" required class="caixa__input"></input>

            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="exemplo@dominio.com" class="caixa__input"></input>

            <label for="endereco">Endereço:</label>
            <input type="text" id="endereco" class="caixa__input" placeholder=" xxxxxx xxxxx xxxxx"></input>

            <input class="botao__submit" type="submit" value="Salvar contato" onClick={enviarDados}></input>
        </form>
    </section>
      
    </div>
  );
}

export default App;
