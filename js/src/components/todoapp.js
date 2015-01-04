var React = require('react');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos : []
    };
  },

  onClick: function(){
    var _todo = this.refs.todo.getDOMNode();
    var _todos= this.state.todos;
    _todos.push({ texte: _todo.value, done: false });

    _todo.value = '';

    this.setState({
      todos: _todos
    });
  },

  showTodos: function(){
    return(
      this.state.todos.map(function(t){
        return <p key={this.state.todos.indexOf(t)}>{t.texte}</p>
      }.bind(this))
    );
  },

  render: function(){
    return(
      <div className='main-app'>
        <h1> ici l'application quoi</h1>
        <input ref='todo' type="text" placeholder="something to do ?" />
        <button onClick={this.onClick}>Ok</button>
        <hr />
        todos : {this.state.todos.length}
        <hr />
        {this.showTodos()}
      </div>
    );
  }
});

module.exports = TodoApp;
