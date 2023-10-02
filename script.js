const Cinzel = "Cinzel, serif";
const DMSans = "DM Sans , sans-serif";
const Lora = "Lora , serif";
const Montserrat = "Montserrat ,sans-serif";
const Poppins = "Poppins , sans-serif";
const Rubik = "Rubik ,sans-serif";

const fontFamily = (document.getElementById("container").style.fontFamily =
  Rubik);

const selectedOption = document.getElementById("select");

selectedOption.addEventListener("change", () => {
  const selectedFont = selectedOption.options[selectedOption.selectedIndex];

  // font change

  document.getElementById("container").style.fontFamily = selectedFont.value;
  document.getElementById("font").innerHTML = selectedFont.text;
});

// Font Range

const currentRange = document.getElementById("font-range");

const range = document.getElementById("selected-range");

const text = document.getElementsByClassName("text");

currentRange.addEventListener("input", () => {
  const selectedValue = currentRange.value;
  range.textContent = `${selectedValue}px`;

  document.getElementById("font").style.fontSize = selectedValue;
});

// Color Ranges
const colorRange = document.getElementById("colorRange");
const colorBox = document.getElementById("colorBox");

colorRange.addEventListener("input", () => {
 
  const value = colorRange.value;
  console.log( value )
  colorBox.style.color = `rgb(${value}, 0, 0)`;
});
