import React, { Component} from 'react';

import './ItemStatusFilter.css';

class ItemStatusFilter extends Component {

  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ];

  render() {
  

    const htmlButtons = this.buttons.map((item)=>{
      const isActive = this.props.filter === item.name;
      const classButton = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button type="button" 
        key={item.name}
        className={`btn ${classButton}`}
        onClick={()=>this.props.onFilterChange(item.name)}
        >
        {item.label}</button>
      )
    })

      return (
       
    <div className="btn-group">
       {htmlButtons}
    </div>
  );
  }
}


export default ItemStatusFilter;
