<template>
    <v-navigation-drawer
        v-model="settingDrawer"
        fixed
        right
        temporary
    >
        <div class="v-drawer-body">
            <div class="setting-drawer-item">
                <h3 class="setting-drawer-title">整体风格设置</h3>
                <div class="theme-color">
                    <div class="theme-color-block" style="background: #000;"></div>
                    <div class="theme-color-block" style="background: #fff;"></div>
                </div>
            </div>
            <div class="setting-drawer-item">
                <h3 class="setting-drawer-title">主题色</h3>
                <div class="theme-color">
                    <div class="theme-color-block" style="background: #000;" @click="setTheme(true)"></div>
                    <div class="theme-color-block" style="background: #fff;" @click="setTheme(false)"></div>
                </div>
            </div>
        </div>
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
    },
    methods: {
        setTheme(flag){
            this.$vuetify.theme.dark = flag
        }
    }
}
</script>
<style lang="scss" scoped>
.v-drawer-body{
    position: relative;
    font-size: 14px;
    padding:20px;
    .setting-drawer-item{
        margin-bottom: 24px;
        .setting-drawer-title{
            margin-bottom: 12px;
            color: rgba(255,255,255,.85);
            font-size: 14px;
            line-height: 22px;
        }
        .theme-color{
            margin-top: 24px;
            overflow: hidden;
            .theme-color-block{
                float: left;
                width: 20px;
                height: 20px;
                margin-right: 8px;
                color: #fff;
                font-weight: 700;
                text-align: center;
                border-radius: 2px;
                cursor: pointer;
            }
        }
    }
}
</style>