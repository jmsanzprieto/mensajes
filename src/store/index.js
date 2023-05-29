import { createStore } from 'vuex'

export default createStore({

  state: {
    // creamos el primer estado, creando un array de paises vacio y un titulo de la aplicación.
    // los estados se pueden usar desde cualquier parte del código, llamandolo en el componente que necesitemos
    titulo_app: "Tablón de mensajes",
    mensajes: [],
    successMessage: null,
  },
  getters: {
  },
  mutations: {
    // creamos el mutation con los datos para poder trabajarlos
    // Los mutation, actualizan estados
    MostrarMensajes(state,payload){
      state.mensajes = payload;
    },
    SetSuccessMessage(state, message) {
      state.successMessage = message;
    },

    SetErrorMessage(state, message) {
      state.successMessage = message;
    },

    ClearSuccessMessage(state) {
      state.successMessage = null;
    },
  },
  actions: {
    // llamamos a la API con el listado de paises
    async CargarMensajes({commit},params){
      try {
        // llamada a la API
        const response = await fetch("https://josemanuelsanz.es/api_mensajes/index.php");

        // construimos el JSON que se recibe
        const result = await response.json();

        commit("MostrarMensajes",result.data.mensajes.reverse());
      
      
        // if(!params?.total){ // la sintaxis significa: si params.total no existe. !negacion -> ? interrogacion
        //   // llamamos al mutations
        //   commit("MostrarPaises",result.data.paises);

        //   if(params?.orden){
        //     commit("MostrarPaises",result.data.paises.reverse());
        //  }
      //   }else{
      //     const resultTemp = [];
      //     result.data.mensajes.forEach((mensaje,index) => {
      //       if(index < params.total) resultTemp.push(mensaje);
      //     });

      //     commit("MostrarMensajes", resultTemp);
      //  }
      

      } catch (error) {
        // cargamos en consola si hay algun error
        console.log(error)
      }
    },

    // Guardar datos a través de la API
    async EnviarDatos({ commit }, formData) {
      try {
        const response = await fetch("http://josemanuelsanz.es/api_mensajes/index.php", {
          method: "POST",
          body: JSON.stringify(formData),
        });
    
        const result = await response.json();
  
        // Realizar las acciones necesarias con la respuesta de la API
        commit("SetSuccessMessage", "Se ha guardado el mensaje");
 
  
      } catch (error) {
        commit("SetErrorMessage", "Error al guardar el mensaje");
        console.log(error);
      }
    }
  },
  modules: {
  }
})

