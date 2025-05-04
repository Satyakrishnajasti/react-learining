import "./App.css";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Food from "./Food.tsx";
import Card from "./Card.tsx";
import Button from "./Button/Button.tsx";
import Student from "./student.tsx";
import UserGreeting from "./UserGreeting.tsx";
import List from "./List.tsx";
import ButtonClick from "./Buttin.tsx";
import MyComponent from "./MyComponent.tsx";
import Counter from "./Counter.tsx";
import ColorPicker from "./ColorPicker.tsx";
import ListCars from "./Cars.tsx";
import TodoList from "./Todolist.tsx";
import API from "./Api.tsx";
import ComponentA from "./ComponentA.tsx";
import Ref from "./Ref.tsx";
import Routing from "./Routing.tsx";
import Reducer from "./Reducer.tsx";
import UserReducer from "./UserReducer.tsx";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 95 },
    { id: 3, name: "banana", calories: 95 },
    { id: 4, name: "coconut", calories: 95 },
    { id: 5, name: "pineapple", calories: 95 },
  ];

  return (
    <>
      <UserReducer />
      <Reducer />
      {/* <Routing /> */}
      {/* <Ref /> */}
      {/* <ComponentA /> */}
      {/* <API /> */}
      {/* <ListCars /> */}
      {/* <ColorPicker />
      <Counter /> */}
      {/* <MyComponent /> */}
      {/* <br />
      <ButtonClick />
      <List items={fruits} />
      <Student name={"Welcome React"} age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <UserGreeting isLoggedIn={false} userName={"User"}></UserGreeting>
      <Student />
      <Footer />
      <Card />
      <Card />
      <br />
      <Button />
      <Header />
      <Food /> */}
    </>
  );
}

export default App;
