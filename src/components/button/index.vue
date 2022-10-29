<template></template>

<script lang="tsx">
import { defineComponent, PropType } from "vue";

export type IColor = "black" | "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink";
export type IIcon = "search" | "edit" | "check" | "message" | "delete";
export default defineComponent({
  props: {
    color: {
      type: String as PropType<IColor>,
      default: "blue", // 设定默认颜色
    },
    icon: {
      type: String as PropType<IIcon>,
    },
  },
  name: "yg-button",
  setup(props, { slots }) {
    return () => (
      <button
        class={`
          py-2 
          px-4 
          font-semibold 
          rounded-lg 
          shadow-md 
          text-white 
          bg-${props.color}-500 
          hover:bg-${props.color}-700 
          border-none 
          cursor-pointer 
          m-1
          `}
      >
        {props.icon ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ""}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
</script>
