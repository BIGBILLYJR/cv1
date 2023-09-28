document.addEventListener("DOMContentLoaded", function() {
    let leftScore = 0;
    let rightScore = 0;

    const ball = document.querySelector('.ball');
    const leftPaddle = document.getElementById('leftPaddle');
    const rightPaddle = document.getElementById('rightPaddle');
    const winMessage = document.getElementById('winMessage');

    leftPaddle.style.top = '150px';
    rightPaddle.style.top = '150px';

    let ballX = 400;
    let ballY = 200;
    let ballSpeedX = 5;
    let ballSpeedY = 2;

    function moveBall() {
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        let rightPaddleY = parseInt(rightPaddle.style.top);
        let rightPaddleSpeed = 2;

        if (ballY > rightPaddleY + 50) {
            rightPaddleY += rightPaddleSpeed;
        } else if (ballY < rightPaddleY + 50) {
            rightPaddleY -= rightPaddleSpeed;
        }

        if (rightPaddleY < 0) rightPaddleY = 0;
        if (rightPaddleY > 300) rightPaddleY = 300;

        rightPaddle.style.top = rightPaddleY + 'px';

        if (ballY < 0 || ballY > 380) {
            ballSpeedY = -ballSpeedY;
        }

        if (
            ballX < 30 && ballY > leftPaddle.offsetTop && ballY < leftPaddle.offsetTop + 100 ||
            ballX > 750 && ballY > rightPaddle.offsetTop && ballY < rightPaddle.offsetTop + 100
        ) {
            ballSpeedX = -ballSpeedX * 1.05;  // Increase speed by 5% on paddle hit
        }

        if (ballX < 0 || ballX > 800) {
            if (ballX < 0) {
                rightScore++;
            } else {
                leftScore++;
            }

            document.getElementById('leftScore').textContent = leftScore;
            document.getElementById('rightScore').textContent = rightScore;

            if (leftScore >= 10) {
                winMessage.textContent = "You Win!";
                winMessage.style.display = "block";
                return;
            }

            if (rightScore >= 10) {
                winMessage.textContent = "You Lose!";
                winMessage.style.display = "block";
                return;
            }

            ballX = 400;
            ballY = 200;
            ballSpeedX = -ballSpeedX;
        }

        ball.style.left = ballX + 'px';
        ball.style.top = ballY + 'px';

        requestAnimationFrame(moveBall);
    }

    function movePaddle(event) {
        const newPaddleY = ('clientY' in event) ? event.clientY : event.touches[0].clientY;
        const adjustedPaddleY = newPaddleY - 50;
        if (adjustedPaddleY >= 0 && adjustedPaddleY <= 300) {
            leftPaddle.style.top = adjustedPaddleY + 'px';
        }
    }

    // Handle paddle movement for desktop
    document.addEventListener('mousemove', movePaddle);

    // Handle paddle movement for mobile
    document.addEventListener('touchmove', function(e) {
        e.preventDefault(); // Prevents page scrolling when moving paddle on mobile
        movePaddle(e);
    });

    moveBall();
});
