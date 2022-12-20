import { useAuth } from "../utils/auth";

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <>
      <h1>Profile</h1>
      <p>Welcome!, {user.username}</p>
    </>
  );
};

export default ProfilePage;
