var React    = require('react');
var TodoList = require('./todolist');

var TodoApp = React.createClass({

  getInitialState: function(){
    return {
      todos : []
    };
  },

  // adding new todo
  onClick: function(){
    var _todo = this.refs.todo.getDOMNode();
    var _todos= this.state.todos;
    _todos.push({
      texte : _todo.value,
      done  : false
    });

    _todo.value = '';
    this.setState({ todos: _todos });
  },

  // done todos to be removed
  todoClick: function(item){
    var _todos =  this.state.todos;
    var _item  = _todos[item];
    _todos.pop(_item);

    this.setState({ todos: _todos });
  },

  render: function(){
    return(
      <div className='main-app'>
        <h1>todo-app-react.js</h1>
        <input ref         = "todo"
               type        = "text"
               placeholder = "something to do ?" />

        <button onClick={this.onClick}>Ok</button>

        <TodoList todos       = {this.state.todos}
                  onTodoClick = {this.todoClick} />
      </div>
    );
  }
});

module.exports = TodoApp;
