import Evaluation from './Evaluation';

export default class EvaluationResult {
  private _evaluation: Evaluation;
  type: string;

  constructor(evaluation: Evaluation, private _score: number) {
    this._evaluation = evaluation;
    this.score = _score;
  }

  get evaluation(): Evaluation {
    return this._evaluation;
  }

  set evaluation(value: Evaluation) {
    this._evaluation = value;
  }

  get score(): number {
    return this._score;
  }

  validateValueThreshold(value: number, type: string, threshold: number) {
    if (this.type === type && value > threshold) {
      throw new Error(`A pontução deve ser menor que ${threshold} pontos.`);
    }
  }

  set score(value: number) {
    if (value < 0) throw new Error('A pontução deve ser positiva.');
    this.validateValueThreshold(value, 'prova', 25);
    this.validateValueThreshold(value, 'trabalho', 50);
    this._score = value;
  }
}