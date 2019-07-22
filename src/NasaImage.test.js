import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NasaImage from './NasaImage';

 const match = {
     'params' : {
     	 'nasa_id' : 'abba'
     }
  };

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<NasaImage match={match} />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders and matches the previous snapshot', () => {
  const tree = renderer.create(<NasaImage match={match} />).toJSON();
  expect(tree).toMatchSnapshot();
});
