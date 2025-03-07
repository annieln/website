import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-36">
      <p className="mb-8 max-w-md font-serif">how'd ya even get here?</p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-[#1F2421] text-(--foreground) rounded-full hover:bg-(--secondary) hover:text-[#1F2421] transition-colors font-serif"
      >
        go home
      </Link>
    </div>
  );
}