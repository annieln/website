import Profile from "@/components/Profile";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4 sm:gap-16">
        <div>
          <Profile />
        </div>
        <div className="space-y-6 font-serif font-stretch-ultra-expanded font-thin tracking-wider text-sm">
          <p>Welcome to my digital playground... ♪</p>
          <p>I'm a software engineer, media technologist, and computational artist living in my lovely hometown of Queens, NYC.</p>
          <p>Currently, I'm building tools for safer digital interactions at Validia. Previously, I graduated from UC Berkeley with a dual degree in Applied Mathematics and Computer Science.</p>
          <p>In my free time, I'm exploring computing tools for creative expression at the Design Tools Lab at Barnard College. My passions lie in the intersection of visual storytelling, post-digital intimacy, and open source technology.</p>
          ✦
          <p className="italic font-serif text-xs pt-6">Thanks for stopping by! This site is very much a work in progress but I really wanted my web home to be live.<br/><br/>Check back in soon, I promise there will be more to see!</p>
        </div>
      </div>
    </>
  );
}
