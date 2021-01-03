import React, { useState } from 'react';
import Accordian from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content:'React is a front-end javascript framework '
    },
    {
        title: 'why use react?',
        content:'react is a favorite JS library among engineers'
    },
    {
        title: 'How do u use React?',
        content:'You use React by creating components'
    }
];

const options = [
    {
        label:'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value:'green'
    },
    {
        label:'A shade of Blue',
        value:'blue'
    }
];

const App = () =>{
    const [selected,setSelected] = useState(options[0]);
    return (
        <div>
            <Header/>
            <Route path="/">
                <Accordian items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
        </div>
    );
};

export default App;
