import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import Messages from './Messages';

describe('Messages component', () => {
  it('renders wihtout crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Messages />, div);
    ReactDom.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Messages name='Messages' unread={4} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the UI wihtout unread notifications as expected', () => {
    const tree = renderer
      .create(<Messages name='Messages' unread={0} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
