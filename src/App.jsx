import MovieList from "./cine/MovieList";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div>
    <Header></Header>
    <main>
      <div classNameName="container grid lg:grid-cols-[218px_1fr] gap-14">
        <Sidebar></Sidebar>
        <MovieList></MovieList>
        </div>
        </main>
      <Footer></Footer>
    
    </div>
  );
};

export default App;