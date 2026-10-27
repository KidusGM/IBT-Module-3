
import { cookies } from "next/headers";

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  if (!session) {
    return null;
  }

  if (session === "demo-user-1") {
    return {
      userId: "demo-user-1",
      role: "customer",
    };
  }

  if (session === "demo-staff-1") {
    return {
      userId: "demo-staff-1",
      role: "staff",
    };
  }

  return null;
}
