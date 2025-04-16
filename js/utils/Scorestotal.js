export default function getTotalQuestions() {
    let questions = JSON.parse(localStorage.getItem("questions")) || [];
    return questions.length;
}