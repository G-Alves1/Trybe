import { NextFunction, Request, Response } from 'express';

import { IProduct } from '../interfaces';

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

function isValidDate(dateString: string) {
  return DATE_REGEX.test(dateString)
    && (new Date(dateString)).toString() !== 'Invalid Date';
}

function validateDates(
  manufacturingDate: string,
  expirationDate: string,
) {
  if (!isValidDate(expirationDate) || !isValidDate(manufacturingDate)) {
    const message = 'manufactoringDate and expiratonDate must be in the format'
      + ' \'yyyy-mm-dd\' and be valid date';
    return { status: 400, message };
  }

  // verifica se a data de validate é maior que a de fabricação
  if (expirationDate < manufacturingDate) {
    const message = 'ExpirationDate must be greater than ManufacturingDate';
    return { status: 400, message };
  }

  return null;
}

function validateBrandAndPrice(
  brand: string,
  price: number,
) {
  // verifica se a marca tem pelo menos 3 caracteres
  if (typeof brand !== 'string' || brand.length < 3) {
    const message = 'The brand must have at least 3 characters';
    return ({ status: 400, message });
  }

  // verifica se o preço é negativo
  if (typeof price !== 'number' || price < 0) {
    const message = 'The price must be a positive value';
    return ({ status: 400, message });
  }

  return null;
}

export default function validateBody(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { name, brand, expirationDate, manufacturingDate, price } = req.body as IProduct;
  const properties = [name, brand, expirationDate, manufacturingDate, price];

  // verifica se todos os campos foram passados
  if (properties.some((field) => !field)) {
    const message = 'name, brand, expirationDate, manufacturingDate or price is missing';
    return res.status(400).json({ message });
  }

  let error = validateDates(manufacturingDate, expirationDate);

  if (error) return res.status(error.status).json({ message: error.message });

  error = validateBrandAndPrice(brand, price);

  if (error) return res.status(error.status).json({ message: error.message });

  next();
}
