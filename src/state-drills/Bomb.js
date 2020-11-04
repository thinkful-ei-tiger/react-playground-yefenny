import React from 'react';

class Bomb extends React.Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <p>
          {this.state.count < 8
            ? this.state.count % 2 === 0
              ? 'tick'
              : 'tock'
            : 'Boom'}
          {this.state.count >= 8 && clearInterval(this.interval)}
        </p>
      </div>
    );
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Bomb;
