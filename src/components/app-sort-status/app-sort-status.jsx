import React  from 'react';
import './app-sort-status.css';

 const AppSortStatus  = () =>  {

    /*onStatusChange = (e) => {
        let filter = e.target.value;
        this.props.onStatusFilterChange(filter);
    }*/
        return(
            <select  className="app__sort-status"  /*onChange={this.onStatusChange}*/ >
                <option value="all" >all</option>
                <option value='active'>active</option>
                <option value='done'>done</option>
            </select>
        )
}

export default AppSortStatus;