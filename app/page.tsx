"use client";

const WA = "60166256738";

export default function Home() {
  function sendFlightEnquiry() {
    const from = (document.getElementById("flight-from") as HTMLInputElement)?.value || "Kuala Lumpur (KUL)";
    const to = (document.getElementById("flight-to") as HTMLInputElement)?.value || "Dhaka (DAC)";
    const departure = (document.getElementById("flight-date") as HTMLInputElement)?.value || "Not specified";
    const passengers = (document.getElementById("flight-passengers") as HTMLSelectElement)?.value || "1";
    const message = `Assalamu Alaikum, I would like to enquire about a flight.\n\nFrom: ${from}\nTo: ${to}\nDeparture: ${departure}\nPassengers: ${passengers}\n\nPlease provide the best available fare.`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(message)}`, "_blank");
  }

  const tours = [
    ["Malaysia Tour", "Kuala Lumpur", "KLCC, Petronas Twin Towers, Batu Caves and KL Tower.", "Half Day / Full Day"],
    ["Highland Tour", "Cameron Highlands", "Strawberry farms, tea plantations and cool mountain views.", "Full Day"],
    ["Island Tour", "Langkawi", "Island hopping, cable car, Sky Bridge and beautiful beaches.", "Full Day / Multi-Day"],
    ["Mountain Tour", "Genting Highlands", "Cable car, attractions and scenic mountain views.", "Full Day"],
    ["Heritage Tour", "Malacca", "Jonker Street, A Famosa, Dutch Square and heritage sites.", "Full Day"],
    ["Island Tour", "Pangkor Island", "Beautiful beaches, island views and a peaceful tropical escape.", "Full Day / Multi-Day"],
    ["Highland Tour", "Penang Hill", "Funicular railway, panoramic views and cool mountain weather.", "Full Day"],
    ["City Tour", "Putrajaya", "Putra Mosque, Putrajaya Lake and impressive government buildings.", "Half Day / Full Day"],
  ];

  const visas = [
    ["🇹🇭", "Thailand Visa", "POPULAR", "Tourist visa assistance, document checking and application guidance."],
    ["🇸🇬", "Singapore Visa", "POPULAR", "Professional support for Singapore tourist visa applications and document preparation."],
    ["🇨🇳", "China Visa", "TOURIST VISA", "Tourist visa support and document guidance for travellers visiting China."],
    ["🌏", "Other Visas", "WORLDWIDE", "Visa assistance for selected destinations worldwide."],
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home"><img src="/mw-logo.jpeg" alt="MIAH WORLD TRAVELS & TOURS" className="h-14 w-14 object-contain" /></a>
          <nav className="hidden items-center gap-8 font-medium md:flex">
            <a href="#home" className="hover:text-blue-600">Home</a><a href="#services" className="hover:text-blue-600">Services</a><a href="#tours" className="hover:text-blue-600">Tours</a><a href="#visa" className="hover:text-blue-600">Visa</a><a href="#flights" className="hover:text-blue-600">Flights</a><a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <a href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer" className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white shadow-md hover:bg-blue-700">WhatsApp</a>
        </div>
      </header>

      <section id="home" className="relative min-h-[650px] overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://www.sangfor.com/sites/default/files/inline-images/Cyberattack-on-Kuala-Lumpur-International-Airport.jpg)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20" />
        <div className="absolute right-[-4%] top-[12%] hidden h-[430px] w-[48%] overflow-hidden rounded-3xl md:block">
          <img src="https://assets.nst.com.my/images/articles/airside-MS1307_NSTfield_image_socialmedia.var_1563018167.jpg" alt="Malaysia Airlines aircraft flying" className="h-full w-full object-cover opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-950/50" />
        </div>
        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-24 text-white">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.3em]">FLYWITHMIA</p>
            <h1 className="mt-5 text-5xl font-extrabold leading-tight md:text-7xl">Your Flight Starts With Us</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 md:text-xl">Domestic & international flight tickets with competitive fares, professional booking assistance, visa support, hotel booking and private tours.</p>
            <div className="mt-9 flex flex-wrap gap-4"><a href="#flights" className="rounded-full bg-blue-600 px-7 py-4 font-bold text-white shadow-lg hover:bg-blue-700">Book Flight Ticket</a><a href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer" className="rounded-full border-2 border-white px-7 py-4 font-bold text-white hover:bg-white/10">Contact Us</a></div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="font-bold uppercase tracking-widest text-blue-600">What We Do</p><h2 className="mt-2 text-4xl font-extrabold">Our Services</h2></div><div className="mt-10 grid gap-6 md:grid-cols-4">{[["✈️","Flight Tickets","Domestic and international flight booking assistance."],["🛂","Visa Assistance","Tourist visa and travel document support."],["🏨","Hotel Booking","Hotel booking for business and leisure trips."],["🚐","Private Tours","Private, family and group tours across Malaysia."]].map(([icon,title,text])=><div key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm"><div className="text-3xl">{icon}</div><h3 className="mt-5 text-xl font-extrabold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div>)}</div></div></section>

      <section id="flights" className="bg-slate-50 px-6 py-20"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="font-bold uppercase tracking-widest text-blue-600">FLIGHT BOOKING</p><h2 className="mt-2 text-4xl font-extrabold">Find Your Flight</h2><p className="mt-4 text-lg text-slate-600">Tell us your travel details and our team will find the best available fare.</p></div><div className="mx-auto mt-10 max-w-5xl rounded-3xl bg-white p-7 shadow-xl ring-1 ring-slate-200 md:p-10"><div className="grid gap-5 md:grid-cols-4"><label className="font-semibold">From<input id="flight-from" defaultValue="Kuala Lumpur (KUL)" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal" /></label><label className="font-semibold">To<input id="flight-to" defaultValue="Dhaka (DAC)" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal" /></label><label className="font-semibold">Departure<input id="flight-date" type="date" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal" /></label><label className="font-semibold">Passengers<select id="flight-passengers" defaultValue="1" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal"><option value="1">1 Passenger</option><option value="2">2 Passengers</option><option value="3">3 Passengers</option><option value="4">4 Passengers</option><option value="5+">5+ Passengers</option></select></label></div><div className="mt-8 flex flex-col gap-5 border-t border-slate-200 pt-7 md:flex-row md:items-center md:justify-between"><div><h3 className="text-xl font-extrabold">Need a better fare?</h3><p className="mt-1 text-slate-600">Send us your details and we will assist you on WhatsApp.</p></div><button onClick={sendFlightEnquiry} className="rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg hover:bg-blue-700">Search & Enquire</button></div></div><div className="mt-10 grid gap-5 md:grid-cols-3">{[["Kuala Lumpur → Dhaka","KUL → DAC"],["Kuala Lumpur → Bangkok","KUL → BKK"],["Kuala Lumpur → Singapore","KUL → SIN"]].map(([route,code])=><div key={route} className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200"><p className="text-sm font-bold uppercase text-blue-600">Popular Route</p><h3 className="mt-2 text-xl font-bold">{route}</h3><p className="mt-2 text-slate-600">{code}</p></div>)}</div></div></section>

      <section id="tours" className="px-6 py-20"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="font-bold uppercase tracking-widest text-blue-600">Explore Malaysia</p><h2 className="mt-2 text-4xl font-extrabold">Tour Packages</h2><p className="mt-4 text-lg text-slate-600">Private • Family • Group Tours</p></div><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{tours.map(([category,title,description,duration])=><div key={title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="flex h-32 items-end bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-6 text-white"><div><p className="text-xs font-bold uppercase tracking-widest">{category}</p><h3 className="mt-2 text-2xl font-extrabold">{title}</h3></div></div><div className="p-6"><p className="leading-7 text-slate-600">{description}</p><p className="mt-4 text-sm font-semibold">Duration: {duration}</p><a href={`https://wa.me/${WA}?text=${encodeURIComponent(`Assalamu Alaikum, I would like to enquire about ${title} tour.`)}`} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-blue-600 px-5 py-3 font-bold text-white">Enquire Now</a></div></div>)}</div></div></section>

      <section id="visa" className="bg-slate-50 px-6 py-20"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="font-bold uppercase tracking-widest text-blue-600">VISA SERVICES</p><h2 className="mt-2 text-4xl font-extrabold">Visa Assistance Made Simple</h2><p className="mt-4 text-lg text-slate-600">Document checking, application guidance and travel visa support.</p></div><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{visas.map(([icon,title,label,description])=><div key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="flex items-center justify-between"><div className="rounded-2xl bg-blue-50 px-4 py-3 text-3xl">{icon}</div><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-blue-700">{label}</span></div><h3 className="mt-6 text-2xl font-extrabold">{title}</h3><p className="mt-3 min-h-20 leading-7 text-slate-600">{description}</p><a href={`https://wa.me/${WA}?text=${encodeURIComponent(`Assalamu Alaikum, I would like to enquire about ${title}.`)}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full justify-center rounded-full bg-blue-600 px-5 py-3.5 font-bold text-white">Enquire on WhatsApp →</a></div>)}</div><div className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"><div className="grid gap-6 md:grid-cols-3"><div><p className="font-extrabold uppercase tracking-widest text-blue-600">OUR SUPPORT</p><h3 className="mt-2 text-2xl font-extrabold">What we can help with</h3></div><div className="space-y-2 text-slate-700"><p>✓ Document checking & guidance</p><p>✓ Application preparation support</p></div><div className="space-y-2 text-slate-700"><p>✓ Travel document assistance</p><p>✓ WhatsApp consultation</p></div></div></div></div></section>

      <section id="contact" className="bg-slate-900 px-6 py-20 text-white"><div className="mx-auto max-w-7xl"><h2 className="text-4xl font-extrabold">Contact MIAH WORLD TRAVELS & TOURS</h2><div className="mt-8 space-y-3 text-slate-300"><p><strong className="text-white">📍 Shop Address:</strong><br />A-LG, 05, Sungai Besi Serdang Perdana,<br />Taman Serdang Perdana, 43300 Seri Kembangan, Selangor</p><p><strong className="text-white">📞 WhatsApp:</strong> 0166256738</p><p><strong className="text-white">📧 Email:</strong> miahworld53@gmail.com</p><p><strong className="text-white">🌐 Website:</strong> www.miahworldtravels.com</p><p className="pt-3 text-lg">FLYWITHMIA</p></div></div></section>
      <footer className="bg-black px-6 py-8 text-center text-white">© 2026 MIAH WORLD TRAVELS & TOURS. All Rights Reserved.</footer>
    </main>
  );
}
