'use strict'
/* Exercise 53 - Students
 Create a students array – use the same algorithm as before and name it createStudents()
 Read a student name from the user until ‘quit’ is entered. Populate the students array with student objects.
 Read 3 grades for each student (each student should have a grades array).
 Calculate the average grade for each student.
 Write the function findWorstStudent(students).
 Write the function sortStudentsByGrade(students).
 Write the function sortStudentsByName(students) */
console.log('Exercise 53 - Students')

var gStudentId = 101
var gStudents = [
    { name: 'Muki', grades: [100, 80, 90], avg: 90, id: gStudentId++ },
    { name: 'Roki', grades: [100, 95, 90], avg: 95, id: gStudentId++ },
    { name: 'Puki', grades: [98, 99, 100], avg: 98, id: gStudentId++ },
    { name: 'Bibi', grades: [85, 75, 95], avg: 85, id: gStudentId++ },
    { name: 'Roki', grades: [80, 65, 50], avg: 65, id: gStudentId++ }
]

console.log('getAvg(students[0].grades):', getAvg(gStudents[0].grades))
console.log('FindWorstStudent:', findWorstStudent(gStudents))
console.log('SortedByName(students)', sortedByName(gStudents))
console.log('SortedByAvg:', sortedByAvg(gStudents))

function createStudents() {
    var students = []
    var studentsId = 1
    var studentName = prompt(`Enter student: ${(studentsId + '').padStart(2, '0') } name:`)
    while (studentName !== 'quit' && studentName !== '.') {
        var grades = getGrades()
        var avg = getAvg(grades)
        var student = createStudent(studentName, grades, avg)
        students.push(student)
        studentName = prompt(`Enter student:${(studentsId + '').padStart(2, '0') } name:`)
    }
    return students
}
function createStudent(studentName, grades, avg) {
    return {
        id: gStudentId++,
        studentName: studentName,
        grades: grades,
        avg: avg
    }
}
function getGrades() {
    var nums = []
    for (var i = 1; i < 4; i++) {
        var num = +prompt(`Enter grade: ${i.padStart(2, '0')}`)
        nums.push(num)
    }
    return nums
}
function getAvg(nums) {
    var sum = 0
    nums.forEach(el => {
        sum += el
    })
    var avg = sum / nums.length
    return avg
}

function findWorstStudent(students) {
    var worstStudent
    var lowestAvg = Infinity
    for (let i = 0; i < students.length; i++) {
        if (students[i].avg < lowestAvg) worstStudent = students[i]
    }
    return worstStudent
}

function sortedByName(students) { return students.sort((a, b) => (a.name > b.name ? 1 : -1)) }
function sortedByAvg(students) { return students.sort((a, b) => (a.avg - b.avg)) }