import { defineComponent } from "vue";

export default defineComponent({
  name: "jsx-button",
  setup() {
    return () => <button class={`py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 border-none cursor-pointer `}>111</button>;
  },
});
