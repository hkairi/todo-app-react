var React = require('react');

var TodoList = React.createClass({

  showTodos: function(){
    var _todos = this.props.todos;
    return(
      _todos.map(function(t){
      var _i = _todos.indexOf(t);
        return(
          <p key={_i} className='todo'>
            <input ref={_i} type='checkbox' />
            {t.texte}
          </p>
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
