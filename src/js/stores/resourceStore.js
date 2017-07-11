import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class ResourceStore extends EventEmitter {
  constructor() {
    super();
  }

  getResource() {

  }

  handleActions(action) {
    switch(action.type) {
      case "UPDAT_RESOURCE": {
        this.error = {};
        this.emit("update_resource");
        break;
      }
    }
  }
}

const resourceStore = new ResourceStore();
dispatcher.register(resourceStore.handleActions.bind(resourceStore));
export default resourceStore;
