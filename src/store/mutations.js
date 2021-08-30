import Vue from 'vue';

export const setMyData = (state, {type, data}) => {
    if (state.my_data[type] == undefined) {
        Vue.set(state.my_data, type, '');
    }
    state.my_data[type] = data;
}