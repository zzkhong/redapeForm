import * as yup from 'yup';

// Validation for Email and Phone format has to be predefined
// Required will be determined from API 'isOptional' field
const formValidationSchema = yup.object().shape({
  'Email address': yup.string().email('Please enter valid email'),
  'Contact number': yup
    .string()
    .matches(/(01)(\d){8}\b/, 'Please enter valid phone number'),
});

export default formValidationSchema;
