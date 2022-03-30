<template>

    <div class="wrap-input100 input100-select">
        <span class="label-input100">{{ name }}</span>
        <div>
            <datepicker
              v-model="shippingDate"
              :lowerLimit="lowerLimit"
              :value="modelValue"
            />
        </div>
        <span class="focus-input100"></span>
    </div>

                
</template>

<script>
import Datepicker from 'vue3-datepicker';

export default {
  name: 'Daterangepicker',
  components: { Datepicker },
  data() {
    return {
      shippingDate: null,
      lowerLimit: new Date()
    }
  },
  props: ["name", "modelValue"],
  watch: {
    shippingDate: function(value){
      this.$emit("update:modelValue", value);
    }
  }
}
</script>
<style scoped>
    .v3dp__popout{
        width: 100% !important;
    }
</style>