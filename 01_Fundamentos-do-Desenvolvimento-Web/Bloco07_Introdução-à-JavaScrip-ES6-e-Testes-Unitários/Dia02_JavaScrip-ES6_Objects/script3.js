const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/*******1*******/
function nightTurn(object, key, value) {
  object.key = value;
}
nightTurn(lesson2, 'turno', 'noite');

/*******2*******/
const listKeys = (object) => Object.keys(object);
listKeys(lesson2);

/*******3*******/
const sizeObject = (object) =>  Object.keys(object).length;
sizeObject(lesson2);

/*******4*******/
const listValue = (object) => Object.values(object);
listValue(lesson2);

/*******5*******/
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

/*******6*******/
function totalStudents(object) {
  let total = 0;
  const objectKeys = Object.keys(object);
  for (let index in objectKeys) {
    const currentKey = objectKeys[index];
    total += object[currentKey].numeroEstudantes;
  }
  return total;
};
totalStudents(allLessons);

/*******7*******/
const getValueByNumber = (object, number) => Object.values(object)[number];
getValueByNumber(lesson1, 0);

/*******8*******/
function verifyPair(object, key, value) {
  const array = Object.entries(object);
  let isEqual = false;
  for (let index in array) {
    if (array[index][0] === key && array[index][1] === value) isEqual = true;
  }
  return isEqual;
};
verifyPair(lesson3, 'turno', 'noite');

/*******9*******/
function getNumberOfStudentsMath(object) {
  let total = 0;
  const arrayKeys = Object.keys(object);
  for (let index in arrayKeys) {
    if(object[arrayKeys[index]].materia === 'Matemática'){
    total += object[arrayKeys[index]].numeroEstudantes;
    }
  }
  return total;
}
getNumberOfStudentsMath(allLessons);

/*******10*******/
const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (let index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));