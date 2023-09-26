import { Outlet } from 'react-router-dom';
import Header from './Header';
//import Router from './Router';

function App() {
  return (
    <div className="App">
      {/* ver2 */}
      <Header />
      <Outlet />
      {/* ver1 */}
      {/* <Router /> */}
    </div>
  );
}

export default App;
