import Button from "../components/common/Button";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { logout, token } = useAuth();
  return (
    <div className="flex flex-col items-start gap-6 p-8">
      <p className="font-poppins text-4xl font-bold">Profile</p>
      <p className="font-poppins font-regular">{token}</p>
      <Button name="Se déconnecter" onClick={logout} />
    </div>
  );
}

export default Profile;
