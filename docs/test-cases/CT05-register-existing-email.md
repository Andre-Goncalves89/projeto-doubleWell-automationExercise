# CT-05: Tentativa de Registro com E-mail Já Existente

**Suíte de Testes:** Signup / Login  
**Prioridade:** Média  
**Tipo de Teste:** Funcional / Negativo  

---

### Pré-condições
1. O navegador deve estar aberto na URL base (`https://automationexercise.com`).
2. A página inicial deve carregar completamente.
3. Existir uma conta previamente cadastrada e ativa no sistema.

---

### Dados do Teste
* **Nome:** `Usuário Teste`
* **E-mail:** `testdw@qa.com` (e-mail já cadastrado)

---

### Passos de Execução
1. Navegar até a URL base (`https://automationexercise.com`).
2. Validar se a homepage está visível e foi carregada com sucesso.
3. Clicar no botão **Signup / Login**.
4. Validar se o cabeçalho **'New User Signup!'** está visível.
5. Preencher os campos de nome e e-mail informando o e-mail já existente na base.
6. Clicar no botão **Signup**.
7. Validar se a mensagem de erro **'Email Address already exist!'** está visível na tela.

---

### Resultado Esperado
O sistema bloqueia a tentativa de novo registro e exibe uma mensagem de erro alertando que o endereço de e-mail informado já se encontra em uso.