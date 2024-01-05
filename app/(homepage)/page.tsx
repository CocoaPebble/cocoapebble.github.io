import Navbar from "@/components/ui/nav";
import Image from "next/image";
import SocialMediaLink from "@/components/ui/socialMediaLink";
import { Instagram } from "lucide-react";
import SocialMediaGroup from "@/components/ui/socialMediaGroup";
import Project from "@/components/ui/project";

const Home = () => {
  return (
    <>
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="flex">
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Software developer, fullstack, and amateur astronaut.
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              I&#39;m Spencer, a software designer and entrepreneur based in New
              York City. I&#39;m the founder and CEO of Planetaria, where we
              develop technologies that empower regular people to explore space
              on their own terms.
            </p>
            <SocialMediaGroup />
          </div>
          <div className="ml-12">
            <Image
              src="/Image_20230904144221.jpg"
              alt="my cat icon"
              width={1000}
              height={1000}
              className="rounded"
            />
          </div>
        </div>
      </div>

      <Project />
    </>
  );
};

export default Home;
