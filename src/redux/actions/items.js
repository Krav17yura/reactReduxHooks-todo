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
const itemEdit = () => {
    return{
        type: 'ITEM_EDIT',
    }
}
const editItemId = (id) => {
    return{
        type: 'EDIT_ITEM_ID',
        payload:id

    }
}
const itemEditPanelData = (id) => {
    return{
        type: "ITEM_EDIT_PANEL_DATA",
        payload: id
    }
}
const removeItem = (id) => {
    return{
        type: 'REMOVE_ITEM',
        payload: id

    }
}

const sortPriority = (value) => {
    return{
        type: 'SORT_PRIORITY',
        payload: value
    }
}
const sortStatus = (value) => {
    return{
        type: 'SORT_STATUS',
        payload: value
    }
}

const searchItem = (value) => {
    return{
        type: "SEARCH_ITEM",
        payload: value
    }
}
const changeTitle = (title) => {
    return{
        type: 'CHANGE_TITLE',
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
const changeEditTitle = (title) => {
    return{
        type: 'CHANGE_EDIT_TITLE',
        payload: title
    }
}
const changeEditDescription = (description) => {
    return{
        type: 'CHANGE_EDIT_DESCRIPTION',
        payload: description
    }
}
const changeEditPriority = (priority) => {
    return{
        type: 'CHANGE_EDIT_PRIORITY',
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
    removeItem,
    itemEditPanelData,
    changeEditTitle,
    changeEditDescription,
    changeEditPriority,
    itemEdit,
    editItemId,
    sortPriority,
    sortStatus,
    searchItem
}