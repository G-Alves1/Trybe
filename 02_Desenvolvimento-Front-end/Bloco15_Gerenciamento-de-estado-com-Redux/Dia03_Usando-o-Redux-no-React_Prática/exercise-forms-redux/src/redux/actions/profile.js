import { PERSONAL_FORM_SUBMIT, PROFESSIONAL_FORM_SUBMIT } from './actionTypes';

const submitPersonalForm = (personalProfile) => ({
  type: PERSONAL_FORM_SUBMIT,
  payload: personalProfile,
});

const submitProfessionalForm = (professionalProfile) => ({
  type: PROFESSIONAL_FORM_SUBMIT,
  payload: professionalProfile,
});

export { submitPersonalForm, submitProfessionalForm };
