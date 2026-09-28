import { CONTAINER, Pill, PrimaryButton, SecondaryButton } from "@/components/ui";

export const metadata = { title: "Page Not Found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="w-full bg-cream-bg py-space-xl">
      <div className={`${CONTAINER} flex flex-col items-center text-center`}>
        <Pill>Error 404</Pill>
        <h1 className="font-display-lg text-[34px] leading-[42px] sm:text-display-lg text-espresso-dark font-bold tracking-tight">This Cup Is Empty</h1>
        <p className="font-headline-md text-headline-md text-primary italic mt-2">We couldn&apos;t find that page.</p>
        <div className="flex flex-wrap justify-center gap-space-md mt-space-md">
          <PrimaryButton href="/" icon="home">Back Home</PrimaryButton>
          <SecondaryButton href="/menu/" icon="menu_book">See the Menu</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
