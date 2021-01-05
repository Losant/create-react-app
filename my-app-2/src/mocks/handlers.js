import { rest } from 'msw';
import { getTarget } from '../targets';

const urlBase = getTarget(process.env.REACT_APP_TARGET).url;

export const handlers = [
  rest.get(`${urlBase}/`, (req, res, ctx) => {
    return res(ctx.status(200));
  })
];
