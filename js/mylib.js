var loanCount = 0;
var reserveCount = 0;

for (var i = 0; i < books.length; i++) {
    if (books[i].status === '대출중') {
        loanCount = loanCount + 1;
    }
    if (books[i].status === '예약중') {
        reserveCount = reserveCount + 1;
    }
}

document.getElementById('loanCount').textContent = '현재 대출 중 ' + loanCount + '권';
document.getElementById('reserveCount').textContent = '대기 ' + reserveCount + '권';