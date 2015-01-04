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
      var _i = _todos.indexOf(t);
        return(
          <Todo ref={_i} key={_i} index={_todos.indexOf(t)} texte={t.texte} onclick={this.todoOnClick}/>
        )
      }.bind(this))
    );
  },

  render: function(){
    return(
      <div>
      <hr />
      todos : {this.props.todos.length}
      <hr />
      {this.showTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
