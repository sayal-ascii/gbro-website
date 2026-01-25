export async function POST(request: Request) {
  const data = await request.json();

  console.log("Contact form data received:");
  console.log(data);

  return new Response(
    JSON.stringify({ message: "Message received successfully" }),
    { status: 200 }
  );
}