# CT-08: Verificação da Página de Produtos e Tela de Detalhes

**Suíte de Testes:** Produtos / Catálogo  
**Prioridade:** Alta  
**Tipo de Teste:** Funcional / Interface (UI)  

---

### Pré-condições
1. O navegador deve estar aberto na URL base (`https://automationexercise.com`).
2. A página inicial deve carregar completamente.

---

### Dados do Teste
* *Não se aplica (teste de navegação e validação visual de componentes).*

---

### Passos de Execução
1. Navegar até a URL base (`https://automationexercise.com`).
2. Validar se a homepage está visível e foi carregada com sucesso.
3. Clicar no botão **Products** no menu superior.
4. Validar se o usuário foi redirecionado para a página com o cabeçalho **'ALL PRODUCTS'**.
5. Validar se a lista com os produtos está visível na tela.
6. Clicar em **View Product** no primeiro produto da lista.
7. Validar se o usuário foi redirecionado para a página de detalhes do produto (`/product_details/1`).
8. Validar se as seguintes informações do produto estão visíveis na tela:
   * Nome do Produto (*Product Name*)
   * Categoria (*Category*)
   * Preço (*Price*)
   * Disponibilidade / Estoque (*Availability*)
   * Condição (*Condition*)
   * Marca (*Brand*)

---

### Resultado Esperado
O usuário navega até o catálogo de produtos, visualiza a listagem com sucesso, acessa a página de detalhes do primeiro item e confirma a presença de todas as informações obrigatórias do produto.