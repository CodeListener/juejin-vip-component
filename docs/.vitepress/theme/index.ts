/// <reference path="../../shims-vue.d.ts" />

import theme from "vitepress/dist/client/theme-default";
import YangGuangUI from "../../../src/entry";

// 主题样式
import "vitepress-theme-demoblock/theme/styles/index.css";
// 插件的组件，主要是demo组件
import Demo from "vitepress-theme-demoblock/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue";

export default {
  ...theme,
  enhanceApp({ app }) {
    app.use(YangGuangUI);
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
  },
};
