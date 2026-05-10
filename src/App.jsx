import Header from "./Header";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div>
    <Header></Header>
    <main>
      <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar></Sidebar>
        </div>
        </main>
    
    </div>
  );
};

export default App;