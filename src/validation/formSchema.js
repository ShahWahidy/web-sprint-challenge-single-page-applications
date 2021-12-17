import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('name is required!')
    .min(2, 'Username has to be two characters!'),

})

export default formSchema;