import * as yup from "yup";

export const emailSchema = yup.object({
  email: yup
    .string()
    .email("Debe ser un email válido")
    .required("El email es obligatorio"),
  asunto: yup.string().required("El asunto es obligatorio"),
  mensaje: yup
    .string()
    .min(10, "Entre 10 y 255 caracteres")
    .max(255, "Entre 10 y 255 caracteres")
    .required("El mensaje es obligatorio"),
});
