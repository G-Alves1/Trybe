USE hr;

/*******1*******/
SELECT MAX(SALARY)
FROM employees;

/*******2*******/
SELECT MAX(SALARY) - MIN(SALARY)
FROM employees;

/*******3*******/
SELECT JOB_ID, AVG(SALARY) AS average_salary
FROM employees
GROUP BY JOB_ID
ORDER BY average_salary DESC;

/*******4*******/
SELECT SUM(SALARY)
FROM employees;

/*******5*******/
SELECT
    MAX(SALARY),
    MIN(SALARY),
    SUM(SALARY),
    ROUND(AVG(SALARY), 2)
FROM employees;

/*******6*******/
SELECT JOB_ID, COUNT(*)
FROM employees
WHERE JOB_ID = "IT_PROG";

/*******7*******/
SELECT JOB_ID, SUM(SALARY)
FROM employees
GROUP BY JOB_ID;

/*******8*******/
SELECT JOB_ID, SUM(SALARY)
FROM employees
GROUP BY JOB_ID
HAVING JOB_ID = "IT_PROG";

/*******9*******/
SELECT JOB_ID, AVG(salary) average_salary
FROM employees
WHERE JOB_ID <> 'IT_PROG'
GROUP BY JOB_ID
ORDER BY average_salary DESC;

/*******10*******/
SELECT
    department_id,
    AVG(salary),
    COUNT(*) number_of_employees
FROM employees
GROUP BY department_id
HAVING number_of_employees > 10;

/*******11*******/
UPDATE employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE PHONE_NUMBER LIKE '515%';

/*******12*******/
SELECT *
FROM employees
WHERE LENGTH(first_name) >= 8;

/*******13*******/
SELECT
    employee_id,
    first_name,
    YEAR(HIRE_DATE)
FROM employees;

/*******14*******/
SELECT
    employee_id,
    first_name,
    DAY(HIRE_DATE)
FROM employees;

/*******15*******/
SELECT
    employee_id,
    first_name,
    MONTH(HIRE_DATE)
FROM employees;

/*******16*******/
SELECT UCASE(CONCAT(FIRST_NAME, " ", LAST_NAME))
FROM employees;

/*******17*******/
SELECT LAST_NAME, HIRE_DATE
FROM employees
WHERE MONTH(HIRE_DATE)=7 AND YEAR(HIRE_DATE)=1987;

/*******18*******/
SELECT
    FIRST_NAME,
    LAST_NAME,
    DATEDIFF(CURRENT_DATE(), HIRE_DATE)
FROM employees;