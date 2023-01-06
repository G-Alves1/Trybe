const Joi = require('joi');
const { idSchema } = require('./schemas');

const addCarSchema = Joi.object({
  model: Joi.string().min(3).required(),
  color: Joi.string().min(2).required(),
  licensePlate: Joi.string().length(7).required(),
});

const addDriverSchema = Joi.object({
  name: Joi.string().min(3).required(),
  carIds: Joi.array().items(idSchema),
});

module.exports = {
  addCarSchema,
  addDriverSchema,
};