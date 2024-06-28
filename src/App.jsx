import { MainHeader } from './MainHeader';
import ThemeToggle from './ThemeToggle';
import SearchForm from './SearchForm';
import Gallery from './Gallery';

const App = () => {
  return (
    <main>
      <ThemeToggle />
      <MainHeader />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
