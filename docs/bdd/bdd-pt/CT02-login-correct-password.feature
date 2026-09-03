# language: pt
Funcionalidade: Login de Usuário (Login Correto)
  Como um usuário cadastrado
  Quero realizar o login na plataforma utilizando credenciais válidas
  Para que eu possa acessar os recursos restritos da minha conta com segurança

  Contexto:
    Dado que o navegador está aberto na URL base "https://automationexercise.com"
    E a página inicial é carregada completamente
    E existe uma conta previamente cadastrada na base de dados

  Cenário: Realizar login com sucesso utilizando e-mail e senha corretos
    Dado que clico no botão "Signup / Login"
    E valido que o cabeçalho "Login to your account" está visível
    Quando preencho os campos de e-mail com "testqadw@qa.com" e senha com "test123"
    E clico no botão "Login"
    Então valido que o texto "Logged in as " está visível no menu superior
    Quando clico no botão "Delete Account"
    Então valido que a mensagem "ACCOUNT DELETED!" está visível na tela
    E clico no botão "Continue"