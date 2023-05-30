<template>
  <div>
    <Menu :OpenCloseForm="OpenCloseForm" :showForm="showForm" />
    <div class="container">
      <MensajeForm :showForm="formProps" :openCloseForm="OpenCloseForm" />
      <ListaMensajes />
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu";
import MensajeForm from "./components/MensajeForm";
import ListaMensajes from "./components/ListaMensajes";

export default {
  components: {
    Menu,
    MensajeForm,
    ListaMensajes,
  },
  data() {
    return {
      showForm: {
        isTrusted: false,
      },
    };
  },
  methods: {
    OpenCloseForm(value) {
      this.showForm.isTrusted = value;
    },
  },
  computed: {
    formProps() {
      return { ...this.showForm };
    },
  },
};
</script>



<style lang="scss" scoped>
.container{width: 80%;}
</style>
