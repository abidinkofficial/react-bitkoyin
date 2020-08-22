import React from 'react';
import './ListItem.css';

let changeClassName = 'ListItem-change change-gray';

function ListItem(props) {
    if (parseFloat(props.change) > 0) {
        changeClassName = 'ListItem-change change-green';
    } else if (parseFloat(props.change) < 0) {
        changeClassName = 'ListItem-change change-red'
    } else if (parseFloat(props.change) === 0) {
        changeClassName = 'ListItem-change change-gray'
    }

    return(
        <div className='ListItem'>
            <div className='ListItem-rank'>{props.rank}</div>
            <div className='ListItem-name'>{props.name}</div>
            <div className='ListItem-price'>{props.price}</div>
            <div className={changeClassName}>{props.change}</div>
        </div>
    );
}

export default ListItem;