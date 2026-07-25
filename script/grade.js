function calculateGrade() {
    var subjects = ["HTML", "CSS", "JavaScript"];
    var total = 0;

    for (var i = 0; i < subjects.length; i++) {
        var scoreText = prompt(subjects[i] + " 점수를 입력하세요.");

        if (scoreText === null) {
            alert("성적 계산을 취소했습니다.");
            return;
        }

        var score = Number(scoreText);

        if (!Number.isFinite(score) || score < 0 || score > 100) {
            alert("0점부터 100점 사이의 숫자를 입력해 주세요.");
            i--;
            continue;
        }

        total += score;
    }

    var average = total / subjects.length;
    var pass = average >= 60 ? "합격" : "불합격";
    var grade = "";

    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else if (average >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    alert("====== 📊 성적 결과 ======\n"
        + "총점: " + total + "점\n"
        + "평균: " + average.toFixed(2) + "점\n"
        + "결과: " + pass + "\n"
        + "등급: " + grade);
}
