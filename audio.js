(() => {
    "use strict";

    let audioContext = null;
    let oscillator = null;
    let gainNode = null;

    async function startFakeAudio() {
        if (audioContext) return;

        audioContext = new (window.AudioContext ||
                            window.webkitAudioContext)();

        if (audioContext.state === "suspended") {
            await audioContext.resume();
        }

        oscillator = audioContext.createOscillator();
        gainNode = audioContext.createGain();

        oscillator.type = "sine";
        oscillator.frequency.value = 440;

        // 사실상 들리지 않는 수준
        gainNode.gain.value = 0.00001;

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();

        console.log("[Fake Audio] ON");
    }

    function stopFakeAudio() {
        if (!audioContext) return;

        try {
            oscillator.stop();
        } catch {}

        oscillator.disconnect();
        gainNode.disconnect();

        audioContext.close();

        oscillator = null;
        gainNode = null;
        audioContext = null;

        console.log("[Fake Audio] OFF");
    }

    window.fakeAudio = {
        start: startFakeAudio,
        stop: stopFakeAudio
    };

    startFakeAudio().catch(() => {
        console.log(
            "[Fake Audio] 브라우저 정책상 자동 재생이 차단되었습니다."
        );
    });

})();
