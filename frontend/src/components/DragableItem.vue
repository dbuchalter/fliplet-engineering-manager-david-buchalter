<template>
    <button draggable="true" @dragstart="dragStart">{{ label }}</button>
  </template>
  
  <script>
  export default {
    props: ["label"],
    methods: {
      dragStart(event) {
        event.dataTransfer.setData("text/plain", this.label);
      },
    },
  };
  </script>
  
  <style>
  button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: grab;
  }
  </style>
  