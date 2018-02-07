import { app } from "hyperapp";

import state from "./state";
import actions from "./actions";
import view from "./components";

import "../css/main.sass";

app(state, actions, view, document.getElementById("root"));
