import Image from "next/image";

const heroScreens = [
  {
    className: "hero-screen-main",
    src: "/app-screenshots/01-shape-every-journey-together.png",
    alt: "Wandr helps travelers shape every journey together",
    sizes: "(max-width: 800px) 34vw, 17vw",
    priority: true,
  },
  {
    className: "hero-screen-left-inner",
    src: "/app-screenshots/02-discover-and-plan.png",
    alt: "Wandr discovery map and place planning screens",
    sizes: "(max-width: 800px) 29vw, 15vw",
    priority: false,
  },
  {
    className: "hero-screen-right-inner",
    src: "/app-screenshots/03-discover-places.png",
    alt: "Discover places, trips, stays, friends, and chats with Wandr",
    sizes: "(max-width: 800px) 29vw, 15vw",
    priority: false,
  },
  {
    className: "hero-screen-left-outer",
    src: "/app-screenshots/04-plan-with-friends.png",
    alt: "Wandr group planning, itinerary, and people screens",
    sizes: "(max-width: 800px) 24vw, 12vw",
    priority: false,
  },
  {
    className: "hero-screen-right-outer",
    src: "/app-screenshots/05-keep-the-journey-close.png",
    alt: "Wandr keeps travel plans and friends close throughout a journey",
    sizes: "(max-width: 800px) 24vw, 12vw",
    priority: false,
  },
];

export function HeroScreenshots() {
  return (
    <div className="hero-screenshots" role="group" aria-label="Discover, plan, and share journeys with Wandr">
      {heroScreens.map((screen) => (
        <figure className={`hero-screen ${screen.className}`} key={screen.src}>
          <Image
            src={screen.src}
            alt={screen.alt}
            width={1320}
            height={2868}
            sizes={screen.sizes}
            priority={screen.priority}
          />
        </figure>
      ))}
    </div>
  );
}
