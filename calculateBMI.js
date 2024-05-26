const form = document.querySelector("form");
const result = document.querySelector(".result");
const result2 = document.querySelector(".result2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  // console.log(height);
  // console.log(weight);

  // validation process
  if (height == "" || height < 0 || isNaN(height)) {
    result.innerHTML = `<span>Result: Please enter a valid Height ${height}</span>`;
    //  result.classList.add("red");
  } else if (weight == "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `<span>Result: Please enter a valid Weight ${weight}</span>`;
  } else {
    const CalBMI = ((weight / (height * height)) * 10000).toFixed(2);
    result.innerHTML = `<span>Result: ${CalBMI}</span>`;
    if (CalBMI < 18.6) {
      result2.innerHTML = `<span>Result: Your weight is under the normal range 😕😕 </span>`;
    }
    if (CalBMI >= 18.6 && CalBMI <= 24.9) {
      result2.innerHTML = `<span>Result: Your weight is in normal range 🤩😍</span>`;
    }
    if (CalBMI > 24.9) {
      result2.innerHTML = `<span>Result: Your weight is above the normal range 😶😶</span>`;
    }
  }
});
