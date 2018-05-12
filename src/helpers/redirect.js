import {history} from "./index";

export const redirectTo = (path) => {
    history.push(path);
};