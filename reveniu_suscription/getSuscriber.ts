const REVENIU_SECRET_KEY_SANDBOX = process.env.REVENIU_SECRET_KEY_SANDBOX;
const REVENIU_SECRET_KEY_PROD = process.env.REVENIU_SECRET_KEY_PROD;

const urlProd = "https://production.reveniu.com/api/v1/subscriptions";
const urlDev = "https://integration.reveniu.com/api/v1/subscriptions";

export const getSuscriberById = async (id: number) => {
  const response = await fetch(
    `https://production.reveniu.com/api/v1/subscriptions/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Reveniu-Secret-Key": `${REVENIU_SECRET_KEY_PROD}`,
      },
    }
  );
  const suscriber = await response.json();
  return suscriber;
};
