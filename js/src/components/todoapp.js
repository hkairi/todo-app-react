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
      var _i = this.state.todos.indexOf(t);
        return(
          <p key={_i}>
            <input ref={_i} type='checkbox' />
            {t.texte}
          </p>
        )
      }.bind(this))
    );
  },

  render: function(){
    return(
      <div className='main-app'>
        <h1>todo-app-react.js</h1>
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
