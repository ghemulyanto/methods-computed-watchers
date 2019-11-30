<template>
    <div>
        <v-text-field v-model="name" :counter="20" :rules="nameRules" label="Your name" required></v-text-field>
        <v-btn @click="clickme">Click me</v-btn>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    data() {
    return {
      message: null,
      name: '',
      nameRules: [
          v => !!v || 'Please type your name',
          v => (v && v.length <=20) || 'Please type your name less than 20 character'
      ]
    }
  },
    methods: {
        clickme() {
            this.message = 'Hello ' + this.name + ' Today is '+ Date() 
        }
    }
}
</script>

