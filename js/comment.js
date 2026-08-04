window.addEventListener('DOMContentLoaded', function() {
    // 1. 댓글이 들어갈 div 그릇을 동적으로 생성
    var container = document.createElement('div');
    container.id = 'lv-container';
    container.setAttribute('data-id', 'city');
    container.setAttribute('data-uid', 'gduqz1LsuD051rtms296'); // 꼭 본인 UID로 변경

    // 2. HTML 본문의 맨 마지막(또는 원하는 영역)에 div 강제 삽입
    document.body.appendChild(container);

    // 3. 라이브리 서버에서 댓글 위젯 시스템 호출
    var j = document.createElement('script');
    j.src = 'https://livere.com';
    j.async = true;
    document.body.appendChild(j);
});
