import { useAuth } from "../utils/auth";

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <>
      <h1>Profile</h1>
      <p>Welcome!, {user.name}</p>
    </>
  );
};

export default ProfilePage;
