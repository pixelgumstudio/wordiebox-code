// "use client"
// // components/ScrollToTop.ts
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

// const useScrollToTop = () => {
//   const router = useRouter();

//   useEffect(() => {
//     if (typeof window !== 'undefined') { // Ensure this code runs only in the browser
//       const handleRouteChange = () => {
//         window.scrollTo(0, 0);
//       };

//       router.events.on('routeChangeComplete', handleRouteChange);

//       // Cleanup on unmount
//       return () => {
//         router.events.off('routeChangeComplete', handleRouteChange);
//       };
//     }
//   }, [router]);
// };

// export default useScrollToTop;
