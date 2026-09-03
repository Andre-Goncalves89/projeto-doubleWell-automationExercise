# language: pt
Funcionalidade: Formulário de Contato com Anexo
  Como um usuário da plataforma
  Quero enviar uma mensagem de contato preenchendo todos os campos e anexando um arquivo
  Para que minha solicitação de suporte seja enviada com sucesso à equipe responsável

  Contexto:
    Dado que o navegador está aberto na URL base "https://automationexercise.com"
    E a página inicial é carregada completamente

  Cenário: Envio de formulário de contato preenchendo dados e anexo com sucesso
    Dado que clico no botão "Contact us" no menu superior
    E valido que o cabeçalho "GET IN TOUCH" está visível
    Quando preencho os campos de nome com "Usuário QA", e-mail com "testqa@qa.com", assunto com "Suporte Técnico - Teste Automatizado" e mensagem com "Mensagem de teste automatizado enviada via formulário de contato."
    E realizo o upload de um arquivo válido no campo de anexo utilizando "./src/fixtures/sample.txt"
    E clico no botão "Submit"
    E confirmo o alerta do navegador clicando em OK
    Então valido que a mensagem de sucesso "Success! Your details have been submitted successfully." está visível
    Quando clico no botão "Home"
    Então valido que o usuário foi redirecionado com sucesso para a página inicial