# language: pt
Funcionalidade: Verificação de Casos de Teste (Navegação)
  Como um usuário navegando pela plataforma
  Quero acessar a seção de casos de teste disponíveis no menu superior
  Para que eu possa verificar a listagem e os detalhes dos testes suportados pela aplicação

  Contexto:
    Dado que o navegador está aberto na URL base "https://automationexercise.com"
    E a página inicial é carregada completamente

  Cenário: Acessar e validar a página de casos de teste com sucesso
    Dado que clico no botão "Test Cases" no menu superior
    Então valido que o usuário foi redirecionado com sucesso para a página "/test_cases"
    E valido que o cabeçalho "TEST CASES" está visível na tela