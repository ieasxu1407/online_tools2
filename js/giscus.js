(function() {
  // 1. giscus가 들어갈 태그 생성
  const giscusContainer = document.createElement('div');
  giscusContainer.className = 'giscus';

  // 2. giscus 스크립트 생성 및 속성 설정
  const script = document.createElement('script');
  script.src = 'https://giscus.app';
  script.setAttribute('data-repo', 'ieasxu1407/online_tools2; // 본인 레포지토리
  script.setAttribute('data-repo-id', 'R_kgDOTNKxIg';)        // 본인 레포 ID
  script.setAttribute('data-category', 'General';)   // 디스커션 카테고리
  script.setAttribute('data-category-id', 'DIC_kwDOTNKxIs4DBojc');   // 카테고리 ID
  script.setAttribute('data-mapping', 'pathname');
  script.setAttribute('data-strict', '0');
  script.setAttribute('data-reactions-enabled', '1');
  script.setAttribute('data-emit-metadata', '0');
  script.setAttribute('data-input-position', 'bottom');
  script.setAttribute('data-theme', 'preferred_color_scheme');
  script.setAttribute('data-lang', 'ko');
  script.setAttribute('crossorigin', 'anonymous');
  script.async = true;

  // 3. 현재 페이지의 body나 특정 위치에 삽입
  // 댓글창이 위치하길 원하는 곳의 ID나 class가 있다면 그곳에 append 하세요.
  document.body.appendChild(giscusContainer);
  document.body.appendChild(script);
})();
