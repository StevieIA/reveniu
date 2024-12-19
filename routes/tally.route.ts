import { Router, Request, Response } from "express";
import { Parser } from "json2csv";
import fs from "fs";

export const tallyRouter = Router();

tallyRouter.post("/tally/submission", async (req: Request, res: Response) => {
  console.log("Webhook received: Tally submission");
  //   console.log("--------------------");
  console.log(req.body);

  //   console.log(req.headers);
  //   console.log("--------------------");

  //   console.log(req.params);
  //   console.log("--------------------");

  //   console.log(req.body);
  //   const { fields } = req.body.data;

  //   console.log("Fields:");
  //   console.log(fields);
  //   console.log("--------------------");

  //   fields.forEach((field: any) => {
  //     console.log("Field:");
  //     console.log(field);
  //   });
  res.send("Webhook received");
});
