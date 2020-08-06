<template>
    <v-list>
        <template v-for="item in menus">
            <v-list-group
                v-if="item.children"
                :prepend-icon="item.icon"
                no-action
                value="true"
            >
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                </template>

                <v-list-item 
                    v-for="(subItem, i) in item.children" 
                    :key="i" 
                    :to="item.path + subItem.path"
                >
                    <v-list-item-content>
                        <v-list-item-title v-text="subItem.text"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-icon>{{ subItem.icon }}</v-icon>
                    </v-list-item-action>
                </v-list-item>
            </v-list-group>
            
            <v-list-item v-else :key="item.text" :to="item.path">
                <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </template>
    </v-list>
</template>
<script>
export default {
    data: () => ({
        menus: [
            { path: '/', icon: 'mdi-view-dashboard', text: 'Dashboard' },
            { path: '/home', icon: 'mdi-home', text: 'Home' },
            { 
                path: '/level', 
                icon: 'mdi-home', 
                text: '二级菜单', 
                children: [
                    { path: '/level1', text: '子菜单一' },
                    { path: '/level2', text: '子菜单二' }
                ]
            },
            { path: '/setting', icon: 'mdi-cog', text: 'Setting' },
            { path: '/about', icon: 'mdi-help-circle', text: 'About' }
        ]
    })
}
</script>