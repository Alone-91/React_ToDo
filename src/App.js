import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import Loader from './components/common/loader';
import Root from './containers/Root';

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Root />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
