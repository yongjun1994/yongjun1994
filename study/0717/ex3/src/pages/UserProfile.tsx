function UserProfile() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserProfile must be used whithin a UserProvider");
  }

  const { user, setUser } = context;

  return (
    <div>
      <h2>사용자 정보</h2>
      <p>이름: {user.name}</p>
      <p>나이: {user.age}</p>
      <button onClick={}></button>
    </div>
  );
}


