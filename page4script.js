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
            document.getElementById("timer").textContent =
                `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
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