import { ref } from "vue";

export default function useFormMensajes() {
    const showForm = ref(false);

    const OpenCloseForm = () => {
        showForm.value = !showForm.value; // Damos el valor contrario al que existe en showForm


    };


    return{
        showForm, 
        OpenCloseForm,
    }
}