export const getTypes = (state) => {
    return state.types;
}

export const getItemType = state => type => {
    let data = state.items.filter(item => {
        return item.type == type;
    });

    if (data.length)
        data.unshift({type: type, name: '取消選擇', value: ''})

    return data;
}

export const getMyData = state => {
    return state.my_data;
}