import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  };
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false
    };
  }
  generateText = () => {
    if (this.state.spinningTheChamber)
      return 'spinning the chamber and pulling the trigger!';
    else if (this.props.bulletInChamber === this.state.chamber)
      return 'BANG!!!!';
    else return `you're safe!`;
  };
  spinTheChamber = () => {
    this.setState({
      spinningTheChamber: true
    });
    this.timeout = setTimeout(() => {
      this.setState({
        chamber: Math.ceil(Math.random() * 8),
        spinningTheChamber: false
      });
    }, 2000);
  };
  render() {
    return (
      <div>
        <p>{this.generateText()}</p>
        <button onClick={this.spinTheChamber}> Pull the trigger</button>
      </div>
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
}

export default RouletteGun;
