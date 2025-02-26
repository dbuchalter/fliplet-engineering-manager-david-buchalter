<template>
  <div>
    <h3>Drag & Drop Components</h3>

    <!-- Component Library -->
    <div class="library">
      <button draggable="true" @dragstart="dragStart($event, 'Text')">Text</button>
      <button draggable="true" @dragstart="dragStart($event, 'Button')">Button</button>
    </div>

    <!-- Drop Zone / Preview Area -->
    <div class="preview" @drop="drop" @dragover.prevent @dragenter="dragEnter" @dragleave="dragLeave">
      <p v-if="items.length === 0" class="placeholder">Drop components here</p>
      <div v-for="(item, index) in items" :key="index" class="dropped-item">
        <p>{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      isDraggingOver: false, // For visual feedback
    };
  },
  methods: {
    dragStart(event, type) {
      event.dataTransfer.setData("text/plain", type);
    },
    drop(event) {
      event.preventDefault();
      const type = event.dataTransfer.getData("text/plain");
      if (type) {
        this.items.push(type);
      }
      this.isDraggingOver = false;
    },
    dragEnter() {
      this.isDraggingOver = true;
    },
    dragLeave() {
      this.isDraggingOver = false;
    }
  }
};
</script>

<style scoped>
.library {
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
}
button {
  cursor: grab;
  padding: 8px 12px;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
}
.preview {
  min-height: 100px;
  border: 2px dashed #000;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}
.preview.drag-over {
  background-color: #e0f7fa;
}
.placeholder {
  color: #aaa;
}
.dropped-item {
  background: #eef;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
}
</style>
