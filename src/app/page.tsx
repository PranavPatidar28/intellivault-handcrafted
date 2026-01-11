import { getServerSession } from "@/lib/session";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div>
      <div>
        Hey {session?.user.name}
      </div>
      <div>
        Email: {session?.user.email}
      </div>
    </div>
  );
}
