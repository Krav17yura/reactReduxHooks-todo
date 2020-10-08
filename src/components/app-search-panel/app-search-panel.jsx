import React from "react";

import './app-search-panel.css';
import {useDispatch,useSelector} from "react-redux";
import {searchItem} from "../../redux/actions/items";

const AppSearchPanel = () => {
    const searchValue = useSelector((state) => state.items.sort.search);
    const dispatch = useDispatch();
    const setSearch = React.useCallback((value) => {
        dispatch(searchItem(value))
    }, [])

    return(
        <input className="app__search" type="text" placeholder="search by title" value={searchValue} onChange={event => setSearch(event.target.value)}  />
    )
}
export default AppSearchPanel;