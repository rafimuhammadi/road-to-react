import TodoListItem from "./TodoListItem";
const TodoList = ({ data, HandleRemove }) => {
  return (
    <ul>
      {data &&
        data.map((t) => {
          return (
            <TodoListItem title={t} HandleRemove={HandleRemove} key={t.id} />
          );
        })}
    </ul>
  );
};
export default TodoList;
