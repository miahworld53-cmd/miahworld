"use client";

const WA = "60166256738";

const serviceCards = [
  ["✈️", "Flight Tickets", "Domestic and international flight booking assistance.", "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80"],
  ["🛂", "Visa Assistance", "Tourist visa and travel document support.", "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=900&q=80"],
  ["🏨", "Hotel Booking", "Hotel booking for business and leisure trips.", "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80"],
  ["🚐", "Private Tours", "Private, family and group tours across Malaysia.", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80"],
];

const tours = [
  ["Malaysia Tour", "Kuala Lumpur", "KLCC, Petronas Twin Towers, Batu Caves and KL Tower.", "Half Day / Full Day", "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=80"],
  ["Highland Tour", "Cameron Highlands", "Strawberry farms, tea plantations and cool mountain views.", "Full Day", "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1000&q=80"],
  ["Island Tour", "Langkawi", "Island hopping, cable car, Sky Bridge and beautiful beaches.", "Full Day / Multi-Day", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"],
  ["Mountain Tour", "Genting Highlands", "Cable car, attractions and scenic mountain views.", "Full Day", "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"],
  ["Heritage Tour", "Malacca", "Jonker Street, A Famosa, Dutch Square and heritage sites.", "Full Day", "https://images.unsplash.com/photo-1602052577122-f73b9710adba?auto=format&fit=crop&w=1000&q=80"],
  ["Island Tour", "Pangkor Island", "Beautiful beaches, island views and a peaceful tropical escape.", "Full Day / Multi-Day", "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80"],
  ["Highland Tour", "Penang Hill", "Funicular railway, panoramic views and cool mountain weather.", "Full Day", "https://storage.googleapis.com/accesstravel-media/attractions/13003/photos/13003_5230946.jpg"],
  ["City Tour", "Putrajaya", "Putra Mosque, Putrajaya Lake and impressive government buildings.", "Half Day / Full Day", "https://ak-d.tripcdn.com/images/0102w12000mqoquz48AF6.jpg"],
];

const visas = [
  ["🇹🇭", "Thailand Visa", "POPULAR", "Tourist visa assistance, document checking and application guidance.", "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80"],
  ["🇸🇬", "Singapore Visa", "POPULAR", "Professional support for Singapore tourist visa applications and document preparation.", "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80"],
  ["🇨🇳", "China Visa", "TOURIST VISA", "Tourist visa support and document guidance for travellers visiting China.", "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=900&q=80"],
  ["🌏", "Other Visas", "WORLDWIDE", "Visa assistance for selected destinations worldwide. Ask our team about your destination.", "https://images.unsplash.com/photo-1553531889-56a9b7eae4c0?auto=format&fit=crop&w=900&q=80"],
];

const routes = [
  ["Kuala Lumpur → Dhaka", "KUL → DAC"],
  ["Kuala Lumpur → Bangkok", "KUL → BKK"],
  ["Kuala Lumpur → Singapore", "KUL → SIN"],
  ["Kuala Lumpur → Jakarta", "KUL → CGK"],
  ["Kuala Lumpur → Jeddah", "KUL → JED"],
  ["Kuala Lumpur → Kathmandu", "KUL → KTM"],
];

export default function Home() {
  function sendFlightEnquiry() {
    const from = (document.getElementById("flight-from") as HTMLInputElement)?.value || "Kuala Lumpur (KUL)";
    const to = (document.getElementById("flight-to") as HTMLInputElement)?.value || "Dhaka (DAC)";
    const departure = (document.getElementById("flight-date") as HTMLInputElement)?.value || "Not specified";
    const returnDate = (document.getElementById("flight-return") as HTMLInputElement)?.value || "One way / Not specified";
    const passengers = (document.getElementById("flight-passengers") as HTMLSelectElement)?.value || "1";
    const message = `Assalamu Alaikum, I would like to enquire about a flight.\n\nFrom: ${from}\nTo: ${to}\nDeparture: ${departure}\nReturn: ${returnDate}\nPassengers: ${passengers}\n\nPlease provide the best available fare.`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home"><img src="/mw-logo.jpeg" alt="MIAH WORLD TRAVELS & TOURS" className="h-14 w-14 object-contain" /></a>
          <nav className="hidden items-center gap-8 font-medium md:flex">
            <a href="#home" className="hover:text-blue-600">Home</a><a href="#services" className="hover:text-blue-600">Services</a><a href="#tours" className="hover:text-blue-600">Tours</a><a href="#visa" className="hover:text-blue-600">Visa</a><a href="#flights" className="hover:text-blue-600">Flights</a><a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer" className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white shadow-md hover:bg-blue-700">WhatsApp</a>
            <details className="relative md:hidden">
              <summary className="cursor-pointer list-none rounded-xl border border-slate-200 px-3 py-2 text-xl">☰</summary>
              <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
                {[["Home","#home"],["Services","#services"],["Tours","#tours"],["Visa","#visa"],["Flights","#flights"],["Contact","#contact"]].map(([name,href])=><a key={name} href={href} className="block rounded-xl px-4 py-3 hover:bg-slate-50">{name}</a>)}
              </div>
            </details>
          </div>
        </div>
      </header>

      <section id="home" className="relative min-h-[650px] overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://www.sangfor.com/sites/default/files/inline-images/Cyberattack-on-Kuala-Lumpur-International-Airport.jpg)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20" />
        <div className="absolute right-[-4%] top-[14%] hidden h-[430px] w-[48%] overflow-hidden rounded-3xl shadow-2xl md:block">
          <img src="https://assets.nst.com.my/images/articles/airside-MS1307_NSTfield_image_socialmedia.var_1563018167.jpg" alt="Malaysia Airlines aircraft" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-950/55" />
        </div>
        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-24 text-white">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.3em] text-blue-200">FLYWITHMIA</p>
            <h1 className="mt-5 text-5xl font-extrabold leading-tight md:text-7xl">Your Flight Starts With Us</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 md:text-xl">Domestic & international flight tickets with competitive fares, professional booking assistance, visa support, hotel booking and private tours.</p>
            <div className="mt-9 flex flex-wrap gap-4"><a href="#flights" className="rounded-full bg-blue-600 px-7 py-4 font-bold text-white shadow-lg hover:bg-blue-700">Book Flight Ticket</a><a href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer" className="rounded-full border-2 border-white px-7 py-4 font-bold text-white hover:bg-white/10">Contact Us</a></div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="font-bold uppercase tracking-widest text-blue-600">What We Do</p><h2 className="mt-2 text-4xl font-extrabold">Our Services</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Everything you need for a smoother journey, from tickets and visas to hotels and private tours.</p></div><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{serviceCards.map(([icon,title,text,image])=><div key={title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><img src={image} alt={title} className="h-44 w-full object-cover" /><div className="p-7"><div className="text-3xl">{icon}</div><h3 className="mt-4 text-xl font-extrabold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p><a href={`https://wa.me/${WA}?text=${encodeURIComponent(`Assalamu Alaikum, I would like to enquire about ${title}.`)}`} target="_blank" rel="noreferrer" className="mt-5 inline-block font-bold text-blue-600">Learn more →</a></div></div>)}</div></div></section>

      <section id="flights" className="bg-slate-50 px-6 py-20"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="font-bold uppercase tracking-widest text-blue-600">FLIGHT BOOKING</p><h2 className="mt-2 text-4xl font-extrabold">Find Your Flight</h2><p className="mt-4 text-lg text-slate-600">Tell us your travel details and our team will find the best available fare.</p></div><div className="mx-auto mt-10 max-w-6xl rounded-3xl bg-white p-7 shadow-xl ring-1 ring-slate-200 md:p-10"><div className="rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-4 text-sm font-extrabold uppercase tracking-widest text-white">✈ MIAH WORLD | FLIGHT TICKETING</div><div className="mt-7 flex flex-wrap gap-6 font-semibold"><label className="flex items-center gap-2"><input type="radio" name="trip" defaultChecked /> Round Trip</label><label className="flex items-center gap-2"><input type="radio" name="trip" /> One Way</label></div><div className="mt-7 grid gap-5 md:grid-cols-5"><label className="font-semibold">From<input id="flight-from" defaultValue="Kuala Lumpur (KUL)" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-500" /></label><label className="font-semibold">To<input id="flight-to" defaultValue="Dhaka (DAC)" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-500" /></label><label className="font-semibold">Departure<input id="flight-date" type="date" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-500" /></label><label className="font-semibold">Return<input id="flight-return" type="date" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-500" /></label><label className="font-semibold">Passengers<select id="flight-passengers" defaultValue="1" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-500"><option value="1">1 Passenger</option><option value="2">2 Passengers</option><option value="3">3 Passengers</option><option value="4">4 Passengers</option><option value="5+">5+ Passengers</option></select></label></div><div className="mt-8 flex flex-col gap-5 border-t border-slate-200 pt-7 md:flex-row md:items-center md:justify-between"><div><h3 className="text-xl font-extrabold">Need a better fare?</h3><p className="mt-1 text-slate-600">Send us your details and we will assist you on WhatsApp.</p></div><button onClick={sendFlightEnquiry} className="rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg hover:bg-blue-700">Search & Enquire</button></div></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{routes.map(([route,code])=><div key={route} className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200"><p className="text-sm font-bold uppercase text-blue-600">Popular Route</p><h3 className="mt-2 text-xl font-bold">{route}</h3><p className="mt-2 text-slate-600">{code}</p><a href={`https://wa.me/${WA}?text=${encodeURIComponent(`Assalamu Alaikum, I need a fare for ${route}.`)}`} target="_blank" rel="noreferrer" className="mt-4 inline-block font-bold text-blue-600">Enquire fare →</a></div>)}</div></div></section>

      <section className="bg-white px-6 py-16"><div className="mx-auto max-w-7xl"><div className="grid gap-6 md:grid-cols-4"><div className="rounded-3xl bg-blue-50 p-7 text-center"><p className="text-4xl font-extrabold text-blue-600">10+</p><p className="mt-2 font-semibold">Years of Travel Experience</p></div><div className="rounded-3xl bg-blue-50 p-7 text-center"><p className="text-4xl font-extrabold text-blue-600">4</p><p className="mt-2 font-semibold">Core Travel Services</p></div><div className="rounded-3xl bg-blue-50 p-7 text-center"><p className="text-4xl font-extrabold text-blue-600">8+</p><p className="mt-2 font-semibold">Malaysia Tour Options</p></div><div className="rounded-3xl bg-blue-50 p-7 text-center"><p className="text-4xl font-extrabold text-blue-600">24/7</p><p className="mt-2 font-semibold">WhatsApp Enquiry</p></div></div></div></section>

      <section id="tours" className="px-6 py-20"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="font-bold uppercase tracking-widest text-blue-600">Explore Malaysia</p><h2 className="mt-2 text-4xl font-extrabold">Tour Packages</h2><p className="mt-4 text-lg text-slate-600">Private • Family • Group Tours</p></div><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{tours.map(([category,title,description,duration,image])=><div key={title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><img src={image} alt={title} className="h-44 w-full object-cover" /><div className="bg-gradient-to-r from-blue-700 to-cyan-500 p-6 text-white"><p className="text-xs font-bold uppercase tracking-widest">{category}</p><h3 className="mt-2 text-2xl font-extrabold">{title}</h3></div><div className="p-6"><p className="leading-7 text-slate-600">{description}</p><p className="mt-4 text-sm font-semibold">Duration: {duration}</p><a href={`https://wa.me/${WA}?text=${encodeURIComponent(`Assalamu Alaikum, I would like to enquire about ${title} tour.`)}`} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-blue-600 px-5 py-3 font-bold text-white">Enquire Now</a></div></div>)}</div></div></section>

      <section id="visa" className="bg-slate-50 px-6 py-20"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="font-bold uppercase tracking-widest text-blue-600">VISA SERVICES</p><h2 className="mt-2 text-4xl font-extrabold">Visa Assistance Made Simple</h2><p className="mt-4 text-lg text-slate-600">Passport, visa document checking, application guidance and travel support.</p></div><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{visas.map(([icon,title,label,description,image])=><div key={title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><img src={image} alt={`${title} travel documents`} className="h-40 w-full object-cover" /><div className="p-7"><div className="flex items-center justify-between"><div className="rounded-2xl bg-blue-50 px-4 py-3 text-3xl">{icon}</div><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-blue-700">{label}</span></div><h3 className="mt-6 text-2xl font-extrabold">{title}</h3><p className="mt-3 min-h-20 leading-7 text-slate-600">{description}</p><a href={`https://wa.me/${WA}?text=${encodeURIComponent(`Assalamu Alaikum, I would like to enquire about ${title}.`)}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full justify-center rounded-full bg-blue-600 px-5 py-3.5 font-bold text-white">Enquire on WhatsApp →</a></div></div>)}</div><div className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"><div className="grid gap-6 md:grid-cols-3"><div><p className="font-extrabold uppercase tracking-widest text-blue-600">OUR SUPPORT</p><h3 className="mt-2 text-2xl font-extrabold">What we can help with</h3></div><div className="space-y-2 text-slate-700"><p>✓ Passport & document checking</p><p>✓ Application preparation support</p></div><div className="space-y-2 text-slate-700"><p>✓ Travel document assistance</p><p>✓ WhatsApp consultation</p></div></div></div></div></section>

      <section className="px-6 py-20"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="font-bold uppercase tracking-widest text-blue-600">WHY MIAH WORLD</p><h2 className="mt-2 text-4xl font-extrabold">Travel With Confidence</h2></div><div className="mt-10 grid gap-6 md:grid-cols-3"><div className="rounded-3xl border border-slate-200 p-8"><div className="text-4xl">🤝</div><h3 className="mt-5 text-xl font-extrabold">Personal Assistance</h3><p className="mt-3 leading-7 text-slate-600">Talk directly with our team for ticketing, visa and tour enquiries.</p></div><div className="rounded-3xl border border-slate-200 p-8"><div className="text-4xl">💙</div><h3 className="mt-5 text-xl font-extrabold">Professional Service</h3><p className="mt-3 leading-7 text-slate-600">Clear guidance and practical travel support from enquiry to booking.</p></div><div className="rounded-3xl border border-slate-200 p-8"><div className="text-4xl">🌏</div><h3 className="mt-5 text-xl font-extrabold">One Travel Partner</h3><p className="mt-3 leading-7 text-slate-600">Flights, visas, hotels and private tours in one convenient place.</p></div></div></div></section>

      <section className="bg-blue-600 px-6 py-16 text-white"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left"><div><p className="font-bold uppercase tracking-widest text-blue-100">READY TO TRAVEL?</p><h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Let MIAH WORLD plan your next journey.</h2></div><a href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer" className="rounded-full bg-white px-8 py-4 font-extrabold text-blue-700 shadow-lg">Chat on WhatsApp →</a></div></section>

      <section id="contact" className="bg-slate-950 px-6 py-20 text-white"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4"><div className="lg:col-span-2"><h2 className="text-4xl font-extrabold">Contact MIAH WORLD TRAVELS & TOURS</h2><p className="mt-5 max-w-xl leading-7 text-slate-300">Your trusted travel partner for flight tickets, visa assistance, hotel booking and private tours in Malaysia.</p><div className="mt-7 flex flex-wrap gap-3"><a href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer" className="rounded-full bg-green-500 px-5 py-3 font-bold text-white">WhatsApp Us</a><a href="https://www.google.com/maps/search/?api=1&query=Miah+World+Travels+Tours+Seri+Kembangan" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-5 py-3 font-bold">Open Map</a></div></div><div><h3 className="text-lg font-extrabold">Visit Us</h3><p className="mt-4 leading-7 text-slate-300">A-LG, 05, Sungai Besi Serdang Perdana,<br />Taman Serdang Perdana,<br />43300 Seri Kembangan, Selangor</p><p className="mt-4 text-slate-300">Mon – Sat: 10:00 AM – 7:00 PM</p></div><div><h3 className="text-lg font-extrabold">Quick Contact</h3><div className="mt-4 space-y-3 text-slate-300"><p>📞 <a href="tel:+60166256738" className="hover:text-white">016-625 6738</a></p><p>📧 <a href="mailto:miahworld53@gmail.com" className="hover:text-white">miahworld53@gmail.com</a></p><p>🌐 miahworldtravels.com</p><p className="pt-3 text-lg font-bold text-white">FLYWITHMIA</p></div></div></div></section>

      <footer className="bg-black px-6 py-8 text-center text-sm text-slate-400"><p>© 2026 MIAH WORLD TRAVELS & TOURS. All Rights Reserved.</p><div className="mt-3 flex justify-center gap-5"><a href="#home" className="hover:text-white">Home</a><a href="#visa" className="hover:text-white">Visa</a><a href="#flights" className="hover:text-white">Flights</a><a href="#contact" className="hover:text-white">Contact</a></div></footer>
    </main>
  );
}
