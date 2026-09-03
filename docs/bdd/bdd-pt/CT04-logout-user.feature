# language: pt
Funcionalidade: Logout de Usuário
  Como um usuário logado na plataforma
  Quero realizar o encerramento da minha sessão (logout)
  Para que a minha conta fique protegida após o uso do sistema

  Contexto:
    Dado que o navegador está aberto na URL base "https://automationexercise.com"
    E a página inicial é carregada completamente
    E existe uma conta previamente cadastrada e ativa no sistema

  Cenário: Realizar logout de usuário com sucesso
    Dado que clico no botão "Signup / Login"
    E valido que o cabeçalho "Login to your account" está visível
    Quando preencho os campos de e-mail com "testqadw@qa.com" e senha com "test123"
    E clico no botão "Login"
    E valido que o texto "Logged in as " está visível no menu superior
    Quando clico no botão "Logout"
    Então valido que o usuário foi redirecionado para a página de login/signup com sucesso