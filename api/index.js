//import { Hono } from 'hono'
import app from '../api.js'
import { handle } from 'hono/vercel'

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;