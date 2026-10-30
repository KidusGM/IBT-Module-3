import { ImageResponse } from "next/og";
import { getDishById } from "../menuData";

export const alt = "Addis Eats dish";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }) {
  const { id } = await params;

  const dish = getDishById(id);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f8fafc",
          color: "#111827",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 32,
            marginBottom: 20,
            color: "#16a34a",
          }}
        >
          Addis Eats
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
          }}
        >
          {dish?.name || "Ethiopian Dish"}
        </div>

        <div
          style={{
            fontSize: 32,
            marginTop: 20,
          }}
        >
          {dish ? `${dish.price.toLocaleString()} ETB` : ""}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}