<template>
    <div class="flex flex-col justify-center items-center h-screen w-screen">
        <form action="" id="info" @submit.prevent="onSubmit">
            <div class="form-group">
                <label class="text-base font-normal" for="name">Name:</label><br>
                <input v-model="name" class="form-input form-input-name h-6 w-52 p-3 border border-solid border-gray-300 mb-1 mt-1.5 text-base font-normal rounded resize-y box-border" type="text" id="name" name="name" value="" placeholder="Note's name..">
                <p class="form-message text-red-500 text-base font-normal -mt-1 mb-3 pt-1">{{ name_message }}</p>
            </div>
            
            <div class="form-group">
                <label class="text-base font-normal" for="desc">Description:</label><br>
                <input v-model="desc" class="form-input form-input-desc h-6 w-52 p-3 border border-solid border-gray-300 mb-1 mt-1.5 text-base font-normal rounded resize-y box-border" type="text" id="desc" name="desc" value="" placeholder="Note's desc..">
                <p class="form-message text-red-500 text-base font-normal -mt-1 mb-3 pt-1">{{ desc_message }}</p>
            </div>
            
            <div class="flex justify-center items-center">
                <button class="button px-5 py-4 mt-2 bg-green add-button" type="submit">Add</button>
            </div>
        </form>

        <router-link :to="{ name: 'Table', params: {} }">
            <button class="button px-5 py-4 mt-3 bg-blue">Back</button>
        </router-link>
        
    </div>
</template>

<script>
import useAddRow from '@/composables/useAddRow';
// import useValidate from '@/composables/useValidate';
import { ref } from 'vue'

export default {
    setup() {
        const name = ref("")
        const desc = ref("")
        const name_message = ref("")
        const desc_message = ref("")
        const fields = {
            name: name,
            desc: desc,
        }

        const { addRow } = useAddRow('notes')
        // const { validate, isRequired, notNumber, maxLength } = useValidate()

        const onSubmit = () => {
            // const errors = [];
            // errors.push(validate(name.value, [isRequired(), maxLength(250)]));
            // errors.push(validate(desc.value, [isRequired(), maxLength(250)]));

            // const hasErrors = errors.some(error => error); // Check if any errors exist

            // if (hasErrors) {
            //     // Set error messages for display
            //     name_message.value = errors[0] || ""; // Assign first error or empty string
            //     desc_message.value = errors[1] || "";
            //     return;
            // }

            // Submit form or call addRow function with validated data
            addRow(fields);
        };

        return { name, desc, fields, name_message, desc_message, onSubmit }
    }
}
</script>
