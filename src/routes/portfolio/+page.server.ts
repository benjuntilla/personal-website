import { VITE_BYPASS_TOKEN } from '$env/static/private';

export const config = {
  isr: {
    // one week in seconds
    expiration: 604800,
    bypassToken: VITE_BYPASS_TOKEN,
  },
};
