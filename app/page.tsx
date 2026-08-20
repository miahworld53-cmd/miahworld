"use client";

export default function Home() {
  function sendFlightEnquiry() {
    const from = (document.getElementById("flight-from") as HTMLInputElement).value;
    const to = (document.getElementById("flight-to") as HTMLInputElement).value;
    const departure = (document.getElementById("flight-date") as HTMLInputElement).value;
    const passengers = (document.getElementById("flight-passengers") as HTMLSelectElement).value;

    const message =
      `Assalamu Alaikum, I would like to enquire about a flight.\n\n` +
      `From: ${from}\n` +
      `To: ${to}\n` +
      `Departure: ${departure}\n` +
      `Passengers: ${passengers}\n\n` +
      `Please provide the best available fare.`;

    window.open(`https://wa.me/60166256738?text=${encodeURIComponent(message)}`, "_blank");
  }

  const tourCards = [
    { category: "Malaysia Tour", title: "Kuala Lumpur", description: "Explore KLCC, Petronas Twin Towers, Batu Caves, KL Tower and other popular attractions in Kuala Lumpur.", duration: "Half Day / Full Day", highlights: "KLCC, Petronas Twin Towers, Batu Caves, KL Tower", gradient: "from-blue-600 to-cyan-500" },
    { category: "Highland Tour", title: "Cameron Highlands", description: "Enjoy strawberry farms, tea plantations, scenic mountain views and the cool weather of Cameron Highlands.", duration: "Full Day", highlights: "Strawberry Farm, Tea Plantation, Scenic Mountain Views", gradient: "from-green-600 to-emerald-400" },
    { category: "Island Tour", title: "Langkawi", description: "Discover beautiful beaches, island hopping, cable car rides, Sky Bridge and unforgettable island experiences.", duration: "Full Day / Multi-Day", highlights: "Island Hopping, Cable Car, Sky Bridge, Beautiful Beaches", gradient: "from-sky-600 to-blue-500" },
    { category: "Mountain Tour", title: "Genting Highlands", description: "Enjoy the cable car, Genting attractions, scenic mountain views and a relaxing day away from Kuala Lumpur.", duration: "Full Day", highlights: "Cable Car, Genting Attractions, Scenic Mountain Views", gradient: "from-purple-600 to-pink-500" },
    { category: "Heritage Tour", title: "Malacca", description: "Explore Jonker Street, A Famosa, Dutch Square, historical sites and the beautiful heritage of Malacca.", duration: "Full Day", highlights: "Jonker Street, A Famosa, Dutch Square, Heritage Sites", gradient: "from-red-600 to-orange-500" },
    { category: "Island Tour", title: "Pangkor Island", description: "Relax on beautiful beaches, enjoy island scenery and discover the peaceful tropical charm of Pangkor Island.", duration: "Full Day / Multi-Day", highlights: "Pangkor Beaches, Island Views, Local Attractions", gradient: "from-teal-600 to-cyan-400" },
    { category: "Highland Tour", title: "Penang Hill", description: "Enjoy cool mountain weather, panoramic views, the funicular railway and the beautiful surroundings of Penang Hill.", duration: "Full Day", highlights: "Penang Hill, Funicular Railway, Panoramic Views", gradient: "from-indigo-600 to-violet-500", image: "https://fasttur.ru/assets/images/illustration2/funicular_penang.jpg" },
    { category: "City Tour", title: "Putrajaya", description: "Visit the Pink Mosque, Putrajaya Lake, beautiful bridges and Malaysia's impressive administrative city.", duration: "Half Day / Full Day", highlights: "Putra Mosque, Putrajaya Lake, Government Buildings", gradient: "from-cyan-600 to-teal-500", image: "https://res.cloudinary.com/dk0ndttcl/image/upload/q_auto%3Aeco/v1/stw/rs0rrf9jro6qmzqg1gu6" },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center"><img src="/mw-logo.jpeg" alt="MIAH WORLD TRAVELS & TOURS" className="h-14 w-14 object-contain" /></a>
          <nav className="hidden items-center gap-8 font-medium md:flex">
            <a href="#home" className="hover:text-blue-600">Home</a><a href="#services" className="hover:text-blue-600">Services</a><a href="#tours" className="hover:text-blue-600">Tours</a><a href="#visa" className="hover:text-blue-600">Visa</a><a href="#flights" className="hover:text-blue-600">Flights</a><a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white">WhatsApp</a>
        </div>
      </header>

      {/* FLIGHT-FOCUSED HERO */}
      <section id="home" className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2400&q=85)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/65 to-blue-900/25" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 text-white md:py-36">
          <p className="font-bold uppercase tracking-widest">Your Journey, Our Passion</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">Your Flight Starts With Us</h1>
          <p className="mt-6 max-w-2xl text-xl">Domestic & international flight tickets with competitive fares, visa assistance, hotel booking and private tours.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#flights" className="rounded-full bg-blue-600 px-7 py-4 font-bold text-white shadow-lg hover:bg-blue-700">Book Flight Ticket</a>
            <a href="#contact" className="rounded-full border-2 border-white px-7 py-4 font-bold text-white hover:bg-white/10">Contact Us</a>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-7xl"><h2 className="text-4xl font-extrabold">Our Services</h2><div className="mt-10 grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl bg-slate-100 p-6"><h3 className="text-xl font-bold">Flight Tickets</h3><p className="mt-3 text-slate-600">Domestic and international flight booking assistance.</p></div>
          <div className="rounded-2xl bg-slate-100 p-6"><h3 className="text-xl font-bold">Visa Assistance</h3><p className="mt-3 text-slate-600">Tourist visa and travel documentation support.</p></div>
          <div className="rounded-2xl bg-slate-100 p-6"><h3 className="text-xl font-bold">Hotel Booking</h3><p className="mt-3 text-slate-600">Comfortable hotel booking for your journey.</p></div>
          <div className="rounded-2xl bg-slate-100 p-6"><h3 className="text-xl font-bold">Private Tours</h3><p className="mt-3 text-slate-600">Family, group and private tours across Malaysia.</p></div>
        </div></div>
      </section>

      <section id="tours" className="bg-slate-50 px-6 py-20"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="font-bold uppercase tracking-widest text-blue-600">Explore Malaysia</p><h2 className="mt-3 text-4xl font-extrabold text-slate-900">Tour Packages</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Discover Malaysia with our private, family and group tour packages.</p></div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{tourCards.map((tour) => (<div key={tour.title} className="overflow-hidden rounded-2xl bg-white shadow-lg">
          {tour.image ? <div className="relative h-56 overflow-hidden"><img src={tour.image} alt={`${tour.title} tour`} className="h-full w-full object-cover" loading="lazy" /><div className="absolute inset-0 bg-black/20" /><div className="absolute inset-x-0 bottom-0 p-6 text-white"><p className="text-sm font-bold uppercase tracking-widest">{tour.category}</p><h3 className="mt-2 text-3xl font-extrabold drop-shadow">{tour.title}</h3></div></div> : <div className={`bg-gradient-to-r ${tour.gradient} px-6 py-10 text-white`}><p className="text-sm font-bold uppercase tracking-widest">{tour.category}</p><h3 className="mt-3 text-3xl font-extrabold">{tour.title}</h3></div>}
          <div className="p-6"><p className="text-slate-600">{tour.description}</p><p className="mt-4 font-semibold text-slate-900">Private • Family • Group Tour</p><div className="mt-4 space-y-2 text-sm text-slate-600"><p><strong>Tour Type:</strong> Private, Family & Group</p><p><strong>Duration:</strong> {tour.duration}</p><p><strong>Highlights:</strong> {tour.highlights}</p></div><a href={`https://wa.me/60166256738?text=${encodeURIComponent(`Assalamu Alaikum, I would like to enquire about ${tour.title} tour packages.`)}`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700">Enquire Now</a></div>
        </div>))}</div>
        <div className="mt-12 text-center"><p className="text-lg font-semibold text-slate-700">Looking for a customized tour?</p><a href="https://wa.me/60166256738?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20plan%20a%20customized%20tour." target="_blank" rel="noopener noreferrer" className="mt-4 inline-block rounded-full bg-green-500 px-8 py-4 font-bold text-white shadow-lg hover:bg-green-600">📱 Plan My Tour on WhatsApp</a></div>
      </div></section>

      <section id="visa" className="bg-white px-6 py-20"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="font-bold uppercase tracking-widest text-blue-600">Visa Services</p><h2 className="mt-3 text-4xl font-extrabold text-slate-900 md:text-5xl">Visa Assistance</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Get professional assistance with tourist visas, travel documents and visa applications.</p></div><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[["🇨🇳","China Visa","Tourist visa assistance and document guidance for China."],["🇹🇭","Thailand Visa","Visa application support and document checking for Thailand."],["🇸🇬","Singapore Visa","Professional assistance for Singapore tourist visa applications."],["🌍","Other Visas","Travel visa assistance for selected destinations worldwide."]].map(([icon,title,description])=><div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"><div className="text-4xl">{icon}</div><h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3><p className="mt-3 text-slate-600">{description}</p><a href={`https://wa.me/60166256738?text=${encodeURIComponent(`Assalamu Alaikum, I would like to enquire about ${title}.`)}`} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block rounded-full bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700">Enquire on WhatsApp</a></div>)}
      </div><div className="mt-12 text-center"><a href="https://wa.me/60166256738?text=Assalamu%20Alaikum%2C%20I%20would%20like%20visa%20assistance." target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-green-500 px-8 py-4 font-bold text-white shadow-lg hover:bg-green-600">💬 Need Visa Assistance? Contact Us</a></div></div></section>

      <section id="flights" className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-6 py-20"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="font-bold uppercase tracking-widest text-blue-600">FLIGHT BOOKING</p><h2 className="mt-3 text-4xl font-extrabold text-slate-900 md:text-5xl">Find Your Next Flight</h2><p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">Domestic and international flight tickets with competitive fares and professional booking assistance.</p></div>
        <div className="mx-auto mt-12 max-w-5xl rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200 md:p-10"><div className="mb-8 flex flex-wrap gap-6"><label className="flex items-center gap-2 font-semibold text-slate-800"><input type="radio" name="trip" defaultChecked className="h-4 w-4" />Round Trip</label><label className="flex items-center gap-2 font-semibold text-slate-800"><input type="radio" name="trip" className="h-4 w-4" />One Way</label></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"><div><label className="mb-2 block text-sm font-bold text-slate-700">From</label><input id="flight-from" type="text" placeholder="Kuala Lumpur (KUL)" className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none" /></div><div><label className="mb-2 block text-sm font-bold text-slate-700">To</label><input id="flight-to" type="text" placeholder="Dhaka (DAC)" className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none" /></div><div><label className="mb-2 block text-sm font-bold text-slate-700">Departure</label><input id="flight-date" type="date" className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none" /></div><div><label className="mb-2 block text-sm font-bold text-slate-700">Passengers</label><select id="flight-passengers" className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none" defaultValue="1">{Array.from({ length: 9 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1} Passenger{i ? "s" : ""}</option>)}</select></div></div><div className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-slate-200 pt-8 md:flex-row"><div><h3 className="text-xl font-bold text-slate-900">Need a better fare?</h3><p className="mt-1 text-slate-600">Send us your travel details and our team will assist you.</p></div><button type="button" onClick={sendFlightEnquiry} className="inline-flex rounded-full bg-blue-600 px-8 py-4 font-bold text-white">Search & Enquire</button></div></div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">{[["Kuala Lumpur → Dhaka","KUL → DAC"],["Kuala Lumpur → Bangkok","KUL → BKK"],["Kuala Lumpur → Singapore","KUL → SIN"]].map(([route,code])=><div key={route} className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200"><p className="text-sm font-bold uppercase tracking-wide text-blue-600">Popular Route</p><h3 className="mt-2 text-xl font-bold text-slate-900">{route}</h3><p className="mt-2 text-slate-600">{code}</p></div>)}</div>
      </div></section>

      <section id="contact" className="bg-slate-900 px-6 py-20 text-white"><div className="mx-auto max-w-7xl"><h2 className="text-4xl font-extrabold">Contact MIAH WORLD TRAVELS & TOURS</h2><div className="mt-8 space-y-3 text-slate-300"><p><strong className="text-white">📍 Shop Address:</strong><br />A-LG, 05, Sungai Besi Serdang Perdana,<br />Taman Serdang Perdana, 43300 Seri Kembangan, Selangor</p><p><strong className="text-white">📞 WhatsApp:</strong> 0166256738</p><p><strong className="text-white">📧 Email:</strong> miahworld53@gmail.com</p><p><strong className="text-white">📘 Facebook:</strong> <a href="https://www.facebook.com/miahworld1102" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">MIAH WORLD TRAVELS & TOURS</a></p><p><strong className="text-white">🎵 TikTok:</strong> <a href="https://www.tiktok.com/@miahworld0" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@miahworld0</a></p><p><strong className="text-white">🌐 Website:</strong> <a href="https://www.miahworldtravels.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">www.miahworldtravels.com</a></p><p className="mt-5 text-lg text-slate-300">Your Journey, Our Passion.</p></div></div></section>
      <footer className="bg-black px-6 py-8 text-center text-white"><p>© 2026 MIAH WORLD TRAVELS & TOURS. All Rights Reserved.</p></footer>
    </main>
  );
}
