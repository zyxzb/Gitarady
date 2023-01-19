import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
} from '../utils/actions';

const global_reducer = (state, action) => {

  // start of sidebar

  if (action.type === SIDEBAR_OPEN) {
    return {
      ...state,
      isSidebarOpen: true
    }
  }
  if (action.type === SIDEBAR_CLOSE) {
    return {
      ...state,
      isSidebarOpen: false
    }
  }
  // end of sidebar

}
export default global_reducer