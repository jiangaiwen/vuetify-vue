<template>
    <v-navigation-drawer
        v-model="settingDrawer"
        fixed
        right
        temporary
    >
    2222
    </v-navigation-drawer>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        settingDrawer: {
            get() {
                return this.$store.state.app.settingDrawer
            },
            set(val){
                this.$store.state.app.settingDrawer = val
            }
        }
    }
}
</script>