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

// HSL to hex
const textHex = document.getElementById("textHex");

const bgHex = document.getElementById("bgHex");
function hslToHex(h, s, l) {
  // Ensure h is between 0 and 360, s and l are between 0 and 100
  h = Math.max(0, Math.min(360, h));
  s = Math.max(0, Math.min(100, s));
  l = Math.max(0, Math.min(100, l));

  // Convert h, s, and l to their decimal counterparts
  const hue = h / 360;
  const saturation = s / 100;
  const lightness = l / 100;

  // Calculate the RGB values
  let r, g, b;

  if (saturation === 0) {
    r = g = b = lightness;
  } else {
    const hueToRgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q =
      lightness < 0.5
        ? lightness * (1 + saturation)
        : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;

    r = hueToRgb(p, q, hue + 1 / 3);
    g = hueToRgb(p, q, hue);
    b = hueToRgb(p, q, hue - 1 / 3);
  }

  // Convert RGB to HEX
  const toHex = (x) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const hexR = toHex(r);
  const hexG = toHex(g);
  const hexB = toHex(b);

  return `#${hexR}${hexG}${hexB}`;
}

// Color Ranges
const container = document.getElementById("container");

{
  const hueInput = document.getElementById("hueColor");
  const saturationInput = document.getElementById("saturationColor");
  const lightInput = document.getElementById("lightColor");

  const updateColor = () => {
    const hue = hueInput.value;
    const saturation = saturationInput.value;
    const lightness = lightInput.value;
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    // hsl to hex
    textHex.textContent = hslToHex(hue, saturation, lightness);
    // whole body text color change
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

    bgHex.textContent = hslToHex(hue, saturation, lightness);
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

// Copy text Hex Code

const textHexCopy = document.getElementById("textCopy");

textHexCopy.addEventListener("click", () => {
  const text = textHex.innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(`Text copied to clipboard! ${text}`);
    })
    .catch((err) => {
      console.error("Unable to copy text: ", err);
    });
});

// Copy Background Hex Code

const bgHexCopy = document.getElementById("bgCopy");

bgHexCopy.addEventListener("click", () => {
  const text = bgHex.innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(`Text copied to clipboard! ${text}`);
    })
    .catch((err) => {
      console.error("Unable to copy text: ", err);
    });
});
