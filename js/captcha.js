/*
====================================

Online Tools
Cloudflare Turnstile Loader
Version : 1.0

====================================
*/

(() => {

    "use strict";

    /* ==========================
       설정
    ========================== */

    const SITE_KEY = "YOUR_SITE_KEY";

    let widgetId = null;

    let token = null;

    /* ==========================
       API 로드
    ========================== */

    function loadTurnstile() {

        if (window.turnstile) {

            renderWidget();

            return;

        }

        const script = document.createElement("script");

        script.src =
            "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

        script.async = true;

        script.defer = true;

        script.onload = renderWidget;

        document.head.appendChild(script);

    }

    /* ==========================
       숨김 컨테이너 생성
    ========================== */

    function createContainer() {

        let box = document.getElementById("cf-turnstile");

        if (box) return box;

        box = document.createElement("div");

        box.id = "cf-turnstile";

        box.style.position = "fixed";

        box.style.left = "-9999px";

        box.style.top = "-9999px";

        box.style.width = "1px";

        box.style.height = "1px";

        document.body.appendChild(box);

        return box;

    }

    /* ==========================
       위젯 생성
    ========================== */

    function renderWidget() {

        const container = createContainer();

        widgetId = turnstile.render(container, {

            sitekey: 0x4AAAAAAD-mwnDDxVqYKmjD,

            appearance: "interaction-only",

            execution: "render",

            callback: function (response) {

                token = response;

                console.log("Turnstile Success");

            },

            "expired-callback": function () {

                token = null;

                turnstile.reset(widgetId);

            },

            "error-callback": function () {

                token = null;

                console.warn("Turnstile Error");

            }

        });

    }

    /* ==========================
       공개 함수
    ========================== */

    window.Captcha = {

        getToken() {

            return token;

        },

        reset() {

            if (widgetId !== null) {

                turnstile.reset(widgetId);

            }

        },

        execute() {

            if (widgetId !== null) {

                turnstile.execute(widgetId);

            }

        }

    };

    /* ==========================
       시작
    ========================== */

    window.addEventListener(

        "load",

        loadTurnstile

    );

})();
