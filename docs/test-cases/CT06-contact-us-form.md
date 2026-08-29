# CT-06: Envio de Formulário de Contato com Anexo

**Suíte de Testes:** Contato / Formulário  
**Prioridade:** Alta  
**Tipo de Teste:** Funcional / E2E  

---

### Pré-condições
1. O navegador deve estar aberto na URL base (`https://automationexercise.com`).
2. A página inicial deve carregar completamente.

---

### Dados do Teste
* **Nome:** `Usuário QA`
* **E-mail:** `contato@qa.com`
* **Assunto:** `Suporte Técnico - Teste Automatizado`
* **Mensagem:** `Mensagem de teste automatizado enviada via formulário de contato.`
* **Arquivo Anexo:** `exemplo_upload.txt` (arquivo válido no diretório de fixtures)

---

### Passos de Execução
1. Navegar até a URL base (`https://automationexercise.com`).
2. Validar se a homepage está visível e foi carregada com sucesso.
3. Clicar no botão **Contact us** no menu superior.
4. Validar se o cabeçalho **'GET IN TOUCH'** está visível.
5. Preencher os campos de nome, e-mail, assunto e mensagem.
6. Realizar o upload de um arquivo válido no campo de anexo.
7. Clicar no botão **Submit**.
8. Confirmar o alerta do navegador (*browser dialog*) clicando em **OK**.
9. Validar se a mensagem de sucesso **'Success! Your details have been submitted successfully.'** está visível.
10. Clicar no botão **Home**.
11. Validar se o usuário foi redirecionado com sucesso para a página inicial.

---

### Resultado Esperado
O formulário é preenchido e enviado com sucesso acompanhado do arquivo anexo, a confirmação do alerta do sistema é processada e a mensagem de envio com sucesso é exibida na tela.