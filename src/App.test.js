import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without children without crashing', () => {
 const wrapper = shallow(<App />);

 const title = <h1>Nasa Images</h1>  
 expect(wrapper.contains(title)).toEqual(true);
});

it('renders and matches the previous snapshot', () => {
const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
