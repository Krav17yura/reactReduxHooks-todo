import React from 'react'
import './app-item.css'
import {useDispatch} from "react-redux";
import {editItemId, itemDone, removeItem} from "../../redux/actions/items";
import {modalEditItemOpen} from "../../redux/actions/modal";

const AppItem = (itemsProps) => {
    const [menuItemValue, setMenuItemValue] = React.useState("...");
    const dispatch = useDispatch();
    const {title, description, priority, id, done} = itemsProps.itemProps

    const itemMenu = (value) => {
        setMenuItemValue(value)
    }

    const setItemDone = React.useCallback((i) => {
        dispatch(itemDone(i))
    }, [])

    const setItemRemove = React.useCallback((i) => {
        dispatch(removeItem(i))
    }, [])

    const setEditItemPopup = React.useCallback((i) => {

        dispatch(modalEditItemOpen())
        dispatch(editItemId(i))
    }, [])

    const Menu = () => {
        switch (menuItemValue) {
            case "done":
                return setItemDone(id) || reset();
            case "edit":
                return setEditItemPopup(id) || reset();
            case "delete":
                return setItemRemove(id) || reset();
            default:
                break;
        }
    }

    const reset = () => {
        setMenuItemValue("...")
    }

      let className = "item__box ";
      let selectClass = "item__menu ";
      let doneCheck = "check ";
      (done) ? className  += ' done' : className += "";
      (done) ? selectClass  += ' done' : className += "";
      (done) ? doneCheck  += ' default' : className += "";

    return (
        <div className={className}>
            <span className={doneCheck}></span>
            <h4 className='item__title'>{title}
            </h4>
            <span className='item__description'>{description}</span>
            <div className="item__footer">
                <span className="item__priority">{priority}</span>
                <form action="#">
                    <select className={selectClass}
                            onChange={event => itemMenu(event.target.value)}
                            onClick={Menu}
                            value={menuItemValue}>
                        <option value='...' hidden>...</option>
                        <option value="done">done</option>
                        <option value='edit'>edit</option>
                        <option value='delete'>delete</option>
                    </select>
                </form>
            </div>
        </div>
    )
}

export default AppItem;