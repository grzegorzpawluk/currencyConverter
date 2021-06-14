import { useState, useEffect } from 'react';
import CurrencyInput from './CurrencyInput';

export default function CurrencyConverter(props) {
  const BASE_CURRENCY_URL = props.BASE_CURRENCY_URL;

  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let fromAmount, toAmount;

  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch(BASE_CURRENCY_URL)
      .then((res) => res.json())
      .then((data) => {
        const plnCurrency = Object.keys(data.rates)[117];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(plnCurrency);
        setToCurrency(data.base);
        setExchangeRate(data.rates[plnCurrency]);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(
        `https://free.currconv.com/api/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=5cebdc7d204e872a7b27`
      )
        .then((res) => res.json())
        .then((data) => setExchangeRate(data[`${fromCurrency}_${toCurrency}`]))
        .catch((error) => console.log(error));
    }
  }, [fromCurrency, toCurrency]);

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };

  return (
    <>
      <h1>Currency Converter</h1>
      <CurrencyInput
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      =
      <CurrencyInput
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </>
  );
}
