var headerForm = document.querySelector('.header-search-form');

if (headerForm !== null) {
    headerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var keyword = document.querySelector('.header-search-input').value;

        if (keyword === '') {
            alert('검색어를 입력하세요.');
            return;
        }

        window.location.href = './results.html?keyword=' + encodeURIComponent(keyword);
    });
}