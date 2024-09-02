import Hero from "../sections/hero";
import Cards from "../sections/cards";
import ErrorBoundary from "../functions/ErrorBoundary";

export default function Home() {
  return (
    <main className="">
      <div className="">
      {/* <ErrorBoundary> */}
      <Hero />
      <Cards />
      {/* </ErrorBoundary> */}
      </div>
    </main>
  );
}

