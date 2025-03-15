import React from 'react';
import Image from 'next/image';
import TamaNotchi from './TamaNotchi';

const Profile = () => {

  return (
    <>
      <h1 className="font-serif text-3xl font-bold">annie lin</h1>
      <div className="flex flex-col pt-4 w-full">
        <div className="relative w-full aspect-3/2">
          <Image
            src="/images/baby.jpg"
            alt="photo of annie lin"
            fill
            sizes="100%"
            style={{ objectFit: 'cover' }}
            priority={true}
          />
        </div>
      </div>
      <div className="flex flex-col font-sans text-xs py-4">
        <p>
          <span className="font-bold">mood:</span> feeling creative!
        </p>
        <p>
          <span className="font-bold">last online:</span> 03-15-2025
        </p>
      </div>
      
      {/* Virtual Pets! */}
      <div className="flex flex-col items-center gap-3 px-6 py-4 border-2 border-dashed border-(--primary) rounded-sm">
        <p className="font-bold font-serif text-xs">
          ~ meet my virtual pets ~
        </p>
        <div className="w-fit flex sm:flex-col xl:flex-row justify-content gap-8">
          <TamaNotchi
            name='umeshu'
            src='https://tamanotchi.world/i2/20776'
            link='https://tamanotchi.world/20776c'
          />
          <TamaNotchi
            name='kopiko'
            src='https://tamanotchi.world/i2/20460'
            link='https://tamanotchi.world/20460c'
          />
        </div>
      </div>
    </>
  );
};

export default Profile;