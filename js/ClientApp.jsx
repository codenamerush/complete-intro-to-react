import React from 'react';
import { render } from 'react-dom';

const MyTitle = function(props) {
  // return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponent = function() {
  // return ce(
  //   'div',
  //   { id: 'my-first-component' },
  //   ce(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
  //   ce(MyTitle, { title: 'Stranger Things', color: 'GreenYellow' }),
  //   ce(MyTitle, { title: 'Rick and Morty', color: 'LimeGreen' }),
  //   ce(MyTitle, { title: 'House of Cards', color: 'peru' })
  // );
  return (
    <div id="my-first-component">
      <MyTitle title="Stranger Things" color="YellowGreen" />
      <MyTitle title="Game of Thrones" color="burlywood" />
      <MyTitle title="Sense8" color="GreenYellow" />
      <MyTitle title="iZombie" color="peru" />
    </div>
  );
};

render(<MyFirstComponent />, document.getElementById('app'));
