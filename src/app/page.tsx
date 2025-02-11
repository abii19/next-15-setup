import Image from "next/image";

export default function Home() {
  return (
    <div className="container grid min-h-screen items-center justify-center gap-16 py-10">
      <main className="flex flex-col items-center gap-8">
        <Image className="" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
        <ol className="list-inside list-decimal text-sm">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="rounded px-1 py-0.5 font-semibold text-foreground/30 transition hover:text-foreground">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </main>
    </div>
  );
}
