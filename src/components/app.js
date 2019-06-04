import React from 'react';
import Enternote from './Enternote';
import Board from './board';
import Detail from './Detail';


class Title extends React.Component {
  render () {
    return (
      <div class="ui container center aligned">
        <br />
        <h1 class="ui yellow header">Post It</h1>
      </div>
    )
  }
}

const App = () => {
  return (
    <div>
      <Title/>
      <br/>
      <Enternote/>
      <br/>
      <Board/><Detail/>
    </div>
  );
}



export default App;
