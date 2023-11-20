# Web Component Amazing Loading

![NPM License](https://img.shields.io/npm/l/web-component-amazing-loading)

**Lightweight** loading animation  **< 5k** 😎 <br>
Compatible with React, Vue, Angular & other frameworks.

## Usage

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
</template
