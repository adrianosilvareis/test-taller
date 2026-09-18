import { Router, Request, Response } from 'express';
import { validate } from './input.validate';

// import { DecisionEvaluate } from './evaluate.service';

export const evaluate = Router()

evaluate.post('/decision ', (req: Request, res: Response) => {
  // const decision = new DecisionEvaluate();
  const valid = validate.safeParse(req.body);
  console.log(valid)
  if (valid.error) {
    res.status(400).json(valid.error.message)
  }

  res.status(200).json('test')

  // decision.execute(req.body)
});