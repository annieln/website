import React from 'react';
import Image from 'next/image';

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
          <span className="font-bold">mood:</span> zzz...
        </p>
        <p>
          <span className="font-bold">last online:</span> march 10, 2025
        </p>
      </div>
    </>
  );
};

export default Profile;