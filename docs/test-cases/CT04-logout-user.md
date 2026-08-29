# CT-04: Logout de Usuário com Sucesso

**Suíte de Testes:** Signup / Login  
**Prioridade:** Média  
**Tipo de Teste:** Funcional / E2E  

---

### Pré-condições
1. O navegador deve estar aberto na URL base (`https://automationexercise.com`).
2. A página inicial deve carregar completamente.
3. Existir uma conta previamente cadastrada e ativa no sistema.

---

### Dados do Teste
* **E-mail:** `testdw@qa.com`
* **Senha:** `test123`

---

### Passos de Execução
1. Navegar até a URL base (`https://automationexercise.com`).
2. Validar se a homepage está visível e foi carregada com sucesso.
3. Clicar no botão **Signup / Login**.
4. Validar se o cabeçalho **'Login to your account'** está visível.
5. Preencher os campos de e-mail e senha com credenciais válidas.
6. Clicar no botão **Login**.
7. Validar se o texto **'Logged in as <username>'** está visível no menu superior.
8. Clicar no botão **Logout**.
9. Validar se o usuário foi redirecionado para a página de login/signup com sucesso.

---

### Resultado Esperado
O usuário encerra a sessão ativa com sucesso ao clicar no botão de logout e é redirecionado para a tela de autenticação (`/login`).