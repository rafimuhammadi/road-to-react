import TodoListItem from "./TodoListItem";
const TodoList = ({ data, HandleRemove }) => {
  return (
    <ul>{data && <TodoListItem title={data} HandleRemove={HandleRemove} />}</ul>
  );
};
export default TodoList;
