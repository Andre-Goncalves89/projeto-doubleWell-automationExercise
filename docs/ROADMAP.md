# 🗺️ DoubleWell Automation Exercise — Test Suite Roadmap

## 📌 Visão Geral do Projeto

Este projeto consiste em uma suíte completa de testes automatizados E2E (End-to-End) desenvolvida para a plataforma [Automation Exercise](https://automationexercise.com). 

A solução foi projetada utilizando **Playwright** com **TypeScript**, seguindo o padrão de arquitetura **Page Object Model (POM)**, integração contínua (CI/CD via GitHub Actions) e documentação de testes alinhada aos padrões **ISTQB** e especificação **BDD (Gherkin)**.

---

## 🏗️ Arquitetura e Estrutura de Pastas

```text
automation-exercise-playwright/
├── .github/
│   └── workflows/          # Pipeline CI/CD gerado pelo Playwright
├── docs/                   # Documentação do projeto
│   ├── ROADMAP.md          # Roadmap geral e rastreabilidade da suíte
│   └── test-cases/         # Casos de teste detalhados em Markdown
│       ├── CT01-register-user.md
│       ├── CT02-login-correct-password.md
│       ├── CT03-login-incorrect-password.md
│       ├── CT04-logout-user.md
│       ├── CT05-register-existing-email.md
│       ├── CT06-contact-us-form.md
│       ├── CT07-verify-test-cases-page.md
│       └── CT08-verify-products-and-detail-page.md
├── src/                    # Código-fonte da automação (Page Object Model)
│   ├── fixtures/           # Arquivos estáticos e dados para teste (ex: anexos)
│   ├── pages/              # Classes de páginas (Page Objects)
│   │   ├── BasePage.ts
│   │   ├── HomePage.ts
│   │   ├── LoginPage.ts
│   │   ├── SignupPage.ts
│   │   ├── ContactUsPage.ts
│   │   └── ProductsPage.ts
│   └── utils/              # Helpers e geradores de dados auxiliares
├── tests/                  # Especificações de teste (Specs Playwright)
│   ├── CT01-register-user.spec.ts
│   ├── CT02-login-correct.spec.ts
│   ├── CT03-login-incorrect.spec.ts
│   ├── CT04-logout.spec.ts
│   ├── CT05-register-existing-email.spec.ts
│   ├── CT06-contact-us.spec.ts
│   ├── CT07-test-cases-page.spec.ts
│   └── CT08-products-catalog.spec.ts
├── .gitignore              # Regras de ignorados do Git
├── package.json            # Dependências e scripts do projeto
├── playwright.config.ts    # Configuração global do Playwright (Navegadores, Timeouts, BaseURL)
└── README.md               # Guia de execução e documentação principal
```

---

## 🎯 Mapeamento dos Casos de Teste (Test Scope)

Abaixo está o roadmap dos 8 cenários prioritários mapeados e automatizados nesta suíte:

| ID | Título do Caso de Teste | Suíte / Módulo | Tipo de Teste | Prioridade |
| :---: | :--- | :--- | :--- | :---: |
| **CT-01** | `TEST CASE #01 - Register User` | Signup / Login | Funcional / E2E | Alta |
| **CT-02** | `TEST CASE #02 - Login user with correct email and password` | Signup / Login | Funcional / E2E | Alta |
| **CT-03** | `TEST CASE #03 - Login user with incorrect email and password` | Signup / Login | Funcional / Negativo | Média |
| **CT-04** | `TEST CASE #04 - Logout user` | Signup / Login | Funcional / E2E | Média |
| **CT-05** | `TEST CASE #05 - Register user with existing email` | Signup / Login | Funcional / Negativo | Média |
| **CT-06** | `TEST CASE #06 - Contact US form` | Contato / Form | Funcional / E2E | Alta |
| **CT-07** | `TEST CASE #07 - Verify test cases page` | Navegação | UI / Interface | Média |
| **CT-08** | `TEST CASE #08 - Verify all products and product detail page` | Produtos | Funcional / UI | Alta |

---

## 🚀 Tecnologias e Boas Práticas Utilizadas

- **Playwright + TypeScript**: Execução rápida, tipagem estática rigorosa e tratamento nativo de esperas assíncronas (auto-waiting).
- **Page Object Model (POM)**: Separação de conceitos entre elementos/ações da tela e asserções do teste.
- **Cross-Browser Testing**: Suporte configurado para Chromium, Firefox e WebKit.
- **Continuous Integration (CI/CD)**: Pipeline automatizada com GitHub Actions para validação a cada Pull Request.
- **Gherkin / BDD Bounded Documentation**: Especificação funcional legível tanto para time técnico quanto para negócio.