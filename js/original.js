let input = document.querySelector("input");
function calc(num) {
  input.value += num;
}
function equal() {
  try {
    input.value = eval(input.value);
  } catch (err) {
    input.value = "error";
  }
}
function remove() {
  input.value = input.value.slice(0, -1);
}
function cleer() {
  input.value = " ";
}
