import React  from 'react';
import './app-sort-status.css';
import {useDispatch} from "react-redux";
import {sortStatus} from "../../redux/actions/items";

 const AppSortStatus  = () =>  {
     const dispatch = useDispatch();
     const setStatus = React.useCallback((value) => {
         dispatch(sortStatus(value))
     }, [])

        return(
            <select  className="app__sort-status"  onChange={(event => setStatus(event.target.value))}>
                <option value="all" >all</option>
                <option value="active">active</option>
                <option value='done'>done</option>
            </select>
        )
}

export default AppSortStatus;