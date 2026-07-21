// 1. 주소창의 URL에서 id 값 읽기
var params = new URLSearchParams(window.location.search);
var bookId = Number(params.get('id'));

// 2. books 배열에서 해당 id 찾기 (admin.js 삭제 기능과 같은 패턴)
var targetBook = null;
for (var i = 0; i < books.length; i++) {
    if (books[i].id === bookId) {
        targetBook = books[i];
    }
}

// 3. 못 찾았을 때 대비 (직접 이상한 id로 접속했을 경우)
if (targetBook === null) {
    alert('해당 도서를 찾을 수 없습니다.');
} else {
    // 4. 찾았으면 화면에 채워넣기
    document.getElementById('detailTitle').textContent = targetBook.title;
    document.getElementById('detailAuthor').textContent = targetBook.author;
    document.getElementById('detailCategory').textContent = targetBook.category;

    if (targetBook.status === '대출가능') {
        document.getElementById('detailStatus').textContent = '대출가능';
    } else {
        document.getElementById('detailStatus').textContent = '대출중';
    }

    // 예약하기 추가
    // 5. 예약하기 버튼 - 데모용 alert만
    var reserveBtn = document.getElementById('reserveBtn');
    reserveBtn.addEventListener('click', function () {
        alert('예약이 완료되었습니다. (데모)');
    });
}