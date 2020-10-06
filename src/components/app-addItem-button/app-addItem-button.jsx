import React from 'react';
import './app-addItem-button.css'
import {useDispatch} from "react-redux";
import {modalAddItemOpen} from '../../redux/actions/modal'

const AppAddItemButton = () =>{
        const dispatch = useDispatch();

        const openAddItemModal = React.useCallback(() => {
                dispatch(modalAddItemOpen())
        }, [])

        /*const {onPopupCreateItemToggle, createPopup} = this.props;*/
        return(
            <button className="app__add-button" type="button" onClick={openAddItemModal} /*onClick={() => onPopupCreateItemToggle(createPopup)}*/>Create</button>
        )
}
export default AppAddItemButton;