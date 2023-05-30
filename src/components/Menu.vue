<template>
<nav class="navbar navbar-dark bg-dark">
    <div class="container">
        <a href="#"><span class="navbar-brand">Tablón de mensajes</span></a>
        <button class="btn btn-success pl-4 pr-4" 
         :class="{'btn-success': !showForm.isTrusted, 'btn-danger': showForm.isTrusted}"
         @click="OpenCloseForm">Crear mensaje</button>
    </div>
</nav>
</template>

<script>
export default {
    props:{
        showForm: Object,
        OpenCloseForm: Function,
    },
}
</script>

<style>

</style>