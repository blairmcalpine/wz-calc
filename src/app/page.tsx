import Link from "next/link";
import { GitHub } from "~/components/icons/github";
import { Table } from "~/components/table";
import { Card, CardDescription, CardTitle } from "~/components/ui/card";

export default function HomePage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center">
      <Card className="flex min-h-dvh flex-col gap-8 p-6 md:min-h-fit md:gap-10 md:p-8">
        <div className="flex flex-col gap-1.5">
          <CardTitle className="text-4xl md:text-5xl">
            Warzone Point Calculator
          </CardTitle>
          <CardDescription className="text-lg">
            Using a match point threshold of{" "}
            <span className="font-medium text-primary">150</span>
          </CardDescription>
        </div>
        <Table />
        <Link
          className="text-md flex w-full items-center justify-center gap-3 tracking-tight text-muted-foreground"
          href="https://github.com/blairmcalpine"
          target="_blank"
        >
          Created by Blair McAlpine
          <GitHub className="inline-block h-6 w-6" fill="currentColor" />
        </Link>
      </Card>
    </main>
  );
}
