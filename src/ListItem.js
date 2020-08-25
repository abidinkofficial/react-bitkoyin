import React from 'react';
import './ListItem.css';

let changeClassName = 'ListItem-change change-gray';

function ListItem(props) {
    if (parseFloat(props.change) > 0) {
        changeClassName = 'ListItem-change change-green';
    } else if (parseFloat(props.change) < 0) {
        changeClassName = 'ListItem-change change-red'
    } else if (parseFloat(props.change) === 0 || isNaN(parseFloat(props.change))) {
        changeClassName = 'ListItem-change change-gray'
    }

    return(
        <div className='ListItem'>
            <div className='ListItem-rank'><span className='ListItem-mobile'>#</span>{props.rank}</div>
            <div className='ListItem-name'><span className='ListItem-mobile'>adı</span>{props.name}</div>
            <div className='ListItem-price'><span className='ListItem-mobile'>fiyat</span>{props.price}</div>
            <div className='ListItem-change-container'><span className='ListItem-mobile'>değişim</span><span className={changeClassName}>{props.change}</span></div>
        </div>
    );
}

export default ListItem;