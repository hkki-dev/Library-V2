var loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var id = document.getElementById('loginId').value;
    var pw = document.getElementById('loginPw').value;

    if (id === '') {
        alert('아이디를 입력하세요.');
        return;
    }

    if (pw === '') {
        alert('비밀번호를 입력하세요.');
        return;
    }

    if (pw.length < 4) {
        alert('비밀번호는 4자 이상이어야 합니다.');
        return;
    }

    // 데모라 실제 인증은 없음 - 통과하면 바로 이동
    alert('로그인 되었습니다. (데모)');
    window.location.href = './mylib.html';
});