/* =====================================
   Online Tools - app.js
   Common JavaScript
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    initSearch();
    initDarkMode();
    initCardAnimation();
    initFavorites();
    initRecentTools();
    initToolCounter();

});

/* =====================================
   검색 기능
===================================== */

function initSearch() {

    const input = document.querySelector("#toolSearch") ||
                  document.querySelector("input[type='text']");

    if (!input) return;

    input.addEventListener("input", () => {

        const keyword = input.value.toLowerCase();

        document.querySelectorAll(".tool-card").forEach(card => {

            const text = card.innerText.toLowerCase();

            card.parentElement.style.display =
                text.includes(keyword) ? "" : "none";

        });

    });

}

/* =====================================
   다크모드
===================================== */

function initDarkMode() {

    const btn = document.querySelector("#darkModeBtn") ||
                document.querySelector(".btn-outline-light");

    if (!btn) return;

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");

        btn.innerHTML = '<i class="bi bi-sun-fill"></i>';

    }

    btn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const dark =
            document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "theme",
            dark ? "dark" : "light"
        );

        btn.innerHTML = dark
            ? '<i class="bi bi-sun-fill"></i>'
            : '<i class="bi bi-moon"></i>';

    });

}

/* =====================================
   카드 애니메이션
===================================== */

function initCardAnimation() {

    document.querySelectorAll(".tool-card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

}

/* =====================================
   즐겨찾기
===================================== */

function initFavorites() {

    document.querySelectorAll(".favorite-btn").forEach(btn => {

        const tool = btn.dataset.tool;

        const list = JSON.parse(
            localStorage.getItem("favorites") || "[]"
        );

        if (list.includes(tool)) {

            btn.classList.remove("btn-outline-warning");

            btn.classList.add("btn-warning");

        }

        btn.addEventListener("click", () => {

            let favorites = JSON.parse(
                localStorage.getItem("favorites") || "[]"
            );

            if (favorites.includes(tool)) {

                favorites =
                    favorites.filter(x => x !== tool);

                btn.classList.remove("btn-warning");

                btn.classList.add("btn-outline-warning");

            } else {

                favorites.push(tool);

                btn.classList.remove("btn-outline-warning");

                btn.classList.add("btn-warning");

            }

            localStorage.setItem(
                "favorites",
                JSON.stringify(favorites)
            );

        });

    });

}

/* =====================================
   최근 사용 도구
===================================== */

function saveRecentTool(name) {

    let list = JSON.parse(
        localStorage.getItem("recentTools") || "[]"
    );

    list = list.filter(x => x !== name);

    list.unshift(name);

    if (list.length > 10)
        list.length = 10;

    localStorage.setItem(
        "recentTools",
        JSON.stringify(list)
    );

}

document.querySelectorAll(".tool-link").forEach(link => {

    link.addEventListener("click", () => {

        saveRecentTool(link.dataset.tool);

    });

});

/* =====================================
   인기 도구
===================================== */

function initToolCounter() {

    document.querySelectorAll(".tool-link").forEach(link => {

        link.addEventListener("click", () => {

            const tool = link.dataset.tool;

            const key = "count_" + tool;

            let count =
                Number(localStorage.getItem(key) || 0);

            count++;

            localStorage.setItem(key, count);

        });

    });

}

/* =====================================
   Toast
===================================== */

function showToast(message) {

    const toast = document.createElement("div");

    toast.className =
        "toast align-items-center text-bg-dark border-0 show position-fixed bottom-0 end-0 m-3";

    toast.style.zIndex = "9999";

    toast.innerHTML = `

<div class="d-flex">

<div class="toast-body">

${message}

</div>

<button
type="button"
class="btn-close btn-close-white me-2 m-auto">
</button>

</div>

`;

    document.body.appendChild(toast);

    toast.querySelector(".btn-close")
        .onclick = () => toast.remove();

    setTimeout(() => {

        toast.remove();

    }, 3000);

}

/* =====================================
   페이지 로딩
===================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* =====================================
   현재 연도 자동 표시
===================================== */

const year = document.querySelector("#currentYear");

if (year)
    year.textContent = new Date().getFullYear();

/* =====================================
   복사 기능
===================================== */

function copyText(text) {

    navigator.clipboard.writeText(text);

    showToast("클립보드에 복사되었습니다.");

}

/* =====================================
   랜덤 문자열
===================================== */

function randomString(length = 12) {

    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let result = "";

    for (let i = 0; i < length; i++) {

        result += chars[
            Math.floor(Math.random() * chars.length)
        ];

    }

    return result;

}
