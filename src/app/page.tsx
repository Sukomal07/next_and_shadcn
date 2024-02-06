import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl text-center p-4">ShadCN</h1>
      <Button>Send</Button>
    </main>
  );
}
