<template>
<Menu :OpenCloseForm="OpenCloseForm" :showForm="showForm"/>
<div class="container">
   <MensajeForm :showForm="showForm" />
   <ListaMensajes />
</div>



</template>

<script>
// Importamos el menu superior
import Menu from "./components/Menu";
import MensajeForm from "./components/MensajeForm";
import useFormMensajes from './hook/UseFormMensajes';
import ListaMensajes from './components/ListaMensajes';



export default {
 
  name: 'App',

  components: {
    Menu,
    MensajeForm,
    ListaMensajes,

  },

  setup(){
    return {
      ...useFormMensajes(),
    }
    
  }
}
</script>

<style lang="scss" scoped>
.container{width: 80%;}
</style>
