import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.example.hello({ text: "from tRPC" });

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-8 px-4 py-16">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to the Onlook interview!
          </h1>
          <p className="text-muted-foreground">
            Your task will be provided by your interviewer.
          </p>
          <p className="text-sm text-muted-foreground">
            tRPC status: {hello.greeting}
          </p>
        </div>
      </main>
    </HydrateClient>
  );
}
