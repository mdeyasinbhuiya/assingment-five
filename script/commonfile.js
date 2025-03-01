function stringConvertIntById(id) {
  const value = document.getElementById(id).innerText;
  const convertValue = parseInt(value);
  return convertValue;
}

const now = new Date();
let time = now.toLocaleString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});
