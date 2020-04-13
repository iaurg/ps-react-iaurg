# Projeto de estudo de componentes reutilizáveis.

## O que é um componente reutilizável?

[!Componentes Reutilizaveis](./images/componentes-reutilizaveis.png)

O foco principal no conceito de componentes reutilizáveis é manter uma linha tênue entre utilidade e complexidade. Construir componentes que podem ser facilmente replicados, configurados e mantidos é uma qualidade que pode beneficiar um projeto ou biblioteca por completo.

Objetivo principal no conceito de componente é a separação de responsabilidades para que cada elemento seja útil e funcional por sí só. Podemos pegar esta ideia do "S" do [SOLID](https://en.wikipedia.org/wiki/SOLID) que remete ao conceito de responsabilidade única, a criação de um componente deve ser concentrada dentro dele mesmo (exceto em casos de interdependência).

Uma boa analogia com o mundo real é considerar um componente reutilizável como a peça de um carro, por exemplo, a porta do carro X é projetada e construida uma vez e aplicada em incontáveis carros. Essa é a reutilização. Em alguns momentos essa porta pode passar por melhorias ou ajustes, mas o foco principal dela é ser replicável.

Ao criar componentes reutilizáveis você consegue otimizar o trabalho, gerar uma maior consistência em sua base, melhorar o fluxo de ajustes, cortar custos desnecessários, facilitar a colaboração, permitir escalonamento de projetos e acelerar o desenvolvimento.

## Criando o componente

Provavelmente nas primeiras vezes que você tentar escrever um componente reutilizável ele não se adaptará muito bem, mas sem problemas, vá polindo seu componente conforme você o utiliza.

Ao criar um componente reutilizável é necessário pensar em alguns aspectos comuns que irão guiar seu componente durante o desenvolvimento.

### Audiência

Por quem e onde será utilizado seu componente? Existem alguns cenários comuns que são:
1 - Projeto: Seu componente será compartilhado entre páginas de um mesmo projeto apenas.
2 - Time: Você irá distribuir o componente através de vários projetos e será utilizado pelo seu time
3 - Empresa: Um componente construido para ser utilizado em todo o contexto da empresa
4 - Público: Criado para ser utilizado por qualquer pessoa, normalmente utilizado e em bibliotecas de UI

O nível de dificuldade de construção desses componentes aumenta gradativamente(1-4), sendo que em cada contexto o número de problemas e conflitos que podem aparecer são muito maiores. Afinal construir um componente para utilizar em uma página dentro de um contexto é bem mais simples do que um componente público que se adeque a todo tipo de projeto. O recomendado é iniciar com construção dentro de projetos (1) e aumentar gradativamente. Viu um componente em seu projeto que pode ser reutilizado em outra página? Adapte ele para atender esse contexto.

### Flexivel ou rígido?

Ao criar um componente reutilizável você acabará se deparando com a decisão de fazer um componente rígido ou flexível. Mas o que difere um elemento rígido de um flexivel?

Componente flexível é mutável e adaptável, normalmente em componentes são propriedades que definem:
- Estilos
- Layouts (horizontal, vertical, breakpoints...)
- Funções

Um componente rígido é menos customizável e possui uma quantidade menor de variações.

A comparação entre um e outro é que quanto mais flexível mais complexo.

Rigido                         Flexivel
===================================>
Menos complexo                Mais complexo

Normalmente componentes rígidos serão mais fáceis de criar e manter, menos opções e variações, menos código para administrar, rápido para criar, simples de entender, fácil de testar. E como componentes rígidos utilizam menos _props_ ficam mais fáceis de serem mantidos, props são fáceis de adicionar porém dificéis de remover quando o componente já está sendo utilizado no projeto.

Os componentes flexiveis possuem suas vantagens que são mais adaptaveis em diversos contextos, podem ser mais personalizados, atendem diversas necessidades de uma vez.

Ao criar componentes reutilizaveis opte por iniciar com componentes rígidos e adicione flexibilidade aos poucos e quando necessário. Foque em equilibrar as necessidades em cada elemento, usuários tendem a preferir componentes mais flexiveis pois atendem melhor as necessidades únicas de cada um, mas cabe a você definir se vale a pena trocar facilidade de utilização por complexidade de desenvolvimento.

### Dicas na construção de componente

1 - Cuidado com elementos de [marcação fracos](https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element) como `<p>` `<i>` e afins. Ao criar um componente que receba um `{children}` imagine o seguinte cenário:
```js
// Evite isso!
<p>
{children}
</p>
```
Caso alguem passe uma `<div>` como children o seu componente terá um [erro na validação HTML](https://stackoverflow.com/questions/10763780/putting-div-inside-p-is-adding-an-extra-p). Prefira a utilização de estruturas como:
```js
// Ai sim :D
<div>
{children}
</div>
```

2 - Determine os tipos das propriedades passadas ao componente utilizando [prop-types](https://www.npmjs.com/package/prop-types) de preferência com alertas no sistema de lint, isso irá prevenir diversos erros e auxiliar na utilização do componente por outras pessoas deixando o seu componente mais claro e didático sobre quais dados ele necessita.

3 - Evite utilizar manualmente ID's no HTML de seus componentes, eles podem facilmente ser replicados através da estrutura dando uma duplicidade de HTML ID que pode desestabilizar sua estrutura. Caso seja necessário um ID passe ele via _props_.

4 - Declare valores de propriedades padrões em seus componentes, elas ajudarão quem utiliza o componente a entender melhor o funcionamento e irão prevenir erros de renderização caso nenhum valor seja passado.

5 - Preocupe-se com a acessibilidade de seu componente declarando tags semânticas e marcações corretas para os elementos. Muitos usuários navegam utilizando leitores de tela e podem se beneficiar com esses detalhes.

6 - Se o seu component utilizar diversas _props_ considere passá-las como um objeto configurável para facilitar na utilização do componente e evitar o desgaste por excesso de declaração. Por exemplo em um component de usuário:

```js

// São poucas props mas podem crescer conforme seu contexto
<Usuario
    nome="Italo"
    cidade="Porto"
    planeta="Terra"
    cor="Preto"
    vivo={true}
/>

// Neste caso podemos passá-las como config. Caso os dados retornados da API sejam iguais suas props você apenas passa o objeto, simples.

<Usuario
    dados={{
        nome:"Italo",
        cidade:"Porto",
        planeta:"Terra",
        cor:"Preto",
        vivo:true
    }}
/>
```

7 - Sempre que possível foque em ter componentes que podem ser renderizados via Server Side Rendering, no caso de sites que se beneficiam dessa tecnologia. Isso fará com que você deixe de utilizar propriedades que dependam do navegador para serem funcionais como document, window, setTimeout...

8 - Foque na responsabilidade de cada componente ter um propósito. Quanto maior e mais complexo for o componente mais difícil será administrá-lo. Componentes simples e diretos serão fáceis de editar, manter e criar.