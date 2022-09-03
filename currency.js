class Currency {
  constructor(firstCurrency, secondCurrency) {
    this.firstCurrency = firstCurrency;
    this.secondCurrency = secondCurrency;
    this.url = "https://v6.exchangerate-api.com/v6/e43f546732cda98a913bc8e6/latest/";
    this.amount = null;
  }

  get() {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}${this.firstCurrency}`)
        .then(response => response.json())
        .then(data => {
          let value = data.conversion_rates[this.secondCurrency];
          resolve(value * this.amount)
        })
        .catch(err => reject(err))
    })
  }

  changeAmount(amount) {
    this.amount = amount;
  }

  changeFirstCurrency(firstCurrency) {
    this.firstCurrency = firstCurrency;
  }

  changeSecondCurrency(secondCurrency) {
    this.secondCurrency = secondCurrency;
  }
}

// const currency = new Currency();


// currency.get("https://v6.exchangerate-api.com/v6/e43f546732cda98a913bc8e6/latest", "USD")
//   .then(resp => console.log(resp.conversion_rates))
//   .catch(err => console.log(err))

