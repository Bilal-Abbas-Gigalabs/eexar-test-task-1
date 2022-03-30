<template>
  <div class="wrap-input100 validate-input">
    <span class="label-input100">{{ label }}</span>
    <input
      class="input100"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateInput"
    />
    <span class="focus-input100"></span>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["name", "type", "placeholder", "modelValue", "label"],
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style>
</style>
