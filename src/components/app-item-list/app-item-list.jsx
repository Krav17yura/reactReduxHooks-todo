import React from 'react';
import './app-item-list.css';
import AppItem from '../app-item'
import {useSelector} from "react-redux";

const AppItemList = () => {
   const items = useSelector((state) => state.items.itemsList.cart)
    const elements = items.map((item) => {
        const {id} = item
        const {...itemProps} = item
        return (
            <li key={id}>
                <AppItem itemProps={itemProps} />
            </li>
        );
    });

    return (
        <ul>
             {elements}
        </ul>
    );
}

export default AppItemList;