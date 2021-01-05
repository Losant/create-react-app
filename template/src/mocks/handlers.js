import { rest } from 'msw';
import targets from '../targets.json';

const urlBase = targets[process.env.REACT_APP_TARGET].url;

export const handlers = [
  rest.get(`${urlBase}/`, (req, res, ctx) => {
    return res(ctx.status(200));
  })
];
