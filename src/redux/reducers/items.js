import {initialState} from './initialState'

const items = (state = initialState.item, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const newItem = {
                id: state.itemsList.cart.length+1,
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
        case 'ITEM_DONE':
            const index = state.itemsList.cart.findIndex((el) => el.id === action.payload);
            console.log(index)
            const oldItem = state.itemsList.cart[index];
            const newItemDone = { ...oldItem, done: true };
            console.log(newItemDone)
            const newArr = [
                ...state.itemsList.cart.slice(0, index),
                ...state.itemsList.cart.slice(index + 1),
                newItemDone]
            return{
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
            return{
                ...state,
                ...state.item,
                itemsList: {
                    ...state.itemsList,
                    cart: arrRemove
                },
            }


        case 'RESET_ADD_ITEM_FORM':
            return{
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

            return{
                ...state,
                    ...state.item,
                    createItem:{
                        ...state.createItem,
                        description: action.payload
                    }

            }
        case 'CHANGE_PRIORITY':

            return{
                ...state,
                ...state.item,
                createItem:{
                    ...state.createItem,
                    priority: action.payload
                }

            }
        case 'CHANGE_ITEM':
            return{
                ...state,
                ...state.item,
                createItem:{
                    ...state.createItem,
                    title: action.payload
                }

            }

        default:
            return state
    }
}

export default items;