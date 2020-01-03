import { Request, Response } from 'express';

export default function handleApiRequest(req: Request, res: Response) {
  res.header("Content-Type", "application/json; charset=utf-8");
  res.end(`{"message": "Hello World!"}`);
}
