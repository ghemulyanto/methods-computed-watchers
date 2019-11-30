<template>
    <v-content>
        <v-card class="mx-auto" max-width="400" tile>
            <p class="display-1 text--primary" align="center">Heroes</p>
            <v-col cols="12">
                <v-text-field
                placeholder="Filter Heroes"
                solo
                v-model="search"
                ></v-text-field>
                <div v-for="(hero, index) in filteredHeroes" :key="index">
                    {{hero.name}}
                </div>
            </v-col>
        </v-card>
        
    </v-content>

</template>
<script>
export default {
    data: () => ({
        search:'',
        heroes: [
            {name: 'Spiderman', type: 'spiderman'},
            {name: 'Thanos', type: 'thanos'},
            {name: 'Iron Man', type: 'iron man'},
            {name: 'Black Widow', type: 'black widow'},
            {name: 'Captain America', type: 'captain america'},
            {name: 'Deadpool', type: 'hulk'},
            {name: 'Hulk', type: 'hulk'},
            {name: 'Thor', type: 'thor'},
            {name: 'Wolverine', type: 'wolverine'},
            {name: 'Magneto', type: 'magneto'},
            {name: 'Rogue', type: 'rogue'},
            {name: 'Silver surfer', type: 'silver surver'},
            {name: 'Cyclops', type: 'cyclops'},
            {name: 'Batman', type: 'batman'},
            {name: 'Superman', type: 'superman'},
            {name: 'Wonder woman', type: 'wonder woman'},
            {name: 'The flash', type: 'the flash'},
            {name: 'Aquaman', type: 'aquaman'},
            {name: 'Cyborg', type: 'cyborg'},
        ]
    }),
    computed: {
        filteredHeroes() {
            return this.heroes.filter(hero => {
                return hero.type.indexOf(this.search.toLowerCase()) > -1
            })
        }
    }
}
</script>


