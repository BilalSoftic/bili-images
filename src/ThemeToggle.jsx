import { FaSun, FaMoon } from 'react-icons/fa';
import { useAppContext } from './Context';
function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useAppContext();
  return (
    <section className='toggle-container'>
      <button className='dark-toggle' type='button' onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <FaSun className='toggle-icon' />
        ) : (
          <FaMoon className='toggle-icon' />
        )}
      </button>
    </section>
  );
}
export default ThemeToggle;
