import { validationText } from '../../shared/validation-text/validationText';
import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
    email: yup
    .string()
    .email(validationText.invalidEmail)
    .required(validationText.fieldRequired),
    password: yup
    .string()
    .required(validationText.fieldRequired),
});