import React  from "react"
import './app-popup-editItem-panel.css'

const AppPopupEditItemPanel = () =>  {



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





        /*const { editPoupap, onPoupapEditItemToggle, editElem } = this.props;
        let className = "app__poupap ";
        if (editPoupap) {
            className += " none"
        }*/


        return (
            <form action="#" className="app__poupap none" >
                <div className="poupap__box">
                    <div className='poupap__title'>
                        <h3 className='title'>Title:</h3>
                        <input className='poupap__title-input' type="text" placeholder="title" ></input>
                    </div>
                    <div className='poupap__description'>
                        <h3 className='title'>Description:</h3>
                        <textarea className='poupap__description-area' type="text" placeholder="description"   ></textarea>
                    </div>
                    <div className='poupap__priority'>
                        <h3 className='title'>Priority</h3>
                        <select className='poupap__priority-select'>
                            <option value='Hight'>Hight</option>
                            <option value='Normal'>Normal</option>
                            <option value='Low'>Low</option>
                        </select>
                    </div>
                    <div className="poupap__btn">
                        <button type="button" className="poupap__cancel"  >Cancel</button>
                        <button type="submit" className="poupap__save"  >Save</button>
                    </div>
                </div>
            </form>
        )
}

export default AppPopupEditItemPanel