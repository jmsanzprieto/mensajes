<template>
    <div class="mensaje">
        <p class="mensaje__autor">{{ mensaje.autor_mensaje }}</p>
        <p class="mensaje__contenido">{{ mensaje.contenido_mensaje }}</p>
        <button @click="mostrarFormularioRespuesta" class="btn btn-primary btn-sm">Escribir respuesta</button>
        <span>{{ formatDate(mensaje.fecha_mensaje) }}</span>
    </div>

        <div v-if="mostrarRespuesta" class="mensaje__respuesta responder">
      <form ref="form" @submit.prevent="enviarFormularioRespuesta">
        <input type="hidden" v-model="mensaje.id_mensaje" />
        <input class="form-control" placeholder="Tu nombre" v-model="autor_mensaje_respuesta" required>
        <textarea class="form-control" placeholder="Mensaje" rows="3" v-model="contenido_mensaje_respuesta" required></textarea>
        <button class="form-control btn btn-primary" type="submit">Responder</button>
      </form>
    </div>       
        
    <div>
         <div v-if="mensaje.respuestas.length > 0" class="mensaje__respuestas">
            <div v-for="respuesta in mensaje.respuestas" :key="respuesta.id_respuesta" class="respuesta">
                <p class="respuesta__autor">{{ respuesta.autor_mensaje }}</p>
                <p class="respuesta__contenido">{{ respuesta.contenido_mensaje }}</p>
                 <span>{{ formatDate(respuesta.fecha_mensaje) }}</span>
            </div>
        </div>
    </div>


    
</template>


<script>
import moment from "moment";
import "moment/locale/es"; // importamos los locale en español
import useFormMensajes from "../hook/UseFormMensajes";
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    mensaje: Object,
    openCloseForm: Function,
  },

  setup(props) {
    const mostrarRespuesta = ref(false);
    const store = useStore();
    const id_mensaje = ref(""); 
    const autor_mensaje_respuesta = ref("");
    const contenido_mensaje_respuesta = ref(""); 

    const mostrarFormularioRespuesta = () => {
      mostrarRespuesta.value = !mostrarRespuesta.value;
    };

    const formatDate = (date) => {
      return moment(date).fromNow();
    };

        const enviarFormularioRespuesta = () => {
        const formDataRespuesta = {
           
            autor_mensaje: autor_mensaje_respuesta.value,
            contenido_mensaje: contenido_mensaje_respuesta.value,
            id_respuesta: props.mensaje.id_mensaje // Corregir la propiedad
            };
           console.log(formDataRespuesta);
            // Resto del código...
            store.dispatch("EnviarDatosRespuesta", formDataRespuesta);
            //props.openCloseForm(false);
            resetForm();

            };

            const resetForm = () => {
                autor_mensaje_respuesta.value = "";
                contenido_mensaje_respuesta.value = "";
            };

    return {
      formatDate,
      mostrarRespuesta,
      mostrarFormularioRespuesta,
      enviarFormularioRespuesta,
      autor_mensaje_respuesta,
      contenido_mensaje_respuesta,
      id_mensaje, // Añade la propiedad al retorno
    };
  },
};
</script>



<style lang="scss" scoped>
svg{
    width: 20px;
    height: 20px;
    
    &:hover{
        cursor: pointer;
        color: red;
    }
}

.mensaje{
    position: relative;
    border: 1px solid grey;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: azure;

    p {
        margin: 0;
    }
    
    &__autor {
        position: absolute;
        top: -12px;
        left: 10px;
        background-color: orange;
        padding: 0 10px;
        font-weight: bold;

    }

    &__contenido{
        color: grey;
    }

    span{
        position: absolute;
        right: 10px;
        bottom: -9px;
        font-size: 12px;
        font-weight: bold;
        background-color: #fff;
        padding: 0 20px;
        background-color: orange;
    }
}


.responder{
    padding: 10px;

    .form-control{
        margin-bottom: 10px;;
    }
}

.respuesta {
  width: 80%; /* Ancho un 20% más estrecho que el mensaje principal */
    position: relative;
    border: 1px solid grey;
    padding: 20px;
    margin-top: 35px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    background-color: rgb(231, 235, 235);

     &__autor {
        position: absolute;
        top: -12px;
        right: 10px;
        background-color: orange;
        padding: 0 10px;
        font-weight: normal ;

    }

    &__contenido{
        color: grey;
    }

    span{
        position: absolute;
        right: 10px;
        bottom: -9px;
        font-size: 12px;
        font-weight: bold;
        background-color: #fff;
        padding: 0 20px;
        background-color: orange;
    }
}


</style>