const modalAddItemOpen = () => {
    return{
        type: 'MODAL_ADD_ITEM_OPEN'
    }
}

const modalAddItemClose = () => {
    return{
        type: 'MODAL_ADD_ITEM_CLOSE'
    }
}

const modalEditItemOpen = (id) => {
    return{
        type: 'MODAL_EDIT_ITEM_OPEN',
        payload: id
    }
}

const modalEditItemClose = () => {
    return{
        type: 'MODAL_EDIT_ITEM_CLOSE'
    }
}

export {
    modalAddItemOpen,
    modalAddItemClose,
    modalEditItemOpen,
    modalEditItemClose

}