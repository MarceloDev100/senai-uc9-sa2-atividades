## SENAI-SP

### UC9 - SA2 (Implementação de interface) -> _Atividades (online e remota)_

Construção de modelos de páginas web voltadas para jogos e tecnologia, simulando um e-commerce,  em que foi usado *HTML5*, *CSS3* em grande parte e alguns trechos com *Bootstrap*,  tendo como característica a responsividade em dispositivos mais comuns.
Também foi utilizado Javascript , complementando com Jquery para mostrar algumas funcionalidades e interação do usuário com a página. 

#### Diferenças visuais e de codificação (desktop x responsivo)
Em relação às diferenças visuais , podemos destacar que no layout desktop,  os componentes tendem a ficar mais distribuídos ao longo da largura da página , podendo ficar mais espaçados uns dos outros, devido ao tamanho da tela ser naturalmente maior. Devido a isso, é possível inclusive acrescentar um menu de opções juntamente com uma lista de produtos ao lado no corpo da página sem prejuízo de visualização dos componentes.
Para que fosse feito o ajuste dos elementos na página, foi usado o flexbox relacionando sempre ao eixo principal em questão (horizontal ou vertical), dependendo da necessidade, além de outras propriedades usadas em conjunto e voltadas para posicionamento dos elementos ( no início, centro e fim, entre outras).

Em relação ao layout responsivo, podemos destacar que os componentes tendem a ficar mais distribuídos ao longo da altura da página, já que a largura de tela do dispositivo tende a diminuir à medida que caminhamos da máquina desktop para notebooks, tablets e smartphones. Com isso , tornou-se necessário fazer pequenos ajustes usando media queries associados ao flexbox para que os componentes passassem a se posicionar um embaixo do outro (verticalmente), se adaptando ao tamanho de tela de acordo com a largura máxima utilizada. Desta forma, a barra de rolagem vertical passou a surgir para que se pudesse visualizar os elementos de cima para baixo de forma adequada. Como estratégia, também foi diminuído, por exemplo, o tamanho de algumas fontes, imagens e de containers para que atingissem o posicionamento ideal.
No layout responsivo, também foi necessário exibir o menu de uma forma mais compacta, usando para tal o _menu de barra_ . Então o menu desktop horizontal no cabeçalho passou a dar origem a um menu vertical totalmente interativo , através do uso de Javascript/Jquery. 
Também existe a opção chamada mobile-first, em que o layout começa a ser projetado no dispositivo mobile para depois ir sendo adaptado para os dispositivos de tela maior. Neste projeto também foi utilizada essa opção em algumas páginas, em que foram feitos ajustes com o media queries usando a largura mínima de página.

**OBS:** Algumas imagens de produtos que aparecem na página inicial da seção destaque, mudaram em relação ao projeto inicial, tendo em vista que foi feito um carregamento dinâmico de outros produtos via Javascript, simulando como se fosse um banco de dados. 

Acessar em  <https://marcelodev100.github.io/senai-uc9-sa2-atividades/>
