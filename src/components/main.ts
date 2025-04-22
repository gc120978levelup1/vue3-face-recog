import type { App } from 'vue';
import Vue3FaceRecog from "@/components";
export default {
  install: (app: App) => {
    app.component('Vue3FaceRecog', Vue3FaceRecog);
  }
};
export {Vue3FaceRecog} ;