<template>
    <v-app id="inspire">
        <nav-header />

        <v-navigation-drawer 
            v-model="menuDrawer" 
            :clipped="$vuetify.breakpoint.lgAndUp"
            app>
            <nav-menu />
        </v-navigation-drawer>

        <v-main>
            <v-container fluid>
                <router-view />
            </v-container>
        </v-main>

        <nav-footer />

        <settings />
    </v-app>
</template>

<script>
import navHeader from 'components/navHeader';
import navMenu from 'components/navMenu';
import navFooter from 'components/navFooter';
import settings from 'components/Settings';
export default {
    name: 'App',

    computed: {
        menuDrawer: {
            get() {
                return this.$store.state.app.menuDrawer
            },
            set(val){
                this.$store.state.app.menuDrawer = val
            }
        }
    },

    components: {
        navHeader,
        navMenu,
        navFooter,
        settings
    },

    created() {
        this.$vuetify.theme.dark = true
    }
};
</script>
