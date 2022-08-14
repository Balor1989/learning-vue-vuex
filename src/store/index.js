import { createStore, createLogger } from "vuex";
import counter from "./counter";

export default createStore({ plugins: [createLogger()], modules: { counter } });
