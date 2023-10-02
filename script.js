const Cinzel = "Cinzel, serif";
const DMSans = "DM Sans , sans-serif";
const Lora = "Lora , serif";
const Montserrat = "Montserrat ,sans-serif";
const Poppins = "Poppins , sans-serif";
const Rubik = "Rubik ,sans-serif";

const fontFamily = (document.getElementById("container").style.fontFamily =
  Poppins);

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
const container = document.getElementById("container");

{
  const hueInput = document.getElementById("hueColor") || 0;
  const saturationInput = document.getElementById("saturationColor") || 0;
  const lightInput = document.getElementById("lightColor") || 0;

  const updateColor = () => {
    const hue = hueInput.value;
    const saturation = saturationInput.value;
    const lightness = lightInput.value;
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    container.style.color = color;
    document.getElementById("hueTextColor").textContent = `Hue ${hue}`;
    document.getElementById(
      "saturationTextColor"
    ).textContent = `saturation ${saturation}`;
    document.getElementById("lightTextColor").textContent = `Hue ${lightness}`;
  };
  hueInput.addEventListener("input", updateColor);
  saturationInput.addEventListener("input", updateColor);
  lightInput.addEventListener("input", updateColor);
}

// Background Color

{
  const hueBg = document.getElementById("hueBg") || 0;
  const saturationBg = document.getElementById("saturationBg") || 0;
  const lightBg = document.getElementById("lightBg") || 0;

  const updateBg = () => {
    const hue = hueBg.value;
    const saturation = saturationBg.value;
    const lightness = lightBg.value;
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    container.style.backgroundColor = color;
    document.getElementById("hueTextBg").textContent = `Hue ${hue}`;
    document.getElementById("lightTextBg").textContent = `Light ${lightness}`;
    document.getElementById(
      "saturationTextBg"
    ).textContent = `Saturation ${saturation}`;
  };

  hueBg.addEventListener("input", updateBg);
  saturationBg.addEventListener("input", updateBg);
  lightBg.addEventListener("input", updateBg);
}
