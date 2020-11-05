import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordion from './Accordion';

describe('Accordion component', () => {
  const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      title: 'Section 2',
      content:
        'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!'
    },
    {
      title: 'Section 3',
      content:
        'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?'
    }
  ];
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Accordion />, div);
    ReactDom.unmountComponentAtNode(div);
  });
  it('renders the UI without props', () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('render the UI with props', () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('render the UI with props on click second button', () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper.find('button').at(1).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('render the Ui with props clicking the last one after the second', () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
