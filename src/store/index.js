import Vuex, { createLogger } from "vuex";
import CONTACTS from "./modules/contacts-page";

const debug = process.env.NODE_ENV !== 'production'

const loggerOptions = {
  collapsed: false,
}

export default new Vuex.Store({
  modules: {
    CONTACTS
  },
  plugins: debug ? [createLogger(loggerOptions)] : []
});
