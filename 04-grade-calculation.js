
var mark1 = 80
gradeCalculator(mark1)
var mark2 = 100
gradeCalculator(mark2)
var mark3 = 15
gradeCalculator(mark3)
var mark4 = 94
gradeCalculator(mark4)

function gradeCalculator(score) {
    switch (true) {
        case (score == 100 && score > 95):
            console.log("The score is " +score,". The garde is A+.")
            break;
        case (score < 95 && score >= 90):
            console.log("The score is " +score,".The garde is A.")
            break;
        case (score < 90 && score >=75):
            console.log("The score is " +score,".The garde is B.")
            break;
        case (score < 75 && score >= 50):
            console.log("The score is " +score,".The garde is C.")
            break;
        case (score < 50 && score >= 40):
            console.log("The score is " +score,".The garde is D.")
            break;
        case (score < 40 && score >= 35):
            console.log("The score is " +score,".The garde is E.")
            break;
        default:
            console.log("The score is " +score,".The garde is F, need to retake the exam.")
            break;
    }
    
}