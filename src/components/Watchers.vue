<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-sheet elevation="12" class="pa-12">
                    <v-text-field type="number" v-model.number="counter"></v-text-field>
                    <p>{{ message }}</p>
                </v-sheet>
            </v-col>
           
        </v-row>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        message:'',
        counter: 0
        
    }),
    
    watch: {
        counter() {
             this.message = 'Counter has change'
        }
    }
}
</script>

