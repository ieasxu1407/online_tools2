/*
====================================

Online Tools
Disqus Common Loader

====================================
*/

(function () {

    const disqusShortname = "online-tools2";

    if (!document.getElementById("disqus_thread")) {

        return;

    }

    window.disqus_config = function () {

        this.page.url = window.location.href;

        this.page.identifier = location.pathname;

        this.page.title = document.title;

    };

    const d = document;

    const s = d.createElement("script");

    s.src =
        "https://" +
        disqusShortname +
        ".disqus.com/embed.js";

    s.setAttribute("data-timestamp", Date.now());

    d.body.appendChild(s);

})();
