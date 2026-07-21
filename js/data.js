// 최초 방문 시 사용할 기본 데이터
// var defaultBooks = [
//     { id: 1, title: "Effective Java", author: "Joshua Bloch", category: "프로그래밍", status: "대출가능" },
//     { id: 2, title: "Clean Code", author: "Robert C. Martin", category: "프로그래밍", status: "대출중" },
//     { id: 3, title: "모비 딕", author: "허먼 멜빌", category: "문학", status: "대출가능" }
// ];
var defaultBooks = [
    { id: 1, title: "Effective Java", author: "Joshua Bloch", category: "IT", status: "대출가능" },
    { id: 2, title: "Clean Code", author: "Robert C. Martin", category: "IT", status: "대출중" },
    { id: 3, title: "모비 딕", author: "허먼 멜빌", category: "문학", status: "대출가능" },
    { id: 4, title: "무서운 게 딱 좋아", author: "이빈파", category: "아동", status: "대출가능" },
    { id: 5, title: "월간 디자인", author: "디자인하우스", category: "잡지", status: "대출가능" }
];

// localStorage에서 저장된 데이터 꺼내오기 시도
var savedData = localStorage.getItem('libraryBooks');

var books;
if (savedData === null) {
    // 처음 방문 (저장된 게 없음) → 기본 데이터 사용
    books = defaultBooks;
} else {
    // 저장된 게 있음 → 문자열을 배열로 되돌려서 사용
    books = JSON.parse(savedData);
}

// nextId는 고정값 대신, 현재 books 중 가장 큰 id + 1로 계산
// (삭제/등록을 반복해도 id가 겹치지 않도록)
var nextId = 1;
for (var i = 0; i < books.length; i++) {
    if (books[i].id >= nextId) {
        nextId = books[i].id + 1;
    }
}

// books 배열을 localStorage에 저장하는 함수
function saveBooks() {
    localStorage.setItem('libraryBooks', JSON.stringify(books));
}