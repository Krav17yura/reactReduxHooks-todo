import {initialState} from './initialState'

const items = (state = initialState.item, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const newItem = {
                id: state.itemsList.cart.length + 1,
                title: state.createItem.title,
                description: state.createItem.description,
                priority: state.createItem.priority,
                done: false,
            }
            return {
                ...state,
                ...state.item,
                itemsList: {
                    ...state.itemsList,
                    cart: [newItem, ...state.itemsList.cart]
                },

            }
        case 'ITEM_EDIT_PANEL_DATA':
            const indexEditItemData = state.itemsList.cart.findIndex((el) => el.id === action.payload);
            const oldEditItemData = state.itemsList.cart[indexEditItemData];
            return {
                ...state,
                ...state.item,
                editItem: {
                    ...state.editItem,
                    title: oldEditItemData.title,
                    description: oldEditItemData.description,
                    priority: oldEditItemData.priority,

                },

            }
        case 'ITEM_EDIT':
            const indexEdit = state.itemsList.cart.findIndex((el) => el.id === state.editItem.id);
            const oldItemEdit = state.itemsList.cart[indexEdit];
            const newItemEdit = {
                ...oldItemEdit,
                title: state.editItem.title,
                description: state.editItem.description,
                priority: state.editItem.priority
            };
            const newEditArr = [
                ...state.itemsList.cart.slice(0, indexEdit),
                newItemEdit,
                ...state.itemsList.cart.slice(indexEdit + 1),
            ]
            return {
                ...state,
                ...state.item,
                itemsList: {
                    ...state.itemsList,
                    cart: newEditArr
                },
            }
        case 'ITEM_DONE':
            const index = state.itemsList.cart.findIndex((el) => el.id === action.payload);
            const oldItem = state.itemsList.cart[index];
            const newItemDone = {...oldItem, done: true};
            const newArr = [
                ...state.itemsList.cart.slice(0, index),
                ...state.itemsList.cart.slice(index + 1),
                newItemDone]
            return {
                ...state,
                ...state.item,
                itemsList: {
                    ...state.itemsList,
                    cart: newArr
                },
            }
        case 'REMOVE_ITEM':
            const indexRemove = state.itemsList.cart.findIndex((el) => el.id === action.payload);
            const arrRemove = [
                ...state.itemsList.cart.slice(0, indexRemove),
                ...state.itemsList.cart.slice(indexRemove + 1)
            ];
            return {
                ...state,
                ...state.item,
                itemsList: {
                    ...state.itemsList,
                    cart: arrRemove
                },
            }
        case 'SEARCH_ITEM':
            return {
                ...state,
                ...state.item,
                sort: {
                    ...state.sort,
                    search: action.payload
                }
            }
        case 'SORT_PRIORITY':
            return {
                ...state,
                ...state.item,
                sort: {
                    ...state.sort,
                    filterPriority: action.payload
                }
            }
        case 'SORT_STATUS':
            const t = true
            const f = false
            const statusCompill = () => {
                switch (action.payload){
                    case "active":
                        return f
                    case "done":
                        return t
                    default:
                        return action.payload
                }
            }
            return {
                ...state,
                ...state.item,
                sort: {
                    ...state.sort,
                    filterStatus: statusCompill()
                }
            }
        case 'EDIT_ITEM_ID':
            return {
                ...state,
                ...state.item,
                editItem: {
                    ...state.editItem,
                    id: action.payload
                }
            }
        case 'RESET_ADD_ITEM_FORM':
            return {
                ...state,
                ...state.item,
                createItem: {
                    ...state.createItem,
                    title: "",
                    description: "",
                    priority: 'height'
                }
            }
        case 'CHANGE_DESCRIPTION':
            return {
                ...state,
                ...state.item,
                createItem: {
                    ...state.createItem,
                    description: action.payload
                }
            }
        case 'CHANGE_PRIORITY':

            return {
                ...state,
                ...state.item,
                createItem: {
                    ...state.createItem,
                    priority: action.payload
                }
            }
        case 'CHANGE_TITLE':
            return {
                ...state,
                ...state.item,
                createItem: {
                    ...state.createItem,
                    title: action.payload
                }
            }
        case 'CHANGE_EDIT_DESCRIPTION':
            return {
                ...state,
                ...state.item,
                editItem: {
                    ...state.editItem,
                    description: action.payload
                }
            }
        case 'CHANGE_EDIT_PRIORITY':
            return {
                ...state,
                ...state.item,
                editItem: {
                    ...state.editItem,
                    priority: action.payload
                }
            }
        case 'CHANGE_EDIT_TITLE':
            return {
                ...state,
                ...state.item,
                editItem: {
                    ...state.editItem,
                    title: action.payload
                }
            }

        default:
            return state
    }
}

export default items;