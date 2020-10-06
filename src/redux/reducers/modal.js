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
        default:
            return state
    }
}

export default modal;