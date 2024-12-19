export const sendSuscriber = async (suscriber: any) => {
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

  //   const result = await response.json();
  console.log(response);
};

// export const sendSuscriberActivated = async (suscriber: any) => {
//   const response = await fetch(
//     "https://hook.us2.make.com/59lm7k2epr9olv3ryqtfbuoovt1wvnmf",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(suscriber),
//     }
//   );

//   //   const result = await response.json();
//   console.log(response);
// };

// sendSuscriberActivated({
//   event: "subscription_activated",
//   data: {
//     subscription_id: 18286,
//     subscription_external_id: null,
//   },
// });

// sendSuscriberPaymentSuccess({
//   id: 17892,
//   interval: "3",
//   created_on: "2024-12-04T16:17:08.258510Z",
//   status: "1",
//   cicles: 1,
//   remaining_cicles: 1,
//   auto_renew_count: 1,
//   link_title: "Stevie test",
//   link_description: "Plan stevie test",
//   plan_amount: 1000,
//   is_uf: false,
//   next_due: "2025-01-04T15:00:00Z",
//   plan_id: 7195,
//   is_auto_renew: true,
//   discount_rate: 0,
//   discount_is_fixed: false,
//   discount_cicles: 0,
//   customer: {
//     id: 5618,
//     email: "marianogarmendia77@gmail.com",
//     name: "Mariano",
//   },
//   last_payment: {
//     date: "2024-12-04T16:18:11.896401Z",
//     status: "0",
//   },
//   dte_type: {},
//   subscription_custom_fields: [],
//   total_successful_payments: 1,
//   payment_method: {
//     code: null,
//     last_4_card_digits: "XXXXXXXXXXXX6623",
//     payment_method_type: "Visa",
//   },
//   external_id: null,
// });
