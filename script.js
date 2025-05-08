// Ngày bắt đầu yêu nhau (Thay đổi ngày ở đây)
const START_DATE = new Date('2024-11-16');

// Tính số ngày đã yêu nhau
function calculateDaysTogether() {
    const today = new Date();
    const timeDiff = today - START_DATE;
    const daysTogether = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    document.getElementById('daysCounter').innerText = daysTogether;
}

// Chạy hàm tính số ngày ngay khi tải trang
document.addEventListener('DOMContentLoaded', calculateDaysTogether);
