var params = new URLSearchParams(window.location.search);
var keyword = params.get('keyword');
var category = params.get('category');

var resultTitle = document.getElementById('resultTitle');
var resultCards = document.getElementById('resultCards');

var matched = [];

if (category !== null) {
    // 카테고리 버튼을 눌러서 온 경우
    resultTitle.textContent = '[' + category + '] 카테고리 결과';

    for (var i = 0; i < books.length; i++) {
        if (books[i].category === category) {
            matched.push(books[i]);
        }
    }
} else if (keyword !== null) {
    // 검색창으로 검색해서 온 경우 (기존 로직)
    resultTitle.textContent = '"' + keyword + '" 검색 결과';

    for (var j = 0; j < books.length; j++) {
        var book = books[j];
        var titleMatch = book.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        var authorMatch = book.author.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;

        if (titleMatch || authorMatch) {
            matched.push(book);
        }
    }
} else {
    // 둘 다 없이 그냥 results.html로 바로 들어온 경우
    resultTitle.textContent = '검색 결과';
}

// 결과 그리기 (기존과 동일)
resultCards.innerHTML = '';

if (matched.length === 0) {
    resultCards.innerHTML = '<div class="card"><p>검색 결과가 없습니다.</p></div>';
} else {
    for (var k = 0; k < matched.length; k++) {
        var b = matched[k];
        var badgeClass = '';

        if (b.status === '대출가능') {
            badgeClass = 'badge ok';
        } else {
            badgeClass = 'badge';
        }

        // var cardHtml =
        //     '<div class="card">' +
        //     '<p class="' + badgeClass + '">' + b.status + '</p>' +
        //     '<h3>' + b.title + '</h3>' +
        //     '<p>' + b.author + '</p>' +
        //     '<a class="btn" href="./detail.html?id=' + b.id + '">상세보기</a>' +
        //     '</div>';
        
        var cardHtml =
            `<div class="card"> 
            <p class="${badgeClass}">${b.status}</p>
            <h3>${b.title}</h3>
            <p>${b.author}</p>
            <a class="btn" href="./detail.html?id=${b.id}">상세보기</a>
            </div>`;

        resultCards.innerHTML += cardHtml;
    }
}