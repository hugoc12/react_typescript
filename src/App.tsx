import ContextProfileProvider from "./contexts/contextProfile";
import PageProfile from "./pages/Profile";

function App() {
  return (
    <>
      <ContextProfileProvider><PageProfile/></ContextProfileProvider> 
    </>
  );
}

export default App;