(function() {
    // 1. 댓글이 들어갈 div 그릇을 동적으로 생성
    var container = document.createElement('div');
    container.id = 'lv-container';
    container.setAttribute('data-id', 'city');
    container.setAttribute('data-uid', 'gduqz1LsuD051rtms296'); // 여기에 본인 UID 삽입

    // 2. 현재 이 스크립트 파일이 호출된 위치 바로 앞에 div 그릇을 끼워 넣음
    var currentScript = document.currentScript;
    currentScript.parentNode.insertBefore(container, currentScript);

    // 3. 라이브리 서버에서 댓글 위젯 시스템 불러오기
    var j = document.createElement('script');
    j.src = 'https://livere.com';
    j.async = true;
    currentScript.parentNode.insertBefore(j, currentScript);
})();
