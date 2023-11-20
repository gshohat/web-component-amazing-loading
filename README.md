# Web Component Amazing Loading

![NPM License](https://img.shields.io/npm/l/web-component-amazing-loading)

**Lightweight** loading animation  **< 5k** 😎 <br>
Compatible with React, Vue, Angular & other frameworks.

![amazing-loading](https://private-user-images.githubusercontent.com/91323932/284183101-cb323665-6b7b-4caf-aaa0-e8b05ad45d6c.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDA0NjcxODQsIm5iZiI6MTcwMDQ2Njg4NCwicGF0aCI6Ii85MTMyMzkzMi8yODQxODMxMDEtY2IzMjM2NjUtNmI3Yi00Y2FmLWFhYTAtZThiMDVhZDQ1ZDZjLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTIwVDA3NTQ0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTcxYWEzMzg2MGJkNDlhMzFjMWJiNGFmNTcwMTE2NTBlNDc1NzFjNzc1ZWNiZTk5NmVjZTgzNzQ0MTdkYmIxMDQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.VT9muJXg2sz4lXuF-zo34xL59wsfga2L8abxZm7h4Qg)

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
