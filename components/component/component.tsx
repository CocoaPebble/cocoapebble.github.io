/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/QF0SSjNZ89D
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import Image from "next/image";

export function Component() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Yingzhou Jiang
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <div className="md:col-span-4">
              <Image
                alt="John Doe"
                className="object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                height={900}
                src="https://placehold.co/600x400"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                My Projects
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Here are some of the projects I`&apos`ve worked on.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Project 1</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 border-y py-4">
                <p className="text-sm/relaxed">
                  This is a brief description of Project 1.
                </p>
                <Image
                  alt="Project 1"
                  className="aspect-[3/2] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                  height={200}
                  src="https://placehold.co/600x400"
                  width={300}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project 2</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 border-y py-4">
                <p className="text-sm/relaxed">
                  This is a brief description of Project 2.
                </p>
                <Image
                  alt="Project 2"
                  className="aspect-[3/2] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                  height={200}
                  src="https://placehold.co/600x400"
                  width={300}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project 3</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 border-y py-4">
                <p className="text-sm/relaxed">
                  This is a brief description of Project 3.
                </p>
                <Image
                  alt="Project 3"
                  className="aspect-[3/2] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                  height={200}
                  src="https://placehold.co/600x400"
                  width={300}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
