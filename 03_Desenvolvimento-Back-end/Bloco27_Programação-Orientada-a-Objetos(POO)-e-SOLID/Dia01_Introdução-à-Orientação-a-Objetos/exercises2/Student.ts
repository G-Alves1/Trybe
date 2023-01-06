class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = [];
    this._worksGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._name = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }

    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.',
      );
    }

    this._worksGrades = value;
  }

  sumGrades(): number {
    return [...this.examsGrades, ...this.worksGrades]
      .reduce((previousNote, note) => {
        const nextNote = note + previousNote;

        return nextNote;
      }, 0);
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examsGrades.length + this.worksGrades.length;

    return Math.round(sumGrades / divider);
  }
}

const personOne = new Student('202001011', 'Maria da Silva');

personOne.examsGrades = [25, 20, 23, 23];
personOne.worksGrades = [45, 45];

console.log(personOne);
console.log('Soma de todas as notas: ', personOne.sumGrades());
console.log('Média de todas as notas: ', personOne.sumAverageGrade());
