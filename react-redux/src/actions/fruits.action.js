const actions = {
    add: fruit => ({
        type: 'ADD_FRUIT',
        payload: fruit
    }),
    remove: fruit => ({
        type: 'REMOVE_FRUIT',
        payload: fruit
    })
}

export { actions };

