import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utils/store/appStore';

function App() {
  return (
    <Provider store={appStore}><div className="flex font-bold overflow-x-hidden">
      <Body />
    </div>
    </Provider>
  );
}

export default App;
