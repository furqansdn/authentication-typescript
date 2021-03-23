import { Router } from 'express';

const route = Router();

export default (app: Router) => {
  app.use('/auth', route);

  route.post('/signin', (req, res) => {
    res.status(200).json(req.body);
  });
};
