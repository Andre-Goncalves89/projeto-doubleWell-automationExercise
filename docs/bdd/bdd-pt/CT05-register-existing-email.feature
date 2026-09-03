# language: pt
Funcionalidade: Registro com E-mail Existente (Cadastro Negativo)
  Como um usuário tentando me cadastrar na plataforma
  Quero tentar criar uma nova conta utilizando um e-mail que já está cadastrado
  Para que o sistema impeça a duplicação e exiba uma mensagem de erro adequada

  Contexto:
    Dado que o navegador está aberto na URL base "https://automationexercise.com"
    E a página inicial é carregada completamente
    E existe uma conta previamente cadastrada e ativa no sistema

  Cenário: Tentativa de registro utilizando um e-mail já existente na base
    Dado que clico no botão "Signup / Login"
    E valido que o cabeçalho "New User Signup!" está visível
    Quando preencho os campos de nome com "Usuário Teste" e e-mail com "testdw@qa.com"
    E clico no botão "Signup"
    Então valido que a mensagem de erro "Email Address already exist!" está visível na tela