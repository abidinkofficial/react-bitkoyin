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
    if (props.isLoaded) {
        loading = null;

        for (let i = 0; i < props.renderCount; i++) {
            listItems.push(
                <ListItem key={props.data[i].id} rank={props.data[i].rank} name={props.data[i].name} price={'$' + parseFloat(props.data[i].priceUsd).toFixed(5).toString()} change={parseFloat(props.data[i].changePercent24Hr).toFixed(2).toString() + '%'}/>
            );
        }

        // listItem = <ListItem rank={props.data[0].rank} name={props.data[0].name} price={props.data[0].priceUsd} change={props.data[0].changePercent24Hr}/>
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