import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useAuth";
import { validateEmail } from "../../utils/validations";
import Input from "../common/Input";
import CheckBox from "../common/CheckBox";
import Button from "../common/Button";
import { BsArrowRight } from "react-icons/bs";
import Modal from "../common/Modal";
import { useAuth } from "../../context/AuthContext";

const LoginModal = ({
  visible,
  close,
}: {
  visible: boolean;
  close: () => void;
}) => {
  const { login } = useAuth();
  const [form, setForm] = useState({
    email: "mosa@test.com",
    password: "123456",
    keepConnected: false,
    receiveNews: false,
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const loginMutation = useLogin();

  useEffect(() => {
    if (loginMutation.isSuccess) {
      login(loginMutation.data.token);
      close();
    }
  }, [loginMutation.isSuccess]);

  const handleLogin = () => {
    const emailValid = validateEmail(form.email);
    setErrors({
      ...errors,
      email: emailValid ? "" : "Saisis une adresse e-mail valide",
    });
    if (!emailValid) return;
    loginMutation.mutate({
      email: form.email,
      password: form.password,
    });
  };

  return (
    <Modal visible={visible} close={close}>
      <div className="flex flex-col items-start justify-start gap-5">
        <div className="mb-2 flex flex-col gap-3">
          <p className="font-poppins w-2/3 text-3xl font-semibold">
            CONNECTE-TOI OU INSCRIS-TOI
          </p>
          <p className="font-poppins text-sm font-light tracking-wider">
            Profite d'un accès réservé aux membres aux produits exclusifs,
            expériences, offres et plus encore.
          </p>
        </div>
        <Input
          defaultValue={form.email}
          placeholder="Email"
          onChangeText={(value) => setForm({ ...form, email: value })}
          onBlur={() => {
            setErrors({
              ...errors,
              email: !validateEmail(form.email)
                ? `Saisis une adresse e-mail valide`
                : ``,
            });
          }}
          error={errors.email}
        />
        <Input
          defaultValue={form.password}
          placeholder="Mot de passe"
          onChangeText={(value) => setForm({ ...form, password: value })}
          onBlur={() => {
            setErrors({
              ...errors,
              email: !validateEmail(form.email)
                ? `Saisis un mot de passe valide`
                : ``,
            });
          }}
          error={errors.password}
        />
        <CheckBox
          text="Oui, je souhaite recevoir les dernières offres et nouveautés concernant les produits logo au moyen des publicités qui s'affichent sur les médias numériques en fonction de mes interactions avec adidas sur des plateformes telles que Google et Facebook. Je peux choisir de ne plus partager mes données personnelles à tout moment."
          toggle={(value) => setForm({ ...form, receiveNews: value })}
        />
        <CheckBox
          text="Rester connecté(e). S'applique à toutes les options."
          toggle={(value) => setForm({ ...form, keepConnected: value })}
        />
        <Button
          name={"CONTINUER"}
          onClick={handleLogin}
          icon={BsArrowRight}
          loading={loginMutation.isPending}
        />
      </div>
    </Modal>
  );
};

export default LoginModal;
