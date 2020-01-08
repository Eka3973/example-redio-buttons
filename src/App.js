import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
    state = {
        radioButtons: [
            {id: 1, name: 'Yes', selected: true},
            {id: 2, name: 'No', selected: false},
            {id: 3, name: 'I don\'t know', selected: false}
        ],
    };

    handleChange = ({target}) => {
        const {radioButtons} = this.state;
        const nexState = radioButtons.map(option => {
            const checked = option.name === target.value;
            return {
                ...option,
                selected: checked
            }
        });
        this.setState({radioButtons: nexState})
    };

    render() {
        const {radioButtons} = this.state;
        return (
            <div className='wrapper'>
                <h4>An example of multiple radio buttons</h4>
                <ul>
                    {radioButtons.map(item => {
                            return (
                                <li key={item.id} className='item'>
                                    <input type="radio"
                                           value={item.name}
                                           checked={!!item.selected}
                                           onChange={this.handleChange}/>
                                    {item.name}
                                </li>
                            )
                        }
                    )}
                </ul>
            </div>
        );
    }
}
