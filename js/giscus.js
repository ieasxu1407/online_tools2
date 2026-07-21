(function() {
    // 1. script 엘리먼트 생성
    const script = document.createElement('script');
    
    // 2. 속성(Attributes) 및 데이터 속성(data-*) 설정
    script.src = "https://giscus.app/client.js";
    script.setAttribute('data-repo', 'ieasxu1407/online_tools2');
    script.setAttribute('data-repo-id', 'R_kgDOTNKxIg');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOTNKxIs4DBojc');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'ko');
    script.crossOrigin = "anonymous";
    script.async = true;
    
    // 3. HTML 문서의 body 끝에 스크립트 삽입
    document.body.appendChild(script);
})();
