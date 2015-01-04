var React = require('react');

var Todo = React.createClass({

  render: function(){
    return(
      <p key={this.props.key} className='todo'>
      <input ref={this.props.ref} type='checkbox' />
      {this.props.texte}
      </p>
    );
  }
});

module.exports = Todo;
