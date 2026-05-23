# MCP_Playwright-chotarol

Professional Playwright automation framework using JavaScript and Page Object Model (POM) structure.

---

# Overview

This project was created to provide a scalable, maintainable, and reusable automation testing framework using:

- Playwright
- JavaScript
- Page Object Model (POM)
- API Testing
- UI Automation
- CI/CD Ready Structure
- Cross-browser execution

The framework is designed following senior QA automation engineering practices and can be integrated into enterprise environments.

---

# Project Structure

```plaintext
MCP_Playwright-chotarol/
│
├── pages/
├── tests/
├── utils/
├── fixtures/
├── test-data/
├── playwright.config.js
├── package.json
├── .gitignore
├── README.md
└── .github/
    └── workflows/
```

---

# Requirements

Before running the project, install:

- Node.js
- Git
- Visual Studio Code
- Playwright

---

# Installation

Clone the repository:

```bash
git clone https://github.com/chotarol/MCP_Playwright-chotarol.git
```

Navigate to the project:

```bash
cd MCP_Playwright-chotarol
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

Open Playwright HTML report:

```bash
npx playwright show-report
```

---

# Features

- Cross-browser testing
- Reusable Page Object Model architecture
- API validation support
- Scalable folder structure
- CI/CD integration ready
- Debugging support
- HTML reporting
- Parallel execution support

---

# CI/CD Ready

This framework is prepared for integration with:

- GitHub Actions
- Jenkins
- Azure DevOps
- GitLab CI/CD

---

# Best Practices Included

- Separation of concerns
- Reusable locators and methods
- Maintainable test architecture
- Clean reporting structure
- Environment variable support
- Git ignore optimization

---

# Recommended .gitignore

```gitignore
node_modules/
playwright-report/
test-results/
.env
```

---

# Author

Christian Otarola

- QA & Engineering Manager
- Senior QA Automation Engineer
- Playwright | API Testing | Agile | CI/CD

GitHub:
https://github.com/chotarol

LinkedIn:
https://www.linkedin.com/in/christian-otarola-aa84a313/

---

# Future Improvements

- Docker integration
- Advanced reporting dashboards
- Data-driven testing
- Multi-environment execution
- Visual testing integration
- Performance testing support

---

# License

This project is for learning, portfolio, and automation framework demonstration purposes.
