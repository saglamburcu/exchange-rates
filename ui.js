class UI {
  constructor(firstSelect, secondSelect) {
    this.firstSelect = firstSelect;
    this.secondSelect = secondSelect;

    this.outputFirst = document.querySelector("#output-first");
    this.outputSecond = document.querySelector("#output-second");
    this.result = document.querySelector("#result");
  }

  changeFirstOutput() {
    this.outputFirst.innerHTML = this.firstSelect.value;
  }

  changeSecondOutput() {
    this.outputSecond.innerHTML = this.secondSelect.value;
  }

  changeResult(amount) {
    this.result.value = amount;
  }
}