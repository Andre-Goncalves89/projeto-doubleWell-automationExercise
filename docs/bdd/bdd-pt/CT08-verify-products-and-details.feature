# language: pt
Funcionalidade: Verificação de Produtos e Detalhes
  Como um usuário navegando no e-commerce
  Quero explorar o catálogo de produtos e visualizar os detalhes de um item específico
  Para que eu possa conferir as informações essenciais como preço, categoria e disponibilidade

  Contexto:
    Dado que o navegador está aberto na URL base "https://automationexercise.com"
    E a página inicial é carregada completamente

  Cenário: Navegar pelo catálogo de produtos e validar informações na página de detalhes
    Dado que clico no botão "Products" no menu superior
    Então valido que o usuário foi redirecionado para a página com o cabeçalho "ALL PRODUCTS"
    E valido que a lista com os produtos está visível na tela
    Quando clico em "View Product" no primeiro produto da lista
    Então valido que o usuário foi redirecionado para a página de detalhes do produto "/product_details/1"
    E valido que as seguintes informações do produto estão visíveis na tela:
      | Informação do Produto         |
      | Nome do Produto (Product Name)|
      | Categoria (Category)          |
      | Preço (Price)                 |
      | Disponibilidade / Estoque     |
      | Condição (Condition)          |
      | Marca (Brand)                 |