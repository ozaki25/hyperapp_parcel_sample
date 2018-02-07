import { h } from "hyperapp";

const view = (state, actions) => (
  <main>
    <div>Search github users:</div>
    <input
      type="text"
      className="searchInput"
      value={state.username}
      oninput={e => actions.updateUsername(e.target.value)}
    />
    <br />
    <div className="userCard">
      {state.userData ? (
        <div>
          <img class="userCard__img" src={state.userData.avatar_url} />
          <div class="userCard__name">{state.userData.name}</div>
          <div class="userCard__location">{state.userData.location}</div>
        </div>
      ) : (
        <div>👆 search 'em</div>
      )}
    </div>
  </main>
);

export default view;
