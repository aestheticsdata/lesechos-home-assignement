import data from "@/app/api/data";

function delayResponse(delayMs = 1000) {
  return new Promise(resolve => setTimeout(resolve, delayMs));
}

export async function GET() {
  await delayResponse();
  return Response.json(data);
}
