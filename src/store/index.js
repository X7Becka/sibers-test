import Vuex, {createLogger} from 'vuex'
import CONTACTS from '@/store/modules/contacts-page'
import MEMORY from '@/store/modules/memory-page'
import PROGRESSBAR from '@/store/modules/progressbar'

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
})
