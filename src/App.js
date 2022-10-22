import logo from "./logo.svg";
import "./App.css";
const todoList = [
  {
    id: 1,
    title: "My First Assignment in CODE THE Dream.",
  },
  {
    id: 2,
    title: "I will be try to complete Assigment.",
  },
  {
    id: 3,
    title: "Finally I am completed my assignment.",
  },
  {
    id: 4,
    title: "LOVE YOU ALL CODE THE DREAM.",
  },
];
function App() {
  return (
    <>
      <h1>My First Assigment on CODE THE DREAM</h1>
      {/** Render the items */}
      <ul>
        {todoList.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </>
  );
}
export default App;
