

function TodoList(props) {
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <ul className="TodoList">{props.children}</ul>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
}

export { TodoList };
