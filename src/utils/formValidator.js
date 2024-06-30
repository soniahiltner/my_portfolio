export const onValidate = (form) => {
  const emailRegex =
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
  const messageRegex = /^.{1,255}$/;
  let isError = false;
  let errors = {};

  if (!form.name.trim()) {
    errors.name = "Insert your name";
    isError = true;
  }
  if (!form.email.trim()) {
    errors.email = "Insert your email";
    isError = true;
  } else if (!emailRegex.test(form.email)) {
    errors.email = "Invalid email";
    isError = true;
  }
  if (!form.message.trim()) {
    errors.message = "Insert your message";
    isError = true;
  } else if (!messageRegex.test(form.message)) {
    errors.message = "Your message must not exceed 255 characters";
    isError = true;
  }

  return isError ? errors : null;
};
