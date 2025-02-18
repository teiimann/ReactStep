import Counter from "./components/Counter" 
import DataFetcher from "./components/DataFetcher" 
import Form from "./components/Form" 
import Timer from "./components/Timer" 
import UserInfo from "./components/UserInfo" 

function App() {
  return (
    <div>
      <Counter />
      <UserInfo name="Иман" age={3} />
      <Timer />
      <DataFetcher />
      <Form />
    </div>
  );
}


export default App;