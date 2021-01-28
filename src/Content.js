import React, {useState} from 'react'

export default function Content() {

    // function convert(amount, rate) {
    //     let convertedVal= amount * rate;
    //     return convertedVal
    // }

    const [currency, setCurrency] = useState('')


    function onChange(event) {
        setCurrency(event.target.value)
    }

    console.log(currency);

    // function sendRequestAndGetData() {
    //     fetch(`http://api.nbp.pl/api/exchangerates/rates/C/${currency}/today/`).then(response => response.json())
    //     .then( function(response) {
    //         let rateExchange = response.rates[0].ask;
    //         let sum = convert(amount, rateExchange);
    //         let amountOutput = `Po przeliczniu na PLN to ${sum.toFixed(2)} zł.`;
    //     }).catch(error => {
    //         console.log("error: ", error);
    //     });
    // }

    return (
        <div className="content container">
            <input className="amount-input" type="number" name="amount" ></input>
            <select className="currency-select" name="currency" onChange={onChange}>  
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="CHF">CHF</option>
            </select>
            {/* <button class="convertBtn" onClick={convert}>Przelicz</button> */}
            <p class="amount-output"></p>
        </div>
    )
}
