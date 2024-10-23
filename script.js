var currencies1 = document.getElementById("currencies1");
var currencies2 = document.getElementById("currencies2");
var inputIs = document.querySelector("input");

var value1;
var value2;
var final = 1;

for (let value in countryCurrencies) {
  currencies1.innerHTML += `<option value="${value}">${countryCurrencies[value]}</option>`;
  if (value == "IN") {
  } else {
    currencies2.innerHTML += `<option value="${value}">${countryCurrencies[value]}</option>`;
  }
}

currencies1.addEventListener("change", function () {
  for (code in countryCurrencies) {
    if (code == currencies1.value) {
      currencies1.innerHTML += `<option value="${code}" selected>${countryCurrencies[code]}</option>`;
      // console.log(currencies1.value);
      let imgTag = currencies1.parentElement.querySelector("img");
      imgTag.src = `https://flagsapi.com/${currencies1.value}/shiny/64.png`;
      calculate1();
    }
  }
});

function calculate1() {
  for (country in exchangeRates) {
    if (country == code) {
      final = exchangeRates[country];
      value1 = document.querySelector(".paragrapg1");
      value1.innerHTML = `${document.querySelector("input").value} ${
        countryCurrencies[country]
      }`;
    }
  }
}

currencies2.addEventListener("change", function () {
  for (code in countryCurrencies) {
    if (code == currencies2.value) {
      let imgTag = currencies2.parentElement.querySelector("img");
      imgTag.src = `https://flagsapi.com/${currencies2.value}/shiny/64.png`;
      calculate2();
      calculate1();
    }
  }
});

function calculate2() {
for (country in exchangeRates) {
  if (country == code) {
    value2 = document.querySelector(".paragrapg2");
    if (document.querySelector("input").value == "") {
      value2.innerHTML = `${exchangeRates[country]} ${countryCurrencies[country]}`;
    } else {
      let result =
        (exchangeRates[country] / final) *
        document.querySelector("input").value;
      console.log(result);
      value2.innerHTML = `${result} ${countryCurrencies[country]}`;
    }
  }
}
}