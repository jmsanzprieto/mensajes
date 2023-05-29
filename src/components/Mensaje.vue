<template>
    <div class="mensaje">
        <p class="mensaje__autor">{{mensaje.autor_mensaje}}</p>
        <p class="mensaje__contenido">{{mensaje.contenido_mensaje}}</p>
        <span>{{formatDate(mensaje.fecha_mensaje)}}</span>
    </div>
</template>

<script>
import moment from "moment";
import "moment/locale/es"; // importamos los locale en español

export default {

    props: {
        mensaje: Object,
    },

    setup(props){
        const formatDate = (date) => {
         return moment(date).fromNow()
        }

    return {
        formatDate,
    }
    
    },

   

}
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
    margin-bottom: 20px;
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

</style>