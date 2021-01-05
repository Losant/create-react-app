import { rest } from "msw";
import getTarget from "../targets.js";

const urlBase = getTarget(process.env.REACT_APP_TARGET);

export const handlers = [
  rest.get(`${API_BASE_URL}/sample`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({"status":"ok"}));
  })
];