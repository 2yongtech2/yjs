<template>
  <!-- <quill-editor theme="snow"></quill-editor> -->
  <div id="editor"></div>
</template>

<script setup>
import { Quill } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import * as Y from 'yjs'
import { QuillBinding } from 'y-quill'
import { WebrtcProvider } from 'y-webrtc'
import QuillCursors from 'quill-cursors'  // 커서 공유 관련 모듈인듯

onMounted(() => {

  Quill.register('modules/cursors', QuillCursors)

  const quill = new Quill('#editor', {
    modules: {
      cursors: true,
      toolbar: [
        // adding some basic Quill content features
        // 새로운 배열안에 값 설정시 여백이 생김 (툴바 기능별로 묶을때 새 []안에 값 할당 - 공식문서 참고)
        [
          { header: [1, 2, 3, 4, 5, 6, false] },
          'bold', 'italic', 'underline',
        ],
        [
          {'list': 'ordered'},
          {'list': 'check'},
          {'list': 'bullet'},
          'code-block'
        ],
        ['image', 'link'],
      ],
      // toolbar: toolbarOptions // 외부에서 옵션 선언하고 가져오기 가능
    },
    placeholder: ' 텍스트를 입력해주세요.',
    theme: 'snow'
  })
  // A Yjs document holds the shared data
  const ydoc = new Y.Doc()

  // Define a shared text type on the document
  const ytext = ydoc.getText('quill')

  const provider = new WebrtcProvider('quill-demo-room', ydoc)

  // Create an editor-binding which
  // "binds" the quill editor to a Y.Text type.
  const binding = new QuillBinding(ytext, quill, provider.awareness)

  // 포커스 잃었을때 이벤트 발생
  addEventListenerBlur(quill)

})

const addEventListenerBlur = (quill) => {
  window.addEventListener('blur', () => {
    quill.blur();
  });
}

// 툴바 옵션
// const toolbarOptions = [
//   ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
//   ['blockquote', 'code-block'],
//   ['link', 'image', 'video', 'formula'],

//   [{ 'header': 1 }, { 'header': 2 }],               // custom button values
//   [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
//   [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
//   [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
//   [{ 'direction': 'rtl' }],                         // text direction

//   [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
//   [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

//   [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
//   [{ 'font': [] }],
//   [{ 'align': [] }],

//   ['clean']                                         // remove formatting button
// ];

</script>

<style lang="scss" scoped></style>