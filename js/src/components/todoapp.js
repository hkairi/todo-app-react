var React = require('react');

var TodoApp = React.createClass({
  onClick: function(){
    var _todo =  this.refs.todo.getDOMNode().value;
    console.log("ok", _todo);
  },

  render: function(){
    return(
      <div className='main-app'>
        <h1> ici l'application quoi</h1>
        <input ref='todo' type="text" placeholder="something to do ?" />
        <button onClick={this.onClick}>Ok</button>
      </div>
    );
  }
});

module.exports = TodoApp;
