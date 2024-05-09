
# TodoList

Aplicação front-end para cadastrar tarefas a serem realizadas.

A ferramenta permite listar as tarefas cadastradas, marcar as tafefas como concluídas e remover tarefas da lista. A interface conta com totalizdores para mostrar o número total de tarefas cadastradas e de tarefas concluídas.

## Requisitos

#### Requisitos funcionais
- [x] O usuário deve poder cadastrar uma nova tarefa;
- [x] O usuário deve poder visualizar a lista de tarefas cadastradas;
- [x] O usuário deve poder marcar tarefas como concluídas;
- [x] O usuário deve poder remover as tarefas da lista;
- [x] O usuário deve poder visualizar os tatais de tarefas cadastradas e comcluídas;

## Tecnologias
- React.js
- Typescript
- HTML
- CSS

## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/guilherme-lucas-63539a2a8/)


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
