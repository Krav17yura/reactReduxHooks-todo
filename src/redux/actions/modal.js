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

export {
    modalAddItemOpen,
    modalAddItemClose

}