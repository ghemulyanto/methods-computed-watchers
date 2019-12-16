<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-sheet elevation="12" class="pa-12">
          <v-text-field label="Kilometer" v-model="kilometers"></v-text-field>
          <v-text-field label="Meters" v-model="meters"></v-text-field>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    kilometers: 0,
    meters: 0
  }),

  watch: {
    kilometers() {
      this.meters = this.kilometers * 1000;
    },
    meters() {
      this.kilometers = this.meters / 1000;
    }
  }
};
</script>

