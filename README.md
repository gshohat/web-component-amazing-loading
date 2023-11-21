# Web Component Amazing Loading

![NPM License](https://img.shields.io/npm/l/web-component-amazing-loading)

**Lightweight** loading animation  **< 10k** 😎 <br>
Compatible with React, Vue, Angular & other frameworks.

![amazing-loading](https://github.com/gshohat/web-component-amazing-loading/assets/91323932/97fb5831-8907-4fca-8722-253f38581685)


## Vue usage

`npm i web-component-amazing-loading`

```
<script setup>
import AmazingLoading from 'web-component-amazing-loading';

let amazingLoadingElement = null;

onMounted(() => {
  amazingLoadingElement = document.querySelector('#amazing-loading');

  const showLoadingButton = document.querySelector('#show-loading-button');
  showLoadingButton.addEventListener('click', showLoading)
});


function showLoading(event) {
  amazingLoadingElement.showLoading();
}
</script>


<template>
<amazing-loading id="amazing-loading"/>
</template>
```

vite config
```
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('amazing-loading')
        }
      }
    })
  ],
```

## Contact
Feel free to ping me 💫
<br>
connect@giladshohat.com

[giladshohat.com](https://giladshohat.com)
