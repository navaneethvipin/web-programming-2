function gradeConverter() {
    let grade = prompt("Enter your grade (0-100):");
    let letterGrade;



    switch (true) {
        case (grade >= 90 && grade <= 100):
            letterGrade = "A";
            break;
        case (grade >= 80 && grade <= 89):
            letterGrade = "B";
            break;
        case (grade >= 70 && grade <= 79):
            letterGrade = "C";
            break;
        case (grade >= 60 && grade <= 69):
            letterGrade = "D";
            break;
        default:
            letterGrade = "F";
    }

    console.log(`Your letter grade is ${letterGrade}.`);
}
