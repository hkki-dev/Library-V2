var signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('signupName').value;
    var id = document.getElementById('signupId').value;
    var pw = document.getElementById('signupPw').value;
    var email = document.getElementById('signupEmail').value;

    if (name === '' || id === '' || pw === '' || email === '') {
        alert('모든 항목을 입력하세요.');
        return;
    }

    if (pw.length < 4) {
        alert('비밀번호는 4자 이상이어야 합니다.');
        return;
    }

    // 아주 간단한 이메일 형식 검사 (정규식 없이)
    var atIndex = email.indexOf('@');
    var dotIndex = email.indexOf('.', atIndex);

    if (atIndex === -1 || dotIndex === -1) {
        alert('올바른 이메일 형식이 아닙니다. (예: user@example.com)');
        return;
    }

    alert('회원가입이 완료되었습니다. (데모)');
    window.location.href = './login.html';
});