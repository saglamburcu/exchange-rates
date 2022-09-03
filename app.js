const amount = document.querySelector("#amount");
const first = document.querySelector("#first");
const second = document.querySelector("#second");

const currency = new Currency("USD", "TRY");

eventListeners();
let firstCurrencyValue;

function eventListeners() {

  first.addEventListener("change", () => {
    firstCurrencyValue = first.options[first.selectedIndex].textContent;

    currency.changeFirstCurrency(firstCurrencyValue)
  })

  second.addEventListener("change", () => {
    let secondCurrencyValue = second.options[second.selectedIndex].textContent;
    currency.changeSecondCurrency(secondCurrencyValue);
  })

  amount.addEventListener("input", (e) => {
    currencyAmountValue = Number(e.target.value);
    currency.changeAmount(currencyAmountValue);

    currency.get()
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
  })

}


