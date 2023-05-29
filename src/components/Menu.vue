<template>
<nav class="navbar navbar-dark bg-dark">
    <div class="container">
        <span class="navbar-brand">Tablón de mensajes</span>
        <button class="btn btn-success pl-4 pr-4" 
         :class="{'btn-success': !showForm, 'btn-danger': showForm}"
         @click="OpenCloseForm">Crear mensaje</button>
    </div>
</nav>
</template>

<script>
export default {
    props:{
        showForm: Boolean,
        OpenCloseForm: Function,
    },
}
</script>

<style>

</style>