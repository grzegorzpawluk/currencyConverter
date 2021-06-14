import './App.css';
import CurrencyConverter from './components/CurrencyConverter';

const API_ACCESS_KEY = 'dd8b9c2acf0a67c4256acdd01dfd21ad';
// const API_ACCESS_KEY = '';
const BASE_CURRENCY_URL = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_ACCESS_KEY}`;

function App() {
  return <CurrencyConverter BASE_CURRENCY_URL={BASE_CURRENCY_URL} />;
}

export default App;
