<template>
  <div class="container mensaje_form" :class="{open: showForm}" >
    <form ref="form" @submit.prevent="enviarFormulario" >
        <input class="form-control" placeholder="Tu nombre" v-model="autor_mensaje" required>
        <textarea class="form-control" placeholder="Mensaje" rows="3" v-model="contenido_mensaje" required></textarea>
        <button class="form-control btn btn-primary" type="submit">Enviar mensaje</button>
    </form>
  </div>
</template>

<script>
import {onMounted, computed, ref} from "vue";
// Importamos lo necesario para poder manejar el store
import {useStore} from "vuex";


export default {
    
    props: {
        showForm: Boolean,
        },

    setup(props) {
        const store = useStore();
        // Recogemos los datos del formulario       
        const autor_mensaje = ref("");
        const contenido_mensaje = ref("");
 
        // Preparamos la funcion para enviar el contenido
        const enviarFormulario = () => {
            const formData = {
                autor_mensaje: autor_mensaje.value,
                contenido_mensaje: contenido_mensaje.value,
            };

        // Luego, llamas al action "EnviarDatos" pasando el formData
        store.dispatch("EnviarDatos", formData)

         }

        return{
            autor_mensaje,
            contenido_mensaje,
            enviarFormulario,

        } 
    }
    
   
}
</script>

<style lang="scss" scoped>

.mensaje_form{
    margin-top:25px;
    height: 0;
    overflow: hidden;
    
    &.open{ // CONTINUAMOS CON LA CLASE ANTERIOR
        height: auto;
    }
    form{
        margin-bottom: 50px;

        input{
            margin-bottom: 10px;
        }

        button{
            width: 100%
        }
        
        textarea{
            margin-bottom: 20px;
        }
    }
    }

</style>