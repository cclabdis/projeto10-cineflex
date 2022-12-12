- **Para correção automática ⚠️**
    
    [Cineflex Setores](https://www.figma.com/file/QAhzbfHCYwrULkFOwllR4R/Cineflex-Setores?node-id=0%3A1&t=mQyqFBz6GKNDSFRq-0)
    
    ⚠️ **Atenção:** Caso você tenha componentizado os elementos, **NÃO** coloque o data-identifier nas tags dos componentes React e sim nas tags HTML. Exemplo:
    
    ```jsx
    ERRADO: <MeuLindoBotaoComponentizado data-identifier="blabla" />
    CERTO: <button data-identifier="blabla" />
    ```
    
    🤔 **Por quê?** Porque atributos colocados nas tags dos componentes não são inseridos no HTML final gerado pelo React, somente atributos explicitamente colocados nas tags HTML.
    
    Lembre-se de dar sempre aquela olhada no “Inspecionar” para ver se o atributo foi adicionado corretamente
    
    - Como faço isso?
        
        ![inspecionar.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4d744419-a09a-4958-a5c8-96225b045a64/inspecionar.gif)
        
    - U**sando com Styled Components**
        
        Nesse caso, você pode sim colocar o data-identifier na tag do componente! Isso porque o styled components automaticamente repassa todos os atributos pra tag HTML final:
        
        ```jsx
        const MeuLindoBotao = styled.button`...`;
        
        <MeuLindoBotao data-identifier="blabla" /> (CORRETO!)
        ```
        
    - **E se eu quiser componentizar um botão pra ser usado em vários lugares com data-identifiers diferentes?**
        
        Nesse caso, você pode repassar todas as props pra tag HTML final de uma forma bem prática:
        
        ```jsx
        // No componente do botão:
        function BotaoCustomizado**({ props })** {
        	return <button **{...props}**>...</button> // <- repare que estamos passando as props para uma **tag html**
        }
        
        // Onde for usar o componente:
        <BotaoCustomizado data-identifier="blabla" />
        <BotaoCustomizado data-identifier="blublu" />
        ```
        
- **Dica - Implementação do clique nos assentos** 💡
    - Esse tela pode parecer complicada mas se usarmos tipos não primitivos via props fica muito mais fácil.
    - Quando passamos um objeto inteiro para um componente via props podemos facilmente descobri qual componente foi clicado
        
        ```jsx
      
        ```
        
    - Logo, podemos disparar a função escrita no componente pai recebendo a referência (o próprio objeto) que disparou o clique.
        
        ```jsx
        export default function App() {
          const [selectedSeats, setSelectedSeats] = useState([]);
        
          //Faz o click em cada componente Seat
          function handleSeat(seat) {
            //Aqui o seat é o próprio objeto que disparou o onClick
            if (seat.status === "unavailable") {
              return;
            }
        
        	...
        
        }
        ```
        
    
    **Veja o exemplo completo**
    
    [eloquent-hooks-iouosc](https://codesandbox.io/s/eloquent-hooks-iouosc?file=/src/App.js)
    

#