import JsxButton from "./components/JsxButton";
import SfcButton from "./components/button/index.vue";
import { App } from "vue";

export { JsxButton, SfcButton };

export default {
  install(app: App): void {
    app.component(JsxButton.name, JsxButton);
    app.component(SfcButton.name, SfcButton);
  },
};
