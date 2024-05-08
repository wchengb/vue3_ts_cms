/// <reference types="vite/client" />

// declare module '*.vue' {
//   import { DefineComponent } from 'vue'
//   const component: DefineComponent
//   export default component
// }

declare module '*.mjs'

declare module '@wangeditor/editor-for-vue' {
  import Editor from 'node_modules/@wangeditor/editor-for-vue/dist/src/components/Editor.vue';
  import Toolbar from 'node_modules/@wangeditor/editor-for-vue/dist/src/components/Toolbar.vue';
  export { Editor, Toolbar };

}
