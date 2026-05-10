import MovieList from "./cine/MovieList";
import Header from "./Header";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div>
    <Header></Header>
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-14">
        <Sidebar></Sidebar>
        <MovieList></MovieList>
        </div>
        </main>
    
    </div>
  );
};

export default App;