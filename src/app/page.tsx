import Profile from "@/components/Profile";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-y-8 sm:gap-y-0 sm:gap-x-16">
        <div>
          <Profile />
        </div>
        <div className="space-y-6 font-serif font-stretch-ultra-expanded font-thin tracking-wider text-sm row-span-2">
          <p>{`Welcome to my digital playground... ♪`}</p>
          <p>{`I'm a software engineer, media technologist, and computational artist living in my lovely hometown of Queens, NYC. Previously, I graduated from UC Berkeley with a dual degree in Applied Mathematics and Computer Science.`}</p>
          <p>{`Currently, I'm building tools for safer digital interactions at Validia. Academically, I'm exploring computing tools for creative expression at the Design Tools Lab at Barnard College, Columbia University.`}</p>
          <p>{`My passions lie in the intersection of visual storytelling, post-digital intimacy, and open source technology. In my free time, I enjoy rummaging through digital archives nostalgic of Internet culture in the early 2000s, replaying Pokemon Diamond on my Nintendo DS for the ??-th time, and eating my way through my list of restaurants saved on Beli.`}</p>
          ✦
          <p className="font-sans text-xs pt-6">{`Thanks for stopping by! This site is very much a work in progress but I really wanted my web home to be live.`}
            <br/><br/>
            {`If you're curious, I invite you to take a peek at my `} <a href="https://annieln.github.io/" className="text-(--primary) text-bold underline">old site</a> {`to see some of my work while you wait. ◡̈`}
            <br/><br/>
            {`Check back in soon, I promise there will be much more to see!`}</p>
        </div>
      </div>
    </>
  );
}
