import TodoListItem from "./TodoListItem";
const TodoList = ({ data }) => {
  return (
    <ul>
      {data &&
        data.map((d) => {
          return <TodoListItem key={d.id} title={d.fields.title} />;
        })}
    </ul>
  );
};

export default TodoList;
