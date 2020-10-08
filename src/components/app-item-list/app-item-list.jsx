import React from 'react';
import './app-item-list.css';
import AppItem from '../app-item'
import {useSelector} from "react-redux";

const AppItemList = () => {
    const items = useSelector((state) => state.items.itemsList.cart)
    const filterPriority = useSelector((state) => state.items.sort.filterPriority);
    const statusPriority = useSelector((state) => state.items.sort.filterStatus);
    const searchValue = useSelector((state) => state.items.sort.search);

    const elements = items.map((item) => {
        const {id, priority, done, title, description} = item
        console.log(done)
        console.log(statusPriority)
        const {...itemProps} = item
        if ((( statusPriority === done || statusPriority === 'all')&& (filterPriority === priority || filterPriority === 'all')) && (title.toLowerCase().includes(searchValue.toLowerCase()) ||description.toLowerCase().includes(searchValue.toLowerCase()) || searchValue === '')) {
            return (
                <li key={id}>
                    <AppItem itemProps={itemProps}/>
                </li>
            );
        }
    });

    return (
        <ul>
            {elements}
        </ul>
    );
}

export default AppItemList;