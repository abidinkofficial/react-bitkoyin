import React from 'react';
import './Content.css';

import './ListHeader';
import ListHeader from './ListHeader';
import ListItem from './ListItem';

function Content(props) {
    let loading = null;
    let listItems = [];

    if (!props.isLoaded) {
        loading = <p>Loading..</p>
    }
    else if (props.isLoaded && !props.searchState) {
        loading = null;

        for (let i = 0; i < props.renderCount; i++) {
            listItems.push(
                <ListItem key={props.data[i].id} rank={props.data[i].rank} name={props.data[i].name} price={'$' + parseFloat(props.data[i].priceUsd).toFixed(5).toString()} change={parseFloat(props.data[i].changePercent24Hr).toFixed(2).toString() + '%'}/>
            );
        }
    }
    else if (props.isLoaded && props.searchState) {
        loading = null;

        if (props.searchData.length > 0) {
            for (let i = 0; i < props.searchData.length; i++) {
                listItems.push(
                    <ListItem key={props.searchData[i].id} rank={props.searchData[i].rank} name={props.searchData[i].name} price={'$' + parseFloat(props.searchData[i].priceUsd).toFixed(5).toString()} change={parseFloat(props.searchData[i].changePercent24Hr).toFixed(2).toString() + '%'}/>
                );
            }
        }
        else {
            listItems.push(<ListItem key='0' rank='-' name='Bulunamadı' price='-' change='-'/>);
        }
    }

    return(
        <div className='Content'>
            <ListHeader />

            {loading}
            {listItems}
        </div>
    );
}

export default Content;