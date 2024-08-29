import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
    userName: Yup.string().required('Введите ваше имя'),
    email: Yup.string().email('Некорректный email').required('Введите ваш email'),
    password: Yup.string()
      .min(6, 'Пароль должен содержать не менее 6 символов')
      .required('Введите пароль'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
      .required('Повторите пароль'),
  });
  