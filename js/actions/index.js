import debounce from "debounce-promise";

const getUserDataFn = username => {
  return fetch(`https://api.github.com/users/${username}`).then(res =>
    res.json()
  );
};

const getUserData = debounce(getUserDataFn, 700);

const updateUsername = username => (state, actions) => {
  getUserData(username).then(actions.setUserData);
  return { username };
};

const setUserData = userData => state => ({ userData });

const action = { updateUsername, setUserData };

export default action;
