# CT-02: Login de Usuário com E-mail e Senha Corretos

**Suíte de Testes:** Signup / Login  
**Prioridade:** Alta  
**Tipo de Teste:** Funcional / E2E  

---

### Pré-condições
1. O navegador deve estar aberto na URL base (`https://automationexercise.com`).
2. A página inicial deve carregar completamente.
3. Existir uma conta previamente cadastrada na base de dados.

---

### Dados do Teste
* **E-mail:** `testedw@qa.com`
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
8. Clicar no botão **Delete Account**.
9. Validar se a mensagem **'ACCOUNT DELETED!'** está visível na tela.
10. Clicar no botão 'Continue'

---

### Resultado Esperado
O usuário realiza a autenticação com sucesso utilizando credenciais válidas, acessa a área logada do sistema, executa a exclusão da conta e visualiza a confirmação de que o perfil foi deletado.