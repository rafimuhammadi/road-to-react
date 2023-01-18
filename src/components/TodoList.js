import TodoListItem from "./TodoListItem";
const TodoList = ({ data, HandleRemove }) => {
  return (
    <ul>
      {data &&
        data.map((d) => {
          return (
            <TodoListItem
              key={d.id}
              data={d}
              id={d.id}
              HandleRemove={HandleRemove}
            />
          );
        })}
    </ul>
  );
};

export default TodoList;
