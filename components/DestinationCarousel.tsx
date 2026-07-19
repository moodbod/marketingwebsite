const destinations = [
  {
    name: "Cape Town",
    region: "South Africa",
    image: "/cape-town-coast.png",
  },
  {
    name: "Kyoto",
    region: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Amalfi",
    region: "Italy",
    image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Marrakech",
    region: "Morocco",
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Reykjavík",
    region: "Iceland",
    image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Lisbon",
    region: "Portugal",
    image: "/lisbon-tram.png",
  },
  {
    name: "Bali",
    region: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Patagonia",
    region: "Argentina",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=85",
  },
];

const loopDestinations = [...destinations, ...destinations];

export function DestinationCarousel() {
  return (
    <section className="destinations" id="destinations" aria-labelledby="destination-title">
      <div className="destination-heading section-pad">
        <div>
          <p className="kicker">PLACES WORTH GOING TO</p>
          <h2 id="destination-title">Where will you go next?</h2>
        </div>
      </div>
      <div className="destination-track">
        {loopDestinations.map((destination, index) => (
          <article className="destination-card" key={`${destination.name}-${index}`}>
            <img src={destination.image} alt={`${destination.name}, ${destination.region}`} />
            <div className="destination-meta">
              <h3>{destination.name}</h3>
              <p>{destination.region}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
