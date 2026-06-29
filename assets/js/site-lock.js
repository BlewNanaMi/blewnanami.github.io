(function () {
  var PASSWORD = "refrigerator";
  var STORAGE_KEY = "blewnanami_site_unlocked";

  function unlock() {
    document.documentElement.classList.remove("site-locked");
    document.documentElement.classList.add("site-unlocked");
    var gate = document.getElementById("site-lock");
    if (gate) {
      gate.remove();
    }
  }

  function buildGate() {
    if (document.getElementById("site-lock")) {
      return;
    }

    var gate = document.createElement("div");
    gate.id = "site-lock";
    gate.setAttribute("role", "dialog");
    gate.setAttribute("aria-modal", "true");
    gate.setAttribute("aria-labelledby", "site-lock-title");

    gate.innerHTML = [
      '<div class="site-lock-panel">',
      '  <p class="site-lock-kicker">Private reading room</p>',
      '  <h1 id="site-lock-title">BlewNanaMi</h1>',
      '  <p class="site-lock-copy">This collection is kept behind a small door.</p>',
      '  <form id="site-lock-form">',
      '    <label for="site-lock-password">Password</label>',
      '    <input id="site-lock-password" type="password" autocomplete="current-password" autofocus>',
      '    <button type="submit">Enter</button>',
      '    <p id="site-lock-error" aria-live="polite"></p>',
      '  </form>',
      '</div>'
    ].join("");

    document.body.appendChild(gate);

    var form = document.getElementById("site-lock-form");
    var input = document.getElementById("site-lock-password");
    var error = document.getElementById("site-lock-error");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (input.value === PASSWORD) {
        try {
          localStorage.setItem(STORAGE_KEY, "true");
        } catch (errorIgnored) {}
        unlock();
      } else {
        error.textContent = "Password incorrect.";
        input.value = "";
        input.focus();
      }
    });
  }

  try {
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      unlock();
      return;
    }
  } catch (errorIgnored) {}

  document.documentElement.classList.add("site-locked");

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildGate);
  } else {
    buildGate();
  }
})();
