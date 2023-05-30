<template>
  <div class="container mensaje_form" :class="{ open: showForm.isTrusted }">
    <form ref="form" @submit.prevent="enviarFormulario">
      <input class="form-control" placeholder="Tu nombre" v-model="autor_mensaje" required>
      <textarea class="form-control" placeholder="Mensaje" rows="3" v-model="contenido_mensaje" required></textarea>
      <button class="form-control btn btn-primary" type="submit">Enviar mensaje</button>
    </form>
  </div>
</template>

<script>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import useFormMensajes from "../hook/UseFormMensajes";

export default {
  props: {
    showForm: Object,
    openCloseForm: Function,
  },

  setup(props) {
    const store = useStore();
    const autor_mensaje = ref("");
    const contenido_mensaje = ref("");

    const enviarFormulario = () => {
      const formData = {
        autor_mensaje: autor_mensaje.value,
        contenido_mensaje: contenido_mensaje.value,
      };

      store.dispatch("EnviarDatos", formData);
      props.openCloseForm(false);
      resetForm();
    };

    const resetForm = () => {
      autor_mensaje.value = "";
      contenido_mensaje.value = "";
    };

    return {
      autor_mensaje,
      contenido_mensaje,
      enviarFormulario,
    };
  },
};
</script>

<style lang="scss" scoped>
.mensaje_form {
  margin-top: 25px;
  height: 0;
  overflow: hidden;

  &.open {
    height: auto;
  }

  form {
    margin-bottom: 50px;

    input {
      margin-bottom: 10px;
    }

    button {
      width: 100%;
    }

    textarea {
      margin-bottom: 20px;
    }
  }
}
</style>
