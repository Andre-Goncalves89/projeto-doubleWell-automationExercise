# language: pt
Funcionalidade: Cadastro de Usuário (Register User)
  Como um novo usuário
  Quero me cadastrar na plataforma da Automation Exercise
  Para que eu possa acessar o sistema com minha conta e gerenciar meus dados

  Contexto:
    Dado que o navegador está aberto na URL base "https://automationexercise.com"
    E a página inicial é carregada completamente

  Esquema do Cenário: Cadastro de novo usuário com sucesso
    Dado que clico no botão "Signup / Login"
    E valido que o cabeçalho "New User Signup!" está visível
    E informo o nome "<nome>" e um e-mail válido no formato gerado dinamicamente nos campos de cadastro
    E clico no botão "Signup"
    E valido que o cabeçalho "ENTER ACCOUNT INFORMATION" está visível
    Quando preencho as informações da conta com "<title>", "<password>" e a data de nascimento
    E marco as opções de newsletter e recebimento de ofertas especiais
    E preencho todos os detalhes de endereço e contato com dados válidos
    E clico no botão "Create Account"
    Então valido que a mensagem "ACCOUNT CREATED!" está visível na tela
    E clico no botão "Continue"
    E valido que o texto "Logged in as " está visível no menu superior
    Quando clico no botão "Delete Account"
    Então valido que a mensagem "ACCOUNT DELETED!" está visível e clico no botão "Continue"

    Exemplos:
      | nome      | title | password |
      | Teste QA  | Mr.   | Senha123 |