'use client';
import dynamic from 'next/dynamic';

// Dynamically import to skip SSR (WebGL/canvas require the browser)
const Lanyard = dynamic(() => import('./Lanyard'), { ssr: false });

export default function LanyardLoader() {
  // fov=20 keeps card at its natural size; z=20 is the default depth
  return <Lanyard position={[0, 0, 20]} gravity={[0, -20, 0]} fov={20} />;
}
