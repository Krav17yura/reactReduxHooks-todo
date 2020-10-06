import React from 'react';
import './app-sort-priority.css'
const AppSortPriority = () => {

 /*   onPriorityChange = (e) => {
        this.props.onFilterPriorityChange(e.target.value)
    }*/

        return (
            <select className="app__sort-priority"   /*onChange={this.onPriorityChange}*/ >
                <option value="all" >all</option>
                <option value='hight'>hight</option>
                <option value='normal'>normal</option>
                <option value='low'>low</option>
            </select>
        )
}
export default AppSortPriority