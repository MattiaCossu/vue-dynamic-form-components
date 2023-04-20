# Vue3 Dynamic Form Components

This project is a Vue3 application with TypeScript that provides components for creating forms dynamically. The main goal is to simplify the creation and management of forms in Vue3 applications.

## Features

- Components for selections, text inputs, checkboxes, and radio option groups
- Dynamic configuration of form components
- Form submission with Axios

## Using the Components

```Vue
<template>
  <div>
    <form @submit.prevent="sendForm">
      <BaseSelect
        v-model="event.category"
        label="Select a category"
        :options="categories"
      />
      <!-- Other form components -->
    </form>
  </div>
</template>
```

Make sure to import and register the required components in the corresponding TypeScript file:
```vue
<script setup lang="ts">
import { ref } from 'vue';
import BaseSelect from '@/components/BaseSelect.vue';

export default {
  components: {
    BaseSelect,
  },
  // ...
};
</script>
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
# vue-dynamic-form-components
