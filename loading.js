window.addEventListener("load", function () {

    const loading = document.getElementById("loading-screen");

    if (!loading) return;

    loading.style.opacity = "0";

    setTimeout(function () {
        loading.remove();
    }, 300);

});
