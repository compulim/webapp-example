'use strict';

const { PropTypes } = React;

export default class Summation extends React.Component {
  constructor(props) {
    super(props);

    this.handleValueXChange = this.handleValueXChange.bind(this);
    this.handleValueYChange = this.handleValueYChange.bind(this);
  }

  handleValueXChange(evt) {
    this.props.onXChange(+evt.target.value);
  }

  handleValueYChange(evt) {
    this.props.onYChange(+evt.target.value);

    new Promise().then(err => {
      console.log('ABCDDD');
    }).catch(err => {
    });
  }

  render() {
    return (
      <div>
        <input type="number" onChange={ this.handleValueXChange } value={ this.props.x } />
        <span>&nbsp;&times;&nbsp;</span>
        <input type="number" onChange={ this.handleValueYChange } value={ this.props.y } />
        <span>&nbsp;=&nbsp;</span>
        <input type="number" readOnly value={ this.props.x + this.props.y } />
      </div>
    );
  }
}

Summation.propTypes = {
  onXChange: PropTypes.func,
  onYChange: PropTypes.func,
  x        : PropTypes.number,
  y        : PropTypes.number
}

Summation.defaultProps = {
  onXChange: () => 0,
  onYChange: () => 0,
  x        : 0,
  y        : 0
}
