var students = [
    {name: "Edmond", grade: 90},
    {name: "Edwin", grade: 87},
    {name: "Eddie", grade: 82},
    {name: "Micheal", grade: 95},
    {name: "Dwayne", grade: 92},
    {name: "Edward", grade: 99},
    {name: "Emmanuel", grade: 73}
]

function studentsGradeAbove90(studentArray) {
    const studentAbove90 = [];
    for (let i = 0; i < studentArray.length; i++) {
      if (studentArray[i].grade > 90) {
        studentAbove90[studentAbove90.length] = (studentArray[i].name);
      }
    }
    return studentAbove90;
  }

  const studentsAbove90 = studentsGradeAbove90(students);

  console.log(studentsGradeAbove90(students))