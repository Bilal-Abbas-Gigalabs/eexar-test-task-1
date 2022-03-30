<template>
  <div class="container-contact100">
    <div class="wrap-contact100">
      <div class="contact100-form validate-form">
        <span class="contact100-form-title"> Add New Product </span>
        <Input
          :type="'text'"
          :name="'product_name'"
          :label="'Product Name'"
          :placeholder="'Enter your name'"
          :value="name"
          v-model="name"
        />
        <span class="error-message name-error" v-if="v$.name && v$.name.$error">
          {{ v$.name.$errors[0].$message }}
        </span>
        <Input
          :type="'text'"
          :name="'reference'"
          :label="'Reference'"
          :placeholder="'Enter your reference'"
          v-model="reference"
        />
        <span class="error-message ref-error" v-if="v$.reference && v$.reference.$error">
          {{ v$.reference.$errors[0].$message }}
        </span>
        <Input
          :type="'number'"
          :name="'price'"
          :label="'Price DAT (optional)'"
          :placeholder="'Enter price'"
          v-model="price"
        />
        <span class="error-message price-error" v-if="v$.price && v$.price.$error">
          {{ v$.price.$errors[0].$message }}
        </span>
        <Daterangepicker
          :name="'Shipping Date (optional)'"
          v-model="shippingDate"
        />
        <div class="container-contact100-form-btn">
          <div class="wrap-contact100-form-btn">
            <div class="contact100-form-bgbtn"></div>
            <button class="contact100-form-btn" @click="onSubmit">
              <span>
                Create
                <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="wrap-contact100-form-btn">
            <div class="contact100-form-bgbtn clear-btn"></div>
            <button class="contact100-form-btn clear-button" @click="onClear">
              <span>
                Clear
                <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../components/Input.vue";
import Daterangepicker from "../components/Daterangepicker.vue";
import useValidate from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";


const minNameLength = (value) => {
  return (
    value.split("").filter(function (str) {
      return /\S/.test(str);
    }).length >= 3
  );
};

const alphaCheck = (value) => {
  return value.match(/^[A-Za-z0-9_-]+$/);
};

const checkNumber = (value) => {
  return value > 0 || value == null || value == "";
};

export default {
  name: "Product",
  components: { Input, Daterangepicker },

  data() {
    return {
      v$: useValidate(),
      name: null,
      reference: null,
      price: null,
      shippingDate: null,
    }
  },

  validations() {
    return {
      name: {
        required: helpers.withMessage("Name can't be blank", required),
        minNameLength: helpers.withMessage("Name is too short", minNameLength),
      },
      reference: {
        alphaCheck: helpers.withMessage(
          "Reference should have words, numbers, - or _",
          alphaCheck
        ),
        required: helpers.withMessage("Reference can't be blank", required),
        minLength: minLength(3),
      },
      price: {
        checkNumber: helpers.withMessage(
          "Number can be less than 0",
          checkNumber
        ),
      },
    };
  },

  methods: {

    onClear(){
      this.name = this.reference = this.price = this.shippingDate = null;
      this.v$.$reset();
    },

    onSubmit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$toast.success(`Product created successfully`);
      } else {
        console.log("Unsuccessful");
      }
    },
  },
};
</script>

<style scoped>
.error-message {
  color: #cc0000;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.clear-btn{
  background: linear-gradient(to right,#00dbde,red,#00dbde,#fc00ff) !important;
}

.wrap-contact100-form-btn{
  width: 40%;
  margin: 8px;
}
</style>
