<template>
    <div
      class="preview"
      @drop="drop"
      @dragover.prevent="dragOver"
      @dragleave="dragLeave"
      :class="{ 'highlight': isDragging }"
    >
      <draggable v-model="modelValue" group="items" item-key="id">
        <template #item="{ element }">
          <p class="drag-item">{{ element }}</p>
        </template>
      </draggable>
      <p v-if="modelValue.length === 0" class="placeholder">Drop components here</p>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import draggable from "vuedraggable";
  
  export default {
    props: ["modelValue"],
    components: { draggable },
    setup(props, { emit }) {
      const isDragging = ref(false);
  
      const drop = (event) => {
        const type = event.dataTransfer.getData("text/plain");
        emit("update:modelValue", [...props.modelValue, type]);
      };
  
      return { isDragging, drop, dragOver: () => (isDragging.value = true), dragLeave: () => (isDragging.value = false) };
    },
  };
  </script>
  
  <style>
  .preview {
    min-height: 100px;
    border: 1px dashed black;
    padding: 10px;
    position: relative;
    transition: background 0.3s ease-in-out;
  }
  .preview.highlight {
    background: #f0f8ff;
  }
  .placeholder {
    color: grey;
    text-align: center;
  }
  .drag-item {
    background: #f8f9fa;
    padding: 5px;
    border-radius: 4px;
  }
  </style>
  