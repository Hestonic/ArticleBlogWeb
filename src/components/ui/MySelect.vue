<template>
  <select v-model="modelValue" @change="changeOption" class="box">
    <option disabled value=""><slot></slot></option>
    <option
        v-for="option in options"
        :key="option.id"
        :value="option.id"
    >
      {{ option.category }}
    </option>
  </select>
</template>

<script>
export default {
  name: "MySelect",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.box {
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
}
</style>