var params = new URLSearchParams(window.location.search);
var keyword = params.get('keyword');

var resultTitle = document.getElementById('resultTitle');
var resultCards = document.getElementById('resultCards');

resultTitle.textContent = '"' + keyword + '" 검색 결과';

// books 배열에서 제목 또는 저자에 keyword가 포함된 것 찾기
var matched = [];
for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var titleMatch = book.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    var authorMatch = book.author.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;

    if (titleMatch || authorMatch) {
        matched.push(book);
    }
}

// 결과 그리기
resultCards.innerHTML = '';

if (matched.length === 0) {
    resultCards.innerHTML = '<div class="card"><p>검색 결과가 없습니다.</p></div>';
} else {
    for (var j = 0; j < matched.length; j++) {
        var b = matched[j];
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