<template>
  <v-app>
    <v-app-bar app
      color="indigo"
      dark>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          Methods-Computed-Watchers
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
         text
         v-for="item in menuItems"
         :key="item.title"
         :to="item.path">
         <v-icon left>{{item.icon}}</v-icon>
         {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    }
  },
  computed: {
    menuItems() {
      return [
        {title: 'Methods', path: '/methods', icon: 'mdi-call-made'},
        {title: 'Computed', path: '/computed', icon: 'mdi-calculator'},
        {title: 'Watchers', path: '/watchers', icon: 'mdi-eye'},
      ]
    }
  }
};
</script>