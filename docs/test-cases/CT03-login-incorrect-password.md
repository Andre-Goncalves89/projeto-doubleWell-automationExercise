# CT-03: Login de Usuário com Credenciais Incorretas

**Suíte de Testes:** Signup / Login  
**Prioridade:** Média  
**Tipo de Teste:** Funcional / Negativo  

---

### Pré-condições
1. O navegador deve estar aberto na URL base (`https://automationexercise.com`).
2. A página inicial deve carregar completamente.

---

### Dados do Teste
* **E-mail:** `erro@test.com`
* **Senha:** `erro123`

---

### Passos de Execução
1. Navegar até a URL base (`https://automationexercise.com`).
2. Validar se a homepage está visível e foi carregada com sucesso.
3. Clicar no botão **Signup / Login**.
4. Validar se o cabeçalho **'Login to your account'** está visível.
5. Preencher os campos de e-mail e senha com credenciais inválidas.
6. Clicar no botão **Login**.
7. Validar se a mensagem de erro **'Your email or password is incorrect!'** está visível na tela.

---

### Resultado Esperado
O sistema bloqueia a autenticação e exibe a mensagem de alerta informando que o e-mail ou a senha inseridos estão incorretos, mantendo o usuário na tela de login.
