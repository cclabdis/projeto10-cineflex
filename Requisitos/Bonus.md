- Botão de voltar
    - [ ]  Adicione um botão de voltar no topo do site à esquerda
    - [ ]  O topo do site deve estar fora dos componentes das páginas, ou seja, dentro do `<BrowserRouter>` do React Router
    - [ ]  Ao clicar no botão voltar, o usuário deve retornar para a página que estava anteriormente
        
        **Dica**: pesquise pela função `useNavigate()` do React Router
        
    - [ ]  O botão não deve ser exibido na tela inicial
- Informação de comprador por assento
    - [ ]  Faça com que os campos de Nome e CPF do comprador deixem de ser um único campo para serem campos pra cada assento selecionado. Ou seja, cada assento selecionado terá seu próprio Nome e CPF
    - [ ]  Conforme a pessoa for selecionando assentos, os campos devem ser exibidos abaixo na quantidade condizente com os assentos selecionados
    - [ ]  Ao desmarcar um assento que já possuía dados preenchidos, pergunte ao usuário com um **confirm** se ele gostaria realmente de remover o assento e apagar os dados
    - [ ]  Modifique o envio dos dados para o servidor para seguir este formato:
        
        ```jsx
        {
        	ids: [1, 2, 3], // ids dos assentos
        	compradores: [
        		{ idAssento: 1, nome: "Fulano", cpf: "12345678900" },
        		{ idAssento: 2, nome: "Fulano 2", cpf: "12345678901" },
        		{ idAssento: 3, nome: "Fulano 3", cpf: "12345678902" },
        	]
        }
        ```
        
    - [ ]  Na tela de sucesso, devem ser exibidos os nomes e CPFs de todos os compradores