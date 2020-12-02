import Vuex, { createLogger } from "vuex";
import CONTACTS from "./modules/contacts-page";
import PROGRESSBAR from "./modules/progressbar";

const debug = process.env.NODE_ENV !== 'production'

const loggerOptions = {
  collapsed: false,
}

export default new Vuex.Store({
  modules: {
    PROGRESSBAR,
    CONTACTS
  },
  plugins: debug ? [createLogger(loggerOptions)] : []
});
