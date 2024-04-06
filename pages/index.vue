<template>
<!-- <quill-editor theme="snow"></quill-editor> -->
<div id="editor"></div>
</template>

<script setup>
import { QuillEditor, Quill } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import * as Y from 'yjs'
import { QuillBinding } from 'y-quill'

onMounted(() => {
  const quill = new Quill('#editor', {
    theme: 'snow'
  })
  console.log(Quill)
  // A Yjs document holds the shared data
  const ydoc = new Y.Doc()
  // Define a shared text type on the document
  const ytext = ydoc.getText('quill')

  // Create an editor-binding which
  // "binds" the quill editor to a Y.Text type.
  const binding = new QuillBinding(ytext, quill)
})

</script>

<style lang = "scss" scoped>
// @import "~/assets/scss/variables";

</style>