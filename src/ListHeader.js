import React from 'react';
import './ListHeader.css';

function ListHeader() {
    return(
        <div className='ListHeader'>
            <div className='ListHeader-rank'>#</div>
            <div className='ListHeader-name'>adı</div>
            <div className='ListHeader-price'>fiyat</div>
            <div className='ListHeader-change'>değişim</div>
        </div>
    );
}

export default ListHeader;