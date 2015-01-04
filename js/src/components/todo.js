var React = require('react');

var Todo = React.createClass({

  onClick: function(){
    this.props.onclick(this.props.index);
  },

  render: function(){
    return(
      <p key={this.props.key} className='todo' onClick={this.onClick}>
      <input ref={this.props.ref} type='checkbox' />
      {this.props.texte}
      </p>
    );
  }
});

module.exports = Todo;
