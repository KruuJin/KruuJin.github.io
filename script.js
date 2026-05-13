/* Small interaction in the spirit of karpathy.ai (email icon reveal). */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var icon = document.getElementById("iemail");
    var box = document.getElementById("demail");
    if (!icon || !box) return;

    icon.addEventListener("click", function () {
      if (box.dataset.revealed === "1") return;
      box.textContent =
        "실제 지원 시에는 본인 연락처(이메일 등)로 바꿔 주세요. 예: minsu.kim@example.com";
      box.classList.add("is-visible");
      box.dataset.revealed = "1";
      icon.setAttribute("aria-label", "연락처 안내 표시됨");
    });

    icon.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        icon.click();
      }
    });

    icon.setAttribute("role", "button");
    icon.setAttribute("tabindex", "0");
    icon.setAttribute("aria-label", "연락처 안내 표시");
  });
})();
