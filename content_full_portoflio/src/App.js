import './App.css';
import Main from "./Main";
import {ContentProvider} from "./Contentcontext";

function App() {
  return (
      <ContentProvider>
        <Main />
      </ContentProvider>


  );
}

export default App;
