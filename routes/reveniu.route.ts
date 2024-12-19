import { Router, Request, Response } from "express";
import { getSuscriberById } from "../reveniu_suscription/getSuscriber";
import { sendSuscriber } from "../reveniu_suscription/sendSuscriber";
const REVENIU_SECRET_KEY_SANDBOX = process.env.REVENIU_SECRET_KEY_SANDBOX;
const REVENIU_SECRET_KEY_PROD = process.env.REVENIU_SECRET_KEY_PROD;
export const reveniuRouter = Router();

// Endpoint de escucha para las suscripciones y bajas de REVENIU
reveniuRouter.post("/webhook/subscription", async (req, res): Promise<any> => {
  const headers = req.headers;
  const { data } = req.body;
  const reveniuSecretKey = headers["reveniu-secret-key"];
  if (reveniuSecretKey !== REVENIU_SECRET_KEY_PROD) {
    return res.status(401).send("Unauthorized");
  }
  console.log("Webhook received: after reveniu secret key ");
  console.log(data);

  const { event } = data;

  if (event === "subscription_payment_succeeded") {
    console.log("Suscription payment success! before get suscriber ");
    console.log(data);

    const { subscription_id } = data.data;
    const suscriber = await getSuscriberById(subscription_id);
    console.log("Suscription payment success! after get suscriber ");
    await sendSuscriber(suscriber);
  }

  if (event === "subscription_activated") {
    console.log("Suscription activated! before get suscriber ");
    //   console.log(data);

    const { subscription_id } = data.data;
    const suscriber = await getSuscriberById(subscription_id);

    console.log("Suscription activated! after get suscriber ");
    console.log("Susciptor activated: ");
    console.log(suscriber);

    await sendSuscriber(suscriber);
  }

  res.send("Webhook received");
});
