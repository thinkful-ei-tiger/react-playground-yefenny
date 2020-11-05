import React from 'react';

class Accordion extends React.Component {
  static defaultProps = {
    sections: []
  };
  constructor(props) {
    super(props);
    this.state = {
      section: null
    };
  }
  handleClick = (index) => {
    this.setState({
      section: index
    });
  };
  render() {
    return (
      <ul>
        {this.props.sections.map((section, index) => {
          return (
            <li key={index}>
              <button onClick={() => this.handleClick(index)}>
                {section.title}
              </button>
              {this.state.section === index && <p>{section.content}</p>}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Accordion;
