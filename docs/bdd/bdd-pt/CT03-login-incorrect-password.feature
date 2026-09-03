# language: pt
Funcionalidade: Login de Usuário (Login Incorreto)
  Como um usuário tentando acessar o sistema
  Quero tentar realizar o login utilizando credenciais inválidas
  Para que o sistema impeça o acesso indevido e exiba uma mensagem de erro adequada

  Contexto:
    Dado que o navegador está aberto na URL base "https://automationexercise.com"
    E a página inicial é carregada completamente

  Cenário: Tentativa de login com e-mail ou senha incorretos
    Dado que clico no botão "Signup / Login"
    E valido que o cabeçalho "Login to your account" está visível
    Quando preencho os campos de e-mail com "erro@test.com" e senha com "erro123"
    E clico no botão "Login"
    Então valido que a mensagem de erro "Your email or password is incorrect!" está visível na tela