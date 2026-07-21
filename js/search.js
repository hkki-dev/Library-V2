var searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var keyword = document.getElementById('searchInput').value;

    if (keyword === '') {
        alert('검색어를 입력하세요.');
        return;
    }

    // 검색어를 URL에 실어서 results.html로 이동 (detail.html 때와 같은 방식)
    window.location.href = './results.html?keyword=' + encodeURIComponent(keyword);
});