import React from 'react';
import './app-sort-priority.css'
import {useDispatch} from "react-redux";
import {sortPriority} from "../../redux/actions/items";
const AppSortPriority = () => {
        const dispatch = useDispatch();

        const setPriority = React.useCallback((value) => {
                dispatch(sortPriority(value))
        }, [])

        return (
            <select className="app__sort-priority"   onChange={(event => setPriority(event.target.value))} >
                <option value="all" >all</option>
                <option value='Hight'>hight</option>
                <option value='Normal'>normal</option>
                <option value='Low'>low</option>
            </select>
        )
}
export default AppSortPriority