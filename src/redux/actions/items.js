const addItem = () => {
    return{
        type: 'ADD_ITEM'
    }
}

const itemDone = (id) => {
    return{
        type: 'ITEM_DONE',
        payload: id
    }
}

const removeItem = (id) => {
    return{
        type: 'REMOVE_ITEM',
        payload: id

    }
}

const changeTitle = (title) => {
    return{
        type: 'CHANGE_ITEM',
        payload: title
    }
}
const resetAddItemForm = () => {
    return{
        type: 'RESET_ADD_ITEM_FORM'
    }
}
const changeDescription = (description) => {
    return{
        type: 'CHANGE_DESCRIPTION',
        payload: description
    }
}
const changePriority = (priority) => {
    return{
        type: 'CHANGE_PRIORITY',
        payload: priority
    }
}


export {
    addItem,
    changeTitle,
    changeDescription,
    changePriority,
    resetAddItemForm,
    itemDone,
    removeItem
}