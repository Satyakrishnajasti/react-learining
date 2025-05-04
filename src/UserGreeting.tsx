interface UserGreeting {
  isLoggedIn: boolean;
  userName: string;
}

export function UserGreeting(props: UserGreeting) {
  if (props.isLoggedIn) {
    return <h2>Welcome {props.userName}</h2>;
  } else {
    return <h2>Please log in to continue</h2>;
  }
}

export default UserGreeting;
