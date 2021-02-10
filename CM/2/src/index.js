import "./styles.css";

(function () {
  let step = 1;
  let count = 0;

  function increment() {
    count = count + step;
    return count;
  }

  function decrement() {
    count = count - step;
    return count;
  }

  window.Incrementer = {
    inc: increment,
    dec: decrement
  };
})();

(function (incr) {
  const count = document.querySelector("#count");

  document.querySelector("#inc").addEventListener("click", () => {
    count.innerHTML = incr.inc();
  });

  document.querySelector("#dec").addEventListener("click", () => {
    count.innerHTML = incr.dec();
  });
})(window.Incrementer);

