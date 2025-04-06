let timer;
let timeLeft = 300;
let isRunning = false;

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            isRunning = false;
            alert("타이머 종료!");
        }
    }, 1000);
}

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    const timerEl = document.getElementById("timer");
    const nowMsg1 = document.getElementById("nowMessage1");
    const nowMsg2 = document.getElementById("nowMessage2");

    timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (timeLeft <= 150 && timeLeft >= 140) {
        // 스타일 효과
        timerEl.style.color = "#A69485";
        timerEl.style.fontSize = "124px";
        timerEl.classList.add("blink");

        // 문구들 표시
        nowMsg1.style.display = "block";
        nowMsg2.style.display = "block";
    } else {
        // 기본 상태 복구
        timerEl.style.color = "#000";
        timerEl.style.fontSize = "96px"; // 원래 크기로
        timerEl.classList.remove("blink");

        nowMsg1.style.display = "none";
        nowMsg2.style.display = "none";
    }
}

function recordTimeLapse() {
    let list = document.getElementById("timelapseList");
    let listItem = document.createElement("li");
    listItem.textContent = document.getElementById("timer").textContent;
    list.appendChild(listItem);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 300;
    isRunning = false;
    updateDisplay();
    document.getElementById("timelapseList").innerHTML = "";
}
