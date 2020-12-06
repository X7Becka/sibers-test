import Vuex, { createLogger } from "vuex";
import CONTACTS from "./modules/contacts-page";
import MEMORY from "./modules/memory-page";
import PROGRESSBAR from "./modules/progressbar";

const debug = process.env.NODE_ENV !== 'production'

const loggerOptions = {
  collapsed: false,
  logActions: false
}

export default new Vuex.Store({
  modules: {
    PROGRESSBAR,
    CONTACTS,
    MEMORY
  },
  plugins: debug ? [createLogger(loggerOptions)] : []
});
