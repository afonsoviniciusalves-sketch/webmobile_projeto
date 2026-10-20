# SITE WEB - Projeto Extensionista (Parte 2: Borboleta)
 
## Sobre o projeto
 
Este projeto é a continuação direta do Projeto 1. O site de apresentação de projetos de um profissional da área de tecnologia, antes feito com HTML, CSS e JavaScript puro, foi migrado para uma arquitetura baseada em **componentização com React**, utilizando o framework **Next.js**.
 
A plataforma continua reunindo, em um único ambiente digital, informações sobre os trabalhos realizados, permitindo que visitantes conheçam as soluções desenvolvidas e, havendo interesse, entrem em contato diretamente com o responsável.
 
Na Parte 2, o site passou a contar com:
 
* interface dividida em componentes reutilizáveis;
* estado interno (`useState`) e efeitos (`useEffect`) para controlar a interface;
* uma rota de API criada dentro do próprio Next.js, que devolve os dados dos projetos a partir de um JSON fixo (mockado);
* consumo dessa API pelo cliente (`fetch` dentro do `useEffect`) para preencher a lista de projetos de forma dinâmica;
* rotas simples e rota dinâmica de páginas.
Os projetos possuem valores, prazos e números de contato fictícios apenas para demonstração da interface.
 
---
 
## Equipe
 
* Vinicius Alves / RA: 10771489
* Pedro Jobe / RA: 10743750
* Diego Campos / RA: 10771507
* Nicolas Braga / RA: 10777202
---
 
## Ideação e protótipos (Wireframe)
 
O wireframe da Parte 2 foi feito em tons neutros (cinza e branco), com foco apenas na estrutura das telas e na indicação de onde ficam as rotas do Next.js.
 
**Legenda das etiquetas:**
 
* **Etiqueta escura e sólida:** rota simples (sem parâmetro).
* **Etiqueta branca e tracejada:** rota dinâmica (com parâmetro).
### Home — rota simples `/`
 
![Wireframe da Home](./wireframe/home.png)
 
### Produtos — rota simples `/produtos`
 
![Wireframe da página de Produtos](./wireframe/produtos.png)
 
### Detalhe do projeto — rota dinâmica `/produtos/[id]`
 
![Wireframe do detalhe do projeto](./wireframe/detalhe.png)
 
### Login — rota simples `/login`
 
![Wireframe do Login](./wireframe/login.png)
