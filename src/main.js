import App from 'fusion-react';
import Root from './components/root';
// styling
import HelmetPlugin from 'fusion-plugin-react-helmet-async';

export default async function start() {
  const app = new App(Root);
  app.register(HelmetPlugin);
  return app;
}