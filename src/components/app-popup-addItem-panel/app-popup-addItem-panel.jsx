import React  from "react"
import './app-popup-addItem-panel.css'
import {useDispatch, useSelector} from "react-redux";
import {modalAddItemClose} from "../../redux/actions/modal";
import {addItem, changeDescription, changePriority, resetAddItemForm} from "../../redux/actions/items";
import {changeTitle} from "../../redux/actions/items";

const AppPopupAddItemPanel  = () =>  {
    const isOpen = useSelector((state) =>  state.modal.createTask.show)
    const dispatch = useDispatch();
    const title = useSelector((state) => state.items.createItem.title)
    const description = useSelector((state) => state.items.createItem.description)
    const priority = useSelector((state) => state.items.createItem.priority)

    const closeAddItemModal = React.useCallback(() => {
        dispatch(modalAddItemClose())
        dispatch(resetAddItemForm())
    }, [])

    const addItemToList = React.useCallback(() => {
        dispatch(addItem())
        dispatch(resetAddItemForm())
        dispatch(modalAddItemClose())
    }, [])

     const onChangeTitle = React.useCallback((data) => {
         dispatch(changeTitle(data))
     }, [])

    const onChangeDescription = React.useCallback((data) => {
        dispatch(changeDescription(data))
    }, [])

    const onChangePriority = React.useCallback((data) => {
        dispatch(changePriority(data))
    }, [])

     let className = "app__poupap";
     if (!isOpen) {
         className += " none"
     }

     const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form action="#" className={className} onSubmit={onSubmit}>
            <div className="poupap__box">
                <div className='poupap__title'>
                    <h3 className='title'>Title:</h3>
                    <input className='poupap__title-input' type="text" placeholder="Title" onChange={event => onChangeTitle(event.target.value)} value={title} ></input>
                </div>
                <div className='poupap__description'>
                    <h3 className='title'>Description:</h3>
                    <textarea className='poupap__description-area' type="text" placeholder="Description" onChange={event => onChangeDescription(event.target.value) } value={description}></textarea>
                </div>
                <div className='poupap__priority'>
                    <h3 className='title'>Priority</h3>
                    <select className='poupap__priority-select'  onChange={event => onChangePriority(event.target.value)} value={priority} >
                        <option value='Hight'>Hight</option>
                        <option value='Normal'>Normal</option>
                        <option value='Low'>Low</option>
                    </select>
                </div>

                <div className="poupap__btn">
                    <button type="button" className="poupap__cancel" onClick={closeAddItemModal}>Cancel</button>
                    <button type="submit" className="poupap__save" onClick={addItemToList} >Save</button>
                </div>

            </div>
        </form>
    )
}

export default AppPopupAddItemPanel;