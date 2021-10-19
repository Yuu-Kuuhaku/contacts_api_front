import { FormControl, FormGroup } from "@angular/forms";

/**
 * Faz a verificação da senha
 *
 */
export function ValidatorConfirmPassword(group: FormGroup) {

  let strPass = group.value.password;
  let strConfPass = group.value.confirmPassword;

  if (strPass !== strConfPass) return {
    confirmPassword: true,
    message: "As senhas não conferem!"
  };
  return null;
}

