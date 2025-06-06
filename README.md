# Frontend Products - Documentação

## Visão Geral
Este é um projeto frontend desenvolvido com Angular, utilizando o framework Ant Design (ng-zorro-antd) para a interface do usuário. O projeto é uma aplicação web moderna e responsiva para gerenciamento de produtos.

![image](https://github.com/user-attachments/assets/59b668eb-52d7-4c88-a1ad-62bfdc91d297)

## Tecnologias Utilizadas

### Principais Tecnologias
- **Angular** (v19.2.0) - Framework principal
- **TypeScript** (v5.7.2) - Linguagem de programação
- **ng-zorro-antd** (v19.3.1) - Framework de UI baseado no Ant Design
- **RxJS** (v7.8.0) - Biblioteca para programação reativa

### Dependências de Desenvolvimento
- **Angular CLI** (v19.2.14)
- **Jasmine & Karma** - Para testes unitários
- **TypeScript** - Para tipagem estática

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:
- Node.js (versão LTS recomendada)
- npm (gerenciador de pacotes do Node.js)
- Angular CLI (instalado globalmente)

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/DEVLevid/frontend-products
cd frontend-products
```

2. Instale as dependências:
```bash
npm install
```

## Comandos Disponíveis

### Desenvolvimento
- `npm start` ou `ng serve` - Inicia o servidor de desenvolvimento
- `npm run build` ou `ng build` - Compila o projeto para produção
- `npm run watch` - Compila o projeto em modo de observação (watch mode)

### Testes
- `npm test` ou `ng test` - Executa os testes unitários
- `ng test --code-coverage` - Executa os testes com relatório de cobertura

## Estrutura do Projeto

```
frontend-products/
├── src/                    # Código fonte da aplicação
├── public/                 # Arquivos públicos
├── node_modules/          # Dependências instaladas
├── .angular/              # Configurações do Angular
├── .vscode/               # Configurações do VS Code
└── [arquivos de configuração]
```

## Configuração do Ambiente de Desenvolvimento

1. Instale o Angular CLI globalmente:
```bash
npm install -g @angular/cli
```

2. Configure seu editor (recomendado VS Code) com as extensões:
   - Angular Language Service
   - TypeScript and JavaScript Language Features
   - ESLint

## Scripts Disponíveis

- `ng serve` - Inicia o servidor de desenvolvimento
- `ng build` - Compila o projeto
- `ng test` - Executa os testes
- `ng e2e` - Executa testes end-to-end
- `ng generate` - Gera novos componentes, serviços, etc.

## Convenções de Código

- Seguir as convenções de estilo do Angular
- Utilizar TypeScript strict mode
- Seguir os princípios de Clean Code
- Manter a consistência na nomenclatura

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Suporte

Para suporte, entre em contato com a equipe de desenvolvimento ou abra uma issue no repositório do projeto.

## Licença

Este projeto está sob a licença [INSERIR TIPO DE LICENÇA]. 
