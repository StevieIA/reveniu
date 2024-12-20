import { Router, Request, Response } from "express";
import { Parser } from "json2csv";
import fs from "fs";
import { log } from "console";

export const tallyRouter = Router();

tallyRouter.post("/tally/submission", async (req: Request, res: Response) => {
  console.log("Webhook received: Tally submission");
  //   console.log("--------------------");
  console.log(req.body);

  const { fields } = req.body.data;

  let name = fields[0].value;
  let mail = fields[1].value;

  const cliente_prueba_gratis = {
    id: 777, // ID del suscriptor en reveniu
    interval: "3",
    created_on: new Date().toISOString(),
    status: "1",
    cicles: 1,
    remaining_cicles: 1,
    auto_renew_count: 1,
    link_title: "Stevie Plan Standard",
    link_description: "Stevie Plan Standard (Prueba gratis 15 dias)",
    plan_amount: 1000,
    is_uf: false,
    next_due: "2025-01-04T15:00:00Z",
    plan_id: 7195,
    is_auto_renew: true,
    discount_rate: 0,
    discount_is_fixed: false,
    discount_cicles: 0,

    customer: {
      id: "",
      email: mail,
      name: name,
    },
    last_payment: {
      date: new Date().toISOString(),
      status: "0",
    },
    dte_type: {},
    subscription_custom_fields: [],
    total_successful_payments: 1,
    payment_method: {
      code: null,
      last_4_card_digits: "XXXXXXXXXXXX6623",
      payment_method_type: "Visa",
    },
    external_id: null,
  };
  sendPruebaGratis(cliente_prueba_gratis);
  res.send("Webhook received");
});

const sendPruebaGratis = async (suscriber: any) => {
  try {
    const response = await fetch(
      "https://hook.us2.make.com/od7uhgy8su8khn3y5stby9hi9q6hwehq",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(suscriber),
      }
    );
    if (!response.ok) {
      throw new Error("Error sending prueba gratis to Tally");
    }
  } catch (error) {
    console.log("Error sending prueba gratis to Tally");
    console.log(error);
  }
};
