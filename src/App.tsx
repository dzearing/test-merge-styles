import * as React from 'react';
import './App.css';
import { mergeStyleSets } from '@uifabric/merge-styles';
// import { IStyle } from '@uifabric/merge-styles';

// const logo = require('./logo.svg');

// tslint:disable-next-line:interface-name
interface IFooClassNames {
  root: string;
}

// const boz: IStyle = {
//   background: 'red',
//   // This should red squiggly
//   foo: 1
// };

const getClassNames = (): IFooClassNames => mergeStyleSets(
  {
    root: {
      background: 'black',
      color: 'white',
      height: '100vh',
      overflow: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '72px',
  
      // This should red squiggly
      foo: 1
    }
  }
);

class App extends React.Component {
  render() {
    return (
      <div className={getClassNames().root}>
        <div>Hello!</div>
      </div>      
    );
  }
}

export default App;
