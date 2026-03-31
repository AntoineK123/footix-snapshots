// hooks/useBreakpoint.ts

//cette fonction renvoie si l'écran du user est plus grand que le breakpoint lg 
//permettera de changer le layout
import { useEffect, useState } from 'react';

export default function useBreakpoint(breakpoint: number = 1024): boolean {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= breakpoint);

  useEffect(() => {
    const observer: MediaQueryList = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    observer.addEventListener('change', handler);
    return () => observer.removeEventListener('change', handler);
  }, [breakpoint]);

  return isDesktop;
}