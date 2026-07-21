document.addEventListener("DOMContentLoaded", function () {
  // 1. 댓글창이 들어갈 컨테이너 생성 및 선택
  const commentContainer = document.getElementById("giscus-container");
  if (!commentContainer) return; // 컨테이너가 없으면 실행 안 함

  // 2. Giscus 스크립트 엘리먼트 생성
  const script = document.createElement("script");
  
  script.src = "https://giscus.app";
  script.async = true;
  script.crossOrigin = "anonymous";

  // 3. Giscus 설정값 세팅 (본인 정보로 수정)
  script.setAttribute("data-repo", "ieasxu1407/online_tools2");
  script.setAttribute("data-repo-id", "R_kgDOTNKxIg");
  script.setAttribute("data-category", "General");
  script.setAttribute("data-category-id", "DIC_kwDOTNKxIs4DBojc");
  script.setAttribute("data-mapping", "pathname");
  script.setAttribute("data-strict", "0");
  script.setAttribute("data-reactions-enabled", "1");
  script.setAttribute("data-emit-metadata", "0");
  script.setAttribute("data-input-position", "bottom");
  script.setAttribute("data-lang", "ko");

  // 4. 이전에 만든 Disqus 스타일 커스텀 CSS 주소 연결
  script.setAttribute("data-theme", "https://ieasxu1407.github.io/css/giscus.css");

  // 5. 컨테이너 안에 스크립트 주입하여 실행
  commentContainer.appendChild(script);
});
