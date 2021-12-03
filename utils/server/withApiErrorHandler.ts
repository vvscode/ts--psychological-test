import type { NextApiRequest, NextApiResponse } from "next";

export function withApiErrorHandler(
  handler: (_req: NextApiRequest, _res: NextApiResponse<any>) => void
) {
  return async (req: NextApiRequest, res: NextApiResponse<any>) => {
    try {
      await handler(req, res);
    } catch (error: any) {
      console.error(`Error from ${req.method} on ${req.url}`, error);
      res.status(500).send(error.message || "Internal Server Error");
    }
  };
}
