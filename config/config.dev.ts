// https://umijs.org/config/
import { defineConfig } from 'umi';

const SERVERIP = 'https://smart-anki-ws.onrender.com';

export default defineConfig({
  define: {
    SERVERIP: SERVERIP,
  },
});
