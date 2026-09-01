# 🚀 Automação de Testes E2E - Automation Exercise (Doublewell)

[![Playwright](https://img.shields.io/badge/Playwright-TypeScript-green?logo=playwright)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CI/CD](https://img.shields.io/badge/GitHub%20Actions-CI-2088FF?logo=github-actions&logoColor=white)](https://github.com/features/actions)

Projeto de automação de testes End-to-End (E2E) desenvolvido em **TypeScript** utilizando o **Playwright**, aplicado sobre a plataforma de testes [Automation Exercise](https://automationexercise.com/). O projeto segue rigorosamente as melhores práticas de mercado em engenharia de qualidade de software, destacando-se pela manutenibilidade, encapsulamento e rastreabilidade de falhas.

---

## 🏗️ Arquitetura do Projeto

O framework adota o padrão de projeto **Page Object Model (POM)** combinado com uma classe base abstrata (`BasePage`) para unificar ações e asserções comuns, garantindo código limpo e reutilizável.

```text
📦 automation-exercise-playwright/
 ┣ 📂 .github/workflows/          # Pipelines de CI/CD (GitHub Actions)
 ┣ 📂 docs/                       # Documentação e Artefatos do Projeto
 ┃  ┣ 📂 bug-reports/             # Relatórios de bugs e evidências em vídeo (.mp4)
 ┃  ┣ 📂 test-cases/              # Documentação detalhada dos Casos de Teste (Markdown)
 ┃  ┗ 📜 ROADMAP.md               # Planejamento estratégico das entregas
 ┣ 📂 src/
 ┃  ┣ 📂 fixtures/                # Massas de dados para testes
 ┃  ┣ 📂 pages/                   # Objetos de Página (Page Objects & Interfaces)
 ┃  ┗ 📂 utils/                   # Funções utilitárias e helpers
 ┣ 📂 tests/                      # Especificações dos Testes E2E (.spec.ts)
 ┣ 📜 package.json                # Dependências e scripts de execução
 ┣ 📜 playwright.config.ts        # Configurações globais do Playwright
 ┗ 📜 README.md                   # Documentação principal do projeto

 ---

## 📋 Mapeamento da Suíte de Testes (CT01 - CT08)

A suíte cobre fluxos críticos de negócio, autenticação, formulários e navegação de catálogo:

| ID | Caso de Teste | Módulo | Tipo | Prioridade | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **CT-01** | Register User | Signup | Funcional / E2E | Alta | ✅ Passando |
| **CT-02** | Login with correct email and password | Signup / Login | Funcional / E2E | Alta | ✅ Passando |
| **CT-03** | Login with incorrect email and password | Signup / Login | Funcional / Negativa | Média | ✅ Passando |
| **CT-04** | Logout User | Signup / Login | Funcional / E2E | Média | ✅ Passando |
| **CT-05** | Register with existing email | Signup | Funcional / Negativa | Média | ✅ Passando |
| **CT-06** | Contact Us Form | Contato | Form / Funcional | Alta | ⚠️ Bug Documentado |
| **CT-07** | Verify Test Cases Page | Navegação | UI / Interface | Média | ✅ Passando |
| **CT-08** | Verify All Products and Product Detail Page | Produtos | Funcional / UI / Alta | Alta | ✅ Passando |

---

## 🛠️ Tecnologias e Padrões Utilizados

- **Playwright + TypeScript:** Execução paralela de alta performance, tipagem estática e esperas automáticas (*auto-waiting*).
- **Page Object Model (POM):** Desacoplamento completo entre a lógica de teste e os seletores/elementos de interface.
- **Tratamento de Flakiness & Anúncios Externos:** Mapeamento de contornos técnicos (como navegação via rota direta `/products` para isolamento de pop-ups intersticiais de terceiros).
- **Relatórios Detalhados e Evidências:** Gravação automática de vídeos em falhas/sucessos e geração de relatórios interativos em HTML.
- **Pipeline CI/CD:** Integração contínua configurada via GitHub Actions para validação automatizada de cada *Pull Request*.

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos
- Node.js instalado (v18+ recomendado)
- Git

### Instalação

1. Clone o repositório:
   ```bash
   git clone [https://github.com/seu-usuario/automation-exercise-playwright.git](https://github.com/seu-usuario/automation-exercise-playwright.git)
   cd automation-exercise-playwright
   ```
---

```bash
npm install
```
---
```bash
npx playwright install
```
---
```bash
npx playwright test
```
---
```bash
npx playwright test --ui
```
---
```bash
npx playwright test tests/products.spec.ts --headed
```
---
```bash
npx playwright show-report
```
---

## 📝 Contribuição e Licença
Projeto desenvolvido com foco em excelência técnica para automação de testes de ponta a ponta. Sinta-se à vontade para abrir *Issues* ou enviar *Pull Requests* de melhoria.