import express from 'express';
import {validate} from './evaluate/input.validate'

const app = express();


app.use(express.json());

app.post('/api/evaluate/decision ', (req, res) => {
  // const decision = new DecisionEvaluate();
  const valid = validate.safeParse(req.body);
  console.log(valid)
  if (valid.error) {
    res.status(400).json(valid.error.message)
  }

  res.status(200).json('test')

  // decision.execute(req.body)
});


app.listen(3000, () => {
  console.log("server listen on PORT: 3000")
})