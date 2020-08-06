<template>
    <v-app-bar color="dark" dark :clipped-left="$vuetify.breakpoint.lgAndUp" app>
        <v-app-bar-nav-icon @click.stop="toggleMenuDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon @click.stop="toggleSettingDrawer">
            <v-icon>mdi-apps</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-btn icon large>
            <v-avatar size="32px" item>
                <v-img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify"></v-img>
            </v-avatar>
        </v-btn>

    </v-app-bar>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            menuDrawer: state => state.app.menuDrawer,
            settingDrawer: state => state.app.settingDrawer
        })
    },

    methods: {
        toggleMenuDrawer() {
            if(this.menuDrawer){
                this.$store.dispatch('app/toggleMenuDrawer', false)
            }else{
                this.$store.dispatch('app/toggleMenuDrawer', true)
            }
        },
        toggleSettingDrawer(){
            if(this.settingDrawer){
                this.$store.dispatch('app/toggleSettingDrawer', false)
            }else{
                this.$store.dispatch('app/toggleSettingDrawer', true)
            }
        }
    }
}
</script>