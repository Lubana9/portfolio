export type FormState = {
  name: string;
  email: string;
  message: string;
};
export type ServiceMessage = {
  class: string;
  text: string;
};

export const initialFormState = {
  message: "",
  name: "",
  email: "",
};
