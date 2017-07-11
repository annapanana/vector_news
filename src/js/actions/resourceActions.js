import dispatcher from "../dispatcher";
import * as Helpers from "../helpers";

export function UpdateResource(data) {
  // Data:
  Helpers.restCall(
    'resource',
    'UPDATE',
    data
  )
}
