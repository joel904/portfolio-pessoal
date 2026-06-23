# Portfólio Pessoal - Joel Cavalcante

Este é o repositório do meu portfólio pessoal, desenvolvido para apresentar minha trajetória, formação, projetos e informações de contato. O site foi construído com foco em um design moderno, utilizando um tema escuro (Dark Mode) como padrão, com a opção de alternar para o tema claro (Light Mode).

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido inteiramente com as tecnologias base da web, não utilizando frameworks externos pesados:

- **HTML5:** Estruturação semântica de todas as páginas.
- **CSS3 (Vanilla):** Estilização, layout (Flexbox/Grid), responsividade e variáveis de controle de tema.
- **JavaScript (Vanilla):** Lógica de interatividade, troca de temas (Light/Dark Mode), animações e validação de formulários.
- **FontAwesome:** Ícones utilizados em todo o layout.
- **FormSubmit:** Serviço gratuito utilizado para processar os envios do formulário de contato sem necessidade de backend.

## 📂 Estrutura do Projeto

A navegação do portfólio está dividida nas seguintes páginas principais:

- `sobre.html`: Página inicial com uma introdução, biografia e resumo de habilidades (skills) e idiomas.
- `formacao.html`: Detalhes sobre a formação acadêmica (Estudante de Análise e Desenvolvimento de Sistemas).
- `portfolio.html`: Vitrine de projetos práticos, contendo os links diretos para os respectivos repositórios no GitHub.
- `contato.html`: Formulário de contato funcional com validação em tempo real.
- `obrigado.html`: Página de confirmação exibida após o envio bem-sucedido de uma mensagem via formulário.
- `styles.css`: Arquivo unificado contendo toda a estilização e sistema de cores das páginas.
- `scripts.js`: Arquivo que centraliza os scripts do site (tema, animação das barras de progresso e validação do formulário).


## ✨ Funcionalidades em Destaque

1. **Tema Dinâmico (Dark / Light Mode):** O usuário pode alternar entre o tema claro e escuro clicando no botão na barra de navegação. A preferência fica salva no `localStorage` do navegador, mantendo o tema selecionado mesmo ao recarregar a página.

2. **Animação das Barras de Skill:** As barras que demonstram a proficiência em linguagens de programação e idiomas são animadas dinamicamente ao carregar a página.

3. **Validação de Formulário Front-end:** O formulário de contato possui checagens em tempo real para os campos de nome, e-mail e mensagem. Mensagens de erro aparecem caso alguma regra não seja atendida.

4. **Integração de Contato Direto:** O formulário envia o conteúdo preenchido diretamente para o e-mail via `FormSubmit`.


