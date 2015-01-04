var React    = require('react');
var Todo     = require('./todo');

var TodoList = React.createClass({

  todoOnClick: function(item){
    this.props.onTodoClick(item);
  },

  showTodos: function(){
    var _todos = this.props.todos;
    return(
      _todos.map(function(t){
      var _index = _todos.indexOf(t);
        return(
          <Todo ref    = {_index}
                key    = {_index}
                index  = {_todos.indexOf(t)}
                texte  = {t.texte}
                onclick= {this.todoOnClick} />
        )
      }.bind(this))
    );
  },

  render: function(){
    return(
      <div className='todolist'>
        <div className='header'>
          todos : {this.props.todos.length}
        </div>
        <div className='todos'>
          {this.showTodos()}
        </div>
      </div>
    )
  }
});

module.exports = TodoList;
