import './styles/main.scss';
import { Provider } from 'react-redux';
import store from './store';
import Division from './pages/Division';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Division />
      </div>
    </Provider>
  );
}

export default App;
