import React, {useState} from 'react'

export default function Content() {

    function convert(amount, rate) {
        let convertedVal= amount * rate;
        return convertedVal
    }

    const [currency, setCurrency] = useState('EUR');
    const [amountOutput, setAmountOutput] = useState('');
    const [amount, setAmount] = useState(0);

    function onSelectChange(event) {
        setCurrency(event.target.value)
    }

    function onInputChange(event) {
        setAmount(event.target.value)
    }

    function sendRequestAndGetData() {
        if (!amount) {
            setAmountOutput (`Podaj kwotę do przeliczenia.`);
            return;
        }

        fetch(`http://api.nbp.pl/api/exchangerates/rates/C/${currency}/today/`).then(response => response.json())
        .then( function(response) {
            let rateExchange = response.rates[0].ask;
            let sum = convert(amount, rateExchange);
            setAmountOutput (`Po przeliczniu na PLN to ${sum.toFixed(2)} zł.`)
        })
        .catch(error => {
            console.log("error: ", error);
        });
    }

    return (
        <div className="content container">
            <input className="amount-input" type="number" name="amount" value={amount} onChange={onInputChange} />
            <select className="currency-select" name="currency" onChange={onSelectChange}>  
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="CHF">CHF</option>
            </select>
            <button className="convertBtn" onClick={sendRequestAndGetData}>Przelicz</button>
            <p className="amount-output">{amountOutput}</p>
        </div>
    )
}
