<template>
    <div class="container">
         <p v-if="mensajes.length === 0">No hay ningún mensaje.</p>
        <div class="alert alert-success" v-if="successMessage">
            {{ successMessage }}
        </div>
        <template v-for="mensaje in mensajes" :key="mensaje.id_mensaje">
            <Mensaje :mensaje="mensaje"/>
        </template>
    </div>

</template>

<script>
// Importamos lo necesario para poder ejecutar actions, mutations, etc, una vez cargados
// cargamos de vue "computed", para que sea reactivo y se recarguen los datos cuando la página se recargue
import {onMounted, computed, ref} from "vue";
// Importamos lo necesario para poder manejar el store
import {useStore} from "vuex";

// Importamos el componente paa ver el mensaje concreto
import Mensaje from "./Mensaje";


export default {
    computed: {
        successMessage() {
        return this.$store.state.successMessage;
        },
    },
    watch: {
        successMessage(value) {
        if (value) {
            setTimeout(() => {
            this.$store.commit("ClearSuccessMessage");
            this.$store.dispatch("CargarMensajes");// Recargar la lista de países
            }, 3000); // Ocultar el mensaje después de 3 segundos (ajusta el tiempo según tus necesidades)
        }
        },
    },
    // llamamos al componente Mensaje
    components:{
        Mensaje,
    },

    setup(){


        // Llamamos al store
        const store = useStore();
        // Hacemos el store reactivo: cada vez que se recargue la pagina, se recargarán los datos
        const mensajes = computed(() => store.state.mensajes);
        

        // Usamos onmounted para ejecutar cuando se cargue la aplicacion 
        onMounted(() => {
            store.dispatch("CargarMensajes");
        });

        // controlamos el numero de paises que se pueden ver
        // const cambiarMostrarTotal = (e) => {
        //     store.dispatch("CargarPaises",{
        //         total : e.target.value,
        //     })
        // }


        
        //retornamos los datos del store
        return {
            titulo: store.state.titulo_app,
            mensajes,
        }
    }
}
</script>

<style scoped>
.container{
    width: 70%;
}

.cambiar_orden{
    display:flex;
    justify-content: start;
    margin-bottom: 10px;
}

.alert-success{
    margin: 20px;
}

</style>