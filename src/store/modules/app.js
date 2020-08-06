const state = {
    menuDrawer: true,
    settingDrawer: false
}

const mutations = {
    TOGGLE_MENu_DRAWER: (state, data) => {
        state.menuDrawer = data
    },
    TOGGLE_SETTING_DRAWER: (state, data) => {
        state.settingDrawer = data
    }
}

const actions = {
    toggleMenuDrawer({ commit }, opened) {
        commit('TOGGLE_MENu_DRAWER', opened)
    },
    toggleSettingDrawer({ commit }, opened) {
        commit('TOGGLE_SETTING_DRAWER', opened)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}