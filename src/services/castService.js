import Cast from "../models/Cast.js";

const create = (cast) => {
    return Cast.create(cast);
};

export default {
    create,
}