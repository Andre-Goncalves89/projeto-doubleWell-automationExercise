# 🗺️ DoubleWell Automation Exercise — Test Suite Roadmap

## 📌 Visão Geral do Projeto

Este projeto consiste em uma suíte completa de testes automatizados E2E (End-to-End) desenvolvida para a plataforma [Automation Exercise](https://automationexercise.com). 

A solução foi projetada utilizando **Playwright** com **TypeScript**, seguindo o padrão de arquitetura **Page Object Model (POM)**, integração contínua (CI/CD via GitHub Actions) e documentação de testes alinhada aos padrões **ISTQB** e especificação **BDD (Gherkin)**.

---

# 🏗️ Arquitetura e Estrutura de Pastas

## 📁 Arquitetura do Projeto - Automation Exercise (Doublewell)

Este documento descreve a estrutura atualizada de pastas, páginas, suítes de testes e documentação do projeto Playwright em TypeScript.

```text
📁 .github/
📁 docs/
  📁 bdd/
    📁 bdd-eng/
      📄CT01-register-user.feature
      📄CT02-login-correct-password.feature
      📄CT03-login-incorrect-password.feature
      📄CT04-logout-user.feature
      📄CT05-register-existing-email.feature
      📄CT06-contact-us-form.feature
      📄CT07-verify-test-cases-page.feature
      📄CT08-verify-products-and-details.feature
    📁 bdd-pt/
      📄CT01-register-user.feature
      📄CT02-login-correct-password.feature
      📄CT03-login-incorrect-password.feature
      📄CT04-logout-user.feature
      📄CT05-register-existing-email.feature
      📄CT06-contact-us-form.feature
      📄CT07-verify-test-cases-page.feature
      📄CT08-verify-products-and-details.feature
  📁 bug-reports/
    📁 evidences/
      📄 CT06-bug-report-contactUs-spec-failed.mp4
      📄 CT06-test-report-contactUs-spec-passed.mp4
      📄 CT08-bug-report-products-failed-in-validate-contains-text-AllProducts05.mp4
    📁 files/
      📄 [BUG] CT06-Botão-submit-formContactUs-instavel
      📄 [BUG] CT08-validação-titulo-text-pgAllProducts
  📁 test-cases/
    📄 CT01-register-user.md
    📄 CT02-login-correct-password.md
    📄 CT03-login-incorrect-password.md
    📄 CT04-logout-user.md
    📄 CT05-register-existing-email.md
    📄 CT06-contact-us-form.md
    📄 CT07-verify-test-cases-page.md
    📄 CT08-verify-products-and-detail-page.md
  📁 root_docs/
    📄 ROADMAP.md
📁 node_modules/
📁 playwright-report/
📁 src/
  📁 fixtures/
    📄 sample.txt
  📁 pages/
    📄 AccountCreatedPage.ts
    📄 BasePage.ts
    📄 ContactUsPage.ts
    📄 HomePage.ts
    📄 LoginPage.ts
    📄 ProductsPage.ts
    📄 ProductViewDeatilsPage.ts
    📄 SignupPage.ts
    📄 TestCasePage.ts
  📁 utils/
📁 tests/
  📄 contact-us.spec.ts
  📄 login.spec.ts
  📄 logout.spec.ts
  📄 products.spec.ts
  📄 signup.spec.ts
  📄 test-case-pg.spec.ts

📄 .gitignore
📄 package-lock.json
📄 package.json
📄 playwright.config.ts
📄 README.md
```

## 📋 Descrição dos Componentes Principais

### 📂 `docs/`
- **`bug-reports/evidences/`**: Contém as evidências em vídeo (`.mp4`) capturadas durante as execuções de testes que apresentaram falhas ou comportamentos de *flakiness*.
- **`test-cases/`**: Documentação detalhada em Markdown (`.md`) para cada caso de teste mapeado (`CT01` a `CT08`).
- **`ROADMAP.md`**: Planejamento e evolução das entregas do projeto de automação.

### 📂 `src/pages/` (Page Object Model)
- **`BasePage.ts`**: Classe abstrata base que centraliza métodos reutilizáveis (como navegação, preenchimento, cliques e asserções unificadas de texto com espera implícita).
- **`ProductsPage.ts`**: Mapeamento e ações da listagem de produtos.
- **`ProductViewDetailsPage.ts`**: Mapeamento da interface de tipagem (`ProductDetails`) e seletores/métodos para validação dos detalhes do produto (nome, categoria, preço, disponibilidade, condição e marca).
- Demais páginas de suporte (`LoginPage`, `SignupPage`, `ContactUsPage`, `TestCasePage`, `HomePage`, `AccountCreatedPage`).

### 📂 `tests/`
- **`products.spec.ts`**: Casos de teste automatizados cobrindo a listagem de produtos e a inspeção de detalhes (CT08).
- Demais arquivos de especificação cobrindo os fluxos de autenticação, contato e navegação.
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