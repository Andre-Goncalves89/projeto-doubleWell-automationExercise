# CT-01: Cadastro de Usuário com Sucesso (Register User)

**Suíte de Testes:** Signup / Login  
**Prioridade:** Alta  
**Tipo de Teste:** Funcional / E2E  

---

### Pré-condições
1. O navegador deve estar aberto na URL base (`https://automationexercise.com`).
2. A página inicial deve carregar completamente.

---

### Dados do Teste
* **Nome do Usuário:** Teste QA
* **E-mail:** `usuario_temp_<timestamp>@mail.com` (gerado dinamicamente)
* **Informações de Endereço:** Dados válidos preenchidos (Address, Country, State, City, Zipcode, Mobile Number).

---

### Passos de Execução
1. Clicar no botão **Signup / Login**.
2. Validar se o cabeçalho **'New User Signup!'** está visível.
3. Digitar um nome e e-mail válidos nos campos de cadastro.
4. Clicar no botão **Signup**.
5. Validar se o cabeçalho **'ENTER ACCOUNT INFORMATION'** está visível.
6. Preencher as informações da conta (Title, Password, Date of Birth).
7. Marcar as checkboxes **'Sign up for our newsletter!'** e **'Receive special offers from our partners!'**.
8. Preencher todos os detalhes de endereço e contato.
9. Clicar no botão **'Create Account'**.
10. Validar se a mensagem **'ACCOUNT CREATED!'** está visível na tela.
11. Clicar no botão **'Continue'**.
12. Validar se o texto **'Logged in as <username>'** está visível no menu superior.
13. Clicar no botão **'Delete Account'**.
14. Validar se a mensagem **'ACCOUNT DELETED!'** está visível e clicar em **'Continue'**.

---

### Resultado Esperado
O usuário conclui o cadastro com sucesso, é autenticado na sessão, deleta a conta criada e é redirecionado para a tela inicial com a confirmação de exclusão.