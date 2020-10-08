import React from "react"
import './app-popup-editItem-panel.css'
import {useDispatch, useSelector} from "react-redux";
import {modalEditItemClose} from "../../redux/actions/modal";
import {
    changeEditDescription,
    changeEditTitle,
    changeEditPriority,
    itemEditPanelData,
     itemEdit
} from "../../redux/actions/items";

const AppPopupEditItemPanel = () => {
    const isOpen = useSelector((state) => state.modal.changeTask.show)
    const itemID = useSelector((state) => state.items.editItem.id)

    const title = useSelector((state) => state.items.editItem.title)
    const description = useSelector((state) => state.items.editItem.description)
    const priority = useSelector((state) => state.items.editItem.priority)
    const dispatch = useDispatch();
    /*const title = useSelector((state) => state.items.createItem.title)
    const description = useSelector((state) => state.items.createItem.description)
    const priority = useSelector((state) => state.items.createItem.priority)*/

    /*state = {
        label: "",
        description: "",
        priority: ""
    }


    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        });
    }
    onPriorityChange = (e) => {
        this.setState({
            priority: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.editItemFinish(this.state.label, this.state.description, this.state.priority, this.props.editElem.id);
        e.target.reset();
    }*/
    const closeEditPopupPanel = React.useCallback(() => {
        dispatch(modalEditItemClose())
    }, [])

    React.useEffect(() => {
        dispatch(itemEditPanelData(itemID))
    }, [isOpen])

    const addEditItem = React.useCallback(() => {
        dispatch(itemEdit())
        dispatch(modalEditItemClose())
    }, [])

    const onChangeTitle = React.useCallback((data) => {
        dispatch(changeEditTitle(data))
    }, [])

    const onChangeDescription = React.useCallback((data) => {
        dispatch(changeEditDescription(data))
    }, [])

    const onChangePriority = React.useCallback((data) => {
        dispatch(changeEditPriority(data))
    }, [])

    let className = "app__poupap ";
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
                    <input className='poupap__title-input' type="text" placeholder="title" value={title} onChange={event => onChangeTitle(event.target.value)}></input>
                </div>
                <div className='poupap__description'>
                    <h3 className='title'>Description:</h3>
                    <textarea className='poupap__description-area' type="text" placeholder="description" value={description} onChange={event => onChangeDescription(event.target.value)}></textarea>
                </div>
                <div className='poupap__priority'>
                    <h3 className='title'>Priority</h3>
                    <select className='poupap__priority-select' value={priority} onChange={event => onChangePriority(event.target.value)}>
                        <option value='Hight'>Hight</option>
                        <option value='Normal'>Normal</option>
                        <option value='Low'>Low</option>
                    </select>
                </div>
                <div className="poupap__btn">
                    <button type="button" onClick={closeEditPopupPanel} className="poupap__cancel">Cancel</button>
                    <button type="submit" className="poupap__save" onClick={addEditItem}>Save</button>
                </div>
            </div>
        </form>
    )
}

export default AppPopupEditItemPanel