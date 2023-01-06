import Person from './Person';
import Teacher from './Teacher';
import Student from './Student';
import Subject from './Subject';
import Exam from './Exam';
import Work from './Work';
import EvaluationResult from './EvaluationResult';
import OrderItem from './OrderItem';
import Order from './Order';
import OrderRepository from './OrderRepository';

const math = new Subject('Matemática');
const history = new Subject('História');

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));

const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);

const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);

console.log(carolina);
console.log(lucas);
console.log(marta);
console.log(joao);

const examMath = new Exam(marta, 25);
const workMath = new Work(marta, 50);
const examHistory = new Exam(joao, 25);
const workHistory = new Work(joao, 50);

carolina.addEvaluationResult(new EvaluationResult(examMath, 23));
carolina.addEvaluationResult(new EvaluationResult(workMath, 42));
carolina.addEvaluationResult(new EvaluationResult(examHistory, 25));
carolina.addEvaluationResult(new EvaluationResult(workHistory, 50));

console.log('Avaliações: ', carolina.evaluationsResults);
console.log('Soma das notas: ', carolina.sumGrades());
console.log('Média das notas: ', carolina.sumAverageGrade());

lucas.addEvaluationResult(new EvaluationResult(examMath, 25));
lucas.addEvaluationResult(new EvaluationResult(workMath, 49));
lucas.addEvaluationResult(new EvaluationResult(examHistory, 20));
lucas.addEvaluationResult(new EvaluationResult(workHistory, 50));

console.log('Avaliações: ', lucas.evaluationsResults);
console.log('Soma das notas: ', lucas.sumGrades());
console.log('Média das notas: ', lucas.sumAverageGrade());

const sandwiche = new OrderItem('Sandwiche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxí', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const carolinaOrder = new Order(carolina, [sandwiche, juice, dessert], 'dinheiro', 0.10);
const lucasOrder = new Order(lucas, [sandwiche, juice], 'dinheiro', 0.10);
const martaOrder = new Order(marta, [sandwiche, juice], 'cartão');
const joaoOrder = new Order(joao, [sandwiche, juice, dessert], 'cartão');

console.log('Pedido da Carolina: ', carolinaOrder);
console.log('Pedido do Lucas: ', lucasOrder);
console.log('Pedido da Marta: ', martaOrder);
console.log('Pedido do João: ', joaoOrder);

const orderRepository = new OrderRepository();
orderRepository.addOrder(carolinaOrder);
orderRepository.addOrder(lucasOrder);
orderRepository.addOrder(martaOrder);
orderRepository.addOrder(joaoOrder);
orderRepository.addOrder(carolinaOrder);

console.log('Pedidos da Carolina: ', orderRepository.listByClient(carolina));
console.log('Maior valor para o menor: ', orderRepository.listBySortedValue('maior'));
console.log('Menor valor para o maior: ', orderRepository.listBySortedValue('menor'));
