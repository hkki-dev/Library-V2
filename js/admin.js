var addBtn = document.getElementById('addBookBtn');
var tableBody = document.getElementById('bookTableBody');

// 화면 그리기 함수 - books 배열을 표로 렌더링
function renderTable() {
    tableBody.innerHTML = ''; // 기존 내용 비우고

    for (var i = 0; i < books.length; i++) {
        var book = books[i];

        var newRow = document.createElement('tr');
        newRow.setAttribute('data-id', book.id); // 어떤 책 행인지 표시

        // newRow.innerHTML =
        //     '<td>' + book.id + '</td>' +
        //     '<td>' + book.title + '</td>' +
        //     '<td>' + book.author + '</td>' +
        //     '<td>' + book.category + '</td>' +
        //     '<td>' + book.status + '</td>' +
        //     '<td class="status">' +
        //     '<a class="btn" href="./detail.html?id=' + book.id + '">상세</a>' +
        //     '<button class="btn basic edit-btn" type="button">수정</button>' +
        //     '<button class="btn basic delete-btn" type="button">삭제</button>' +
        //     '</td>';

        newRow.innerHTML =
            `<td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>${book.status}</td>
            <td class="status">
            <a class="btn" href="./detail.html?id=${book.id}">상세</a>
            <button class="btn basic edit-btn" type="button">수정</button>
            <button class="btn basic delete-btn" type="button">삭제</button>
            </td>`;

        tableBody.appendChild(newRow);
    }
}

// 페이지 로드 시 최초 1회 그리기
renderTable();

// 등록 (Create)
addBtn.addEventListener('click', function () {
    var title = document.getElementById('inputTitle').value;
    var author = document.getElementById('inputAuthor').value;
    var category = document.getElementById('inputCategory').value;

    if (title === '' || author === '') {
        alert('제목과 저자는 필수입니다.');
        return;
    }

    var newBook = {
        id: nextId,
        title: title,
        author: author,
        category: category,
        status: '대출가능'
    };

    books.push(newBook);
    nextId = nextId + 1;
    saveBooks();   //로컬스토리지

    renderTable();
    document.getElementById('bookForm').reset();
});

// 삭제 (Delete)
tableBody.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        var row = e.target.closest('tr');
        var bookId = Number(row.getAttribute('data-id'));
        var confirmed = confirm('정말 삭제하시겠습니까?');

        if (!confirmed) {
            return;
        }

        // books 배열에서 이 id가 몇 번째(index)에 있는지 찾기
        var targetIndex = -1;
        for (var i = 0; i < books.length; i++) {
            if (books[i].id === bookId) {
                targetIndex = i;
            }
        }

        if (targetIndex !== -1) {
            books.splice(targetIndex, 1);
            saveBooks();   //로컬스토리지
        }

        renderTable();
    }
});

// 수정 (Update)
tableBody.addEventListener('click', function (e) {
    if (e.target.classList.contains('edit-btn')) {
        var row = e.target.closest('tr');
        var bookId = Number(row.getAttribute('data-id'));

        var targetBook = null;
        for (var i = 0; i < books.length; i++) {
            if (books[i].id === bookId) {
                targetBook = books[i];
            }
        }

        if (targetBook === null) {
            return;
        }

        var newTitle = prompt('새 제목을 입력하세요', targetBook.title);
        if (newTitle === null || newTitle === '') {
            return;
        }

        var newAuthor = prompt('새 저자를 입력하세요', targetBook.author);
        if (newAuthor === null || newAuthor === '') {
            return;
        }

        targetBook.title = newTitle;
        targetBook.author = newAuthor;
        saveBooks();   //로컬스토리지

        renderTable();
    }
});