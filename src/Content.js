import React from 'react';
import './Content.css';

import './ListHeader';
import ListHeader from './ListHeader';
import ListItem from './ListItem';

function Content() {
    return(
        <div className='Content'>
            <ListHeader />

            <ListItem rank='1' name='Bitcoin' price='$5555' change='3.15%'/>
            <ListItem rank='2' name='Another coin' price='$5.153' change='15.05%'/>
            <ListItem rank='3' name='Yet another coin' price='$55.8' change='-0.05%'/>
            <ListItem rank='4' name='Yerli ve milli coin' price='$8' change='0%'/>
        </div>
    );
}

export default Content;