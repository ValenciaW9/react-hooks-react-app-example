
import { format } from "date-fns";
import {ExampleComponent} from "/Users/valenciadianewalker/Downloads/react-hooks-react-app-example-master/src/component"s/ExampleComponent.js"/>

// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <h1>{format(newDate(), "MMMM do yyyy, h:mm:ss a")}</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent />
    </div>
  );
}

export default App;