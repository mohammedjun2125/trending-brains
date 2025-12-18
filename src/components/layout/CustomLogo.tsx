// You can replace the content of this file with your own SVG logo.
// Make sure to keep the width and height attributes for proper sizing.
import Image from 'next/image';

export function CustomLogo() {
  return (
    <Image
      src="/logo.png" // Assumes your logo is named 'logo.png' in the 'public' folder
      alt="Trending Brains Logo"
      width={36}
      height={36}
      className="h-9 w-9"
    />
  );
}
