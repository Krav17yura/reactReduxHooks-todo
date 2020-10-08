import {initialState} from './initialState'

const modal = (state = initialState.modal, action) => {
    switch (action.type){
        case 'MODAL_ADD_ITEM_OPEN':{
            return{
                ...state,
                    ...state.modal,
                    createTask:{
                        ...state.createTask,
                        show: true
                    }
            }
        }
        case 'MODAL_ADD_ITEM_CLOSE':{
            return{
                ...state,
                    ...state.modal,
                    createTask:{
                        ...state.createTask,
                        show: false
                    }
            }
        }
        case 'MODAL_EDIT_ITEM_OPEN':{

            return{
                ...state,
                ...state.modal,
                changeTask:{
                    ...state.changeTask,
                    show: true,

                }
            }
        }
        case 'MODAL_EDIT_ITEM_CLOSE':{
            return{
                ...state,
                ...state.modal,
                changeTask:{
                    ...state.changeTask,
                    show: false
                }
            }
        }
        default:
            return state
    }
}

export default modal;