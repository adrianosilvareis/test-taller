import z from 'zod';

export const validate = z.object({
  annualIncome: z.number(),
  monthlyDebt: z.number(),
  propertyValue: z.number(),
  requestedLoan: z.number(),
  creditScore: z.number()
})