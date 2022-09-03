const amount = document.querySelector("#amount");
const first = document.querySelector("#first");
const second = document.querySelector("#second");

const currency = new Currency("USD", "TRY");
const ui = new UI(first, second);

eventListeners();

function eventListeners() {

  first.addEventListener("change", () => {
    let firstCurrencyValue = first.options[first.selectedIndex].textContent;
    currency.changeFirstCurrency(firstCurrencyValue);
    ui.changeFirstOutput()
  })

  second.addEventListener("change", () => {
    let secondCurrencyValue = second.options[second.selectedIndex].textContent;
    currency.changeSecondCurrency(secondCurrencyValue);
    ui.changeSecondOutput()
  })

  amount.addEventListener("input", (e) => {
    currencyAmountValue = Number(e.target.value);
    currency.changeAmount(currencyAmountValue);

    currency.get()
      .then(resp => ui.changeResult(resp))
      .catch(err => console.log(err))
  })

}


