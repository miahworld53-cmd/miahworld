"use client";
export default function Home() {
  function sendFlightEnquiry() {
  const from = (document.getElementById("flight-from") as HTMLInputElement).value;
const to = (document.getElementById("flight-to") as HTMLInputElement).value;
const departure = (document.getElementById("flight-date") as HTMLInputElement).value;
const passengers = (document.getElementById("flight-passengers") as HTMLSelectElement).value;

const fromCode = from.trim().toUpperCase();
const toCode = to.trim().toUpperCase();

const fromName =
  fromCode === "KUL" ? "Kuala Lumpur (KUL)" :
  fromCode === "DAC" ? "Dhaka (DAC)" :
  from;

const toName =
  toCode === "KUL" ? "Kuala Lumpur (KUL)" :
  toCode === "DAC" ? "Dhaka (DAC)" :
  to;
  

  const message =
    `Assalamu Alaikum, I would like to enquire about a flight.\n\n` +
    `From: ${from}\n` +
    `To: ${to}\n` +
    `Departure: ${departure}\n` +
    `Passengers: ${passengers}\n\n` +
    `Please provide the best available fare.`;

  window.open(
    `https://wa.me/60166256738?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <a href="#home" className="flex items-center">
            <img
              src="/mw-logo.jpeg"
              alt="MIAH WORLD TRAVELS & TOURS"
              className="h-14 w-14 object-contain"
            />
          </a>

          <nav className="hidden items-center gap-8 font-medium md:flex">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#tours" className="hover:text-blue-600">Tours</a>
            <a href="#
            " className="hover:text-blue-600">Visa</a>
            <a href="#flights" className="hover:text-blue-600">Flights</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white"
          >
            WhatsApp
          </a>

        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500"
      >
        <div className="mx-auto max-w-7xl px-6 py-32 text-white">

          <p className="font-bold uppercase tracking-widest">
            Your Journey, Our Passion
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
            Explore Malaysia & Beyond With Us
          </h1>

          <p className="mt-6 max-w-2xl text-xl">
            Flight tickets, visa assistance, hotel booking and private tours
            — all in one place.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#tours"
              className="rounded-full bg-white px-7 py-4 font-bold text-blue-600"
            >
              Explore Tours
            </a>

            <a
              href="#contact"
              className="rounded-full border-2 border-white px-7 py-4 font-bold text-white"
            >
              Contact Us
            </a>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-4xl font-extrabold">
            Our Services
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">

            <div className="rounded-2xl bg-slate-100 p-6">
              <h3 className="text-xl font-bold">Flight Tickets</h3>
              <p className="mt-3 text-slate-600">
                Domestic and international flight booking assistance.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <h3 className="text-xl font-bold">Visa Assistance</h3>
              <p className="mt-3 text-slate-600">
                Tourist visa and travel documentation support.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <h3 className="text-xl font-bold">Hotel Booking</h3>
              <p className="mt-3 text-slate-600">
                Comfortable hotel booking for your journey.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <h3 className="text-xl font-bold">Private Tours</h3>
              <p className="mt-3 text-slate-600">
                Family, group and private tours across Malaysia.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TOURS */}
<section id="tours" className="bg-slate-50 px-6 py-20">
  <div className="mx-auto max-w-7xl">

    <div className="text-center">
      <p className="font-bold uppercase tracking-widest text-blue-600">
        Explore Malaysia
      </p>

      <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
        Tour Packages
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
        Discover Malaysia with our private, family and group tour packages.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* Kuala Lumpur */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-10 text-white">
          <p className="text-sm font-bold uppercase tracking-widest">
            Malaysia Tour
          </p>
          <h3 className="mt-3 text-3xl font-extrabold">
            Kuala Lumpur
          </h3>
        </div>

        <div className="p-6">
          <p className="text-slate-600">
            Explore KLCC, Petronas Twin Towers, Batu Caves, KL Tower and
            other popular attractions in Kuala Lumpur.
          </p>

          <p className="mt-4 font-semibold text-slate-900">
            Private • Family • Group Tour
          </p><div className="mt-4 space-y-2 text-sm text-slate-600">
  <p><strong>Tour Type:</strong> Private, Family & Group</p>
  <p><strong>Duration:</strong> Half Day / Full Day</p>
  <p><strong>Highlights:</strong> KLCC, Petronas Twin Towers, Batu Caves, KL Tower</p>
</div>

          <a
            href="https://wa.me/60166256738?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20enquire%20about%20Kuala%20Lumpur%20tour%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            Enquire Now
          </a>
        </div>
      </div>

      {/* Cameron Highlands */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="bg-gradient-to-r from-green-600 to-emerald-400 px-6 py-10 text-white">
          <p className="text-sm font-bold uppercase tracking-widest">
            Highland Tour
          </p>
          <h3 className="mt-3 text-3xl font-extrabold">
            Cameron Highlands
          </h3>
        </div>

        <div className="p-6">
          <p className="text-slate-600">
            Enjoy strawberry farms, tea plantations, scenic mountain views
            and the cool weather of Cameron Highlands.
          </p>

          <p className="mt-4 font-semibold text-slate-900">
            Private • Family • Group Tour
          </p> <div className="mt-4 space-y-2 text-sm text-slate-600">
  <p><strong>Tour Type:</strong> Private, Family & Group</p>
  <p><strong>Duration:</strong> Full Day</p>
  <p><strong>Highlights:</strong> Strawberry Farm, Tea Plantation, Scenic Mountain Views</p>
</div>

          <a
            href="https://wa.me/60166256738?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20enquire%20about%20Cameron%20Highlands%20tour%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            Enquire Now
          </a>
        </div>
      </div>

      {/* Langkawi */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="bg-gradient-to-r from-sky-600 to-blue-500 px-6 py-10 text-white">
          <p className="text-sm font-bold uppercase tracking-widest">
            Island Tour
          </p>
          <h3 className="mt-3 text-3xl font-extrabold">
            Langkawi
          </h3>
        </div>

        <div className="p-6">
          <p className="text-slate-600">
            Discover beautiful beaches, island hopping, cable car rides,
            Sky Bridge and unforgettable island experiences.
          </p>

          <p className="mt-4 font-semibold text-slate-900">
            Private • Family • Group Tour
          </p><div className="mt-4 space-y-2 text-sm text-slate-600">
  <p><strong>Tour Type:</strong> Private, Family & Group</p>
  <p><strong>Duration:</strong> Full Day / Multi-Day</p>
  <p><strong>Highlights:</strong> Island Hopping, Cable Car, Sky Bridge, Beautiful Beaches</p>
</div>

          <a
            href="https://wa.me/60166256738?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20enquire%20about%20Langkawi%20tour%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            Enquire Now
          </a>
        </div>
      </div>

      {/* Genting Highlands */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-10 text-white">
          <p className="text-sm font-bold uppercase tracking-widest">
            Mountain Tour
          </p>
          <h3 className="mt-3 text-3xl font-extrabold">
            Genting Highlands
          </h3>
        </div>

        <div className="p-6">
          <p className="text-slate-600">
            Enjoy the cable car, Genting attractions, scenic mountain views
            and a relaxing day away from Kuala Lumpur.
          </p>

          <p className="mt-4 font-semibold text-slate-900">
            Private • Family • Group Tour
          </p><div className="mt-4 space-y-2 text-sm text-slate-600">
  <p><strong>Tour Type:</strong> Private, Family & Group</p>
  <p><strong>Duration:</strong> Full Day</p>
  <p><strong>Highlights:</strong> Cable Car, Genting Attractions, Scenic Mountain Views</p>
</div>

          <a
            href="https://wa.me/60166256738?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20enquire%20about%20Genting%20Highlands%20tour%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            Enquire Now
          </a>
        </div>
      </div>

      {/* Malacca */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-10 text-white">
          <p className="text-sm font-bold uppercase tracking-widest">
            Heritage Tour
          </p>
          <h3 className="mt-3 text-3xl font-extrabold">
            Malacca
          </h3>
        </div>

        <div className="p-6">
          <p className="text-slate-600">
            Explore Jonker Street, A Famosa, Dutch Square, historical sites
            and the beautiful heritage of Malacca.
          </p>

          <p className="mt-4 font-semibold text-slate-900">
            Private • Family • Group Tour
          </p>

          <a
            href="https://wa.me/60166256738?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20enquire%20about%20Malacca%20tour%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            Enquire Now
          </a>
        </div>
      </div>

      {/* Putrajaya */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="bg-gradient-to-r from-cyan-600 to-teal-500 px-6 py-10 text-white">
          <p className="text-sm font-bold uppercase tracking-widest">
            City Tour
          </p><div className="mt-4 space-y-2 text-sm text-slate-600">
  <p><strong>Tour Type:</strong> Private, Family & Group</p>
  <p><strong>Duration:</strong> Half Day / Full Day</p>
  <p><strong>Highlights:</strong> Putra Mosque, Putrajaya Lake, Government Buildings</p>
</div>
          <h3 className="mt-3 text-3xl font-extrabold">
            Putrajaya
          </h3>
        </div>

        <div className="p-6">
          <p className="text-slate-600">
            Visit the Pink Mosque, Putrajaya Lake, beautiful bridges and
            Malaysia's impressive administrative city.
          </p>

          <p className="mt-4 font-semibold text-slate-900">
            Private • Family • Group Tour
          </p>

          <a
            href="https://wa.me/60166256738?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20enquire%20about%20Putrajaya%20tour%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            Enquire Now
          </a>
        </div>
      </div>

    </div>

    <div className="mt-12 text-center">
      <p className="text-lg font-semibold text-slate-700">
        Looking for a customized tour?
      </p>

      <a
        href="https://wa.me/60166256738?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20plan%20a%20customized%20tour."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block rounded-full bg-green-500 px-8 py-4 font-bold text-white shadow-lg hover:bg-green-600"
      >
        📱 Plan My Tour on WhatsApp
      </a>
    </div>

  </div>
</section>
     {/* VISA */}
{/* VISA */}
<section id="visa" className="bg-white px-6 py-20">
  <div className="mx-auto max-w-7xl">

    <div className="text-center">
      <p className="font-bold uppercase tracking-widest text-blue-600">
        Visa Services
      </p>

      <h2 className="mt-3 text-4xl font-extrabold text-slate-900 md:text-5xl">
        Visa Assistance
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
        Get professional assistance with tourist visas, travel documents
        and visa applications.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {/* China Visa */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="text-4xl">🇨🇳</div>

        <h3 className="mt-4 text-xl font-bold text-slate-900">
          China Visa
        </h3>

        <p className="mt-3 text-slate-600">
          Tourist visa assistance and document guidance for China.
        </p>

        <a
          href="https://wa.me/60166256738?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20enquire%20about%20China%20Visa."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-full bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700"
        >
          Enquire on WhatsApp
        </a>
      </div>

      {/* Thailand Visa */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="text-4xl">🇹🇭</div>

        <h3 className="mt-4 text-xl font-bold text-slate-900">
          Thailand Visa
        </h3>

        <p className="mt-3 text-slate-600">
          Visa application support and document checking for Thailand.
        </p>

        <a
          href="https://wa.me/60166256738?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20enquire%20about%20Thailand%20Visa."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-full bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700"
        >
          Enquire on WhatsApp
        </a>
      </div>

      {/* Singapore Visa */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="text-4xl">🇸🇬</div>

        <h3 className="mt-4 text-xl font-bold text-slate-900">
          Singapore Visa
        </h3>

        <p className="mt-3 text-slate-600">
          Professional assistance for Singapore tourist visa applications.
        </p>

        <a
          href="https://wa.me/60166256738?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20enquire%20about%20Singapore%20Visa."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-full bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700"
        >
          Enquire on WhatsApp
        </a>
      </div>

      {/* Other Visas */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="text-4xl">🌍</div>

        <h3 className="mt-4 text-xl font-bold text-slate-900">
          Other Visas
        </h3>

        <p className="mt-3 text-slate-600">
          Travel visa assistance for selected destinations worldwide.
        </p>

        <a
          href="https://wa.me/60166256738?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20enquire%20about%20a%20visa."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-full bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700"
        >
          Enquire on WhatsApp
        </a>
      </div>

    </div>

    {/* Main CTA */}
    <div className="mt-12 text-center">
      <a
        href="https://wa.me/60166256738?text=Assalamu%20Alaikum%2C%20I%20would%20like%20visa%20assistance."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full bg-green-500 px-8 py-4 font-bold text-white shadow-lg hover:bg-green-600"
      >
        💬 Need Visa Assistance? Contact Us
      </a>
    </div>

  </div>
</section>


      {/* FLIGHTS */}
<section id="flights" className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-6 py-20">
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="text-center">
      <p className="font-bold uppercase tracking-widest text-blue-600">
        FLIGHT BOOKING
      </p>

      <h2 className="mt-3 text-4xl font-extrabold text-slate-900 md:text-5xl">
        Find Your Next Flight
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
        Domestic and international flight tickets with competitive fares
        and professional booking assistance.
      </p>
    </div>

    {/* Booking Box */}
    <div className="mx-auto mt-12 max-w-5xl rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200 md:p-10">

      {/* Trip Type */}
      <div className="mb-8 flex flex-wrap gap-6">
        <label className="flex items-center gap-2 font-semibold text-slate-800">
          <input
            type="radio"
            name="trip"
            defaultChecked
            className="h-4 w-4"
          />
          Round Trip
        </label>

        <label className="flex items-center gap-2 font-semibold text-slate-800">
          <input
            type="radio"
            name="trip"
            className="h-4 w-4"
          />
          One Way
        </label>
      </div>

      {/* Form */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        {/* From */}
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            From
          </label>

          <input 
  id="flight-from"
  type="text"
  placeholder="Kuala Lumpur (KUL)"
  className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none"
/>
        </div>

        {/* To */}
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            To
          </label>

          <input
            type="text"id="flight-to"
            placeholder="Dhaka (DAC)"
            className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Departure */}
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Departure
          </label>

         <input
  id="flight-date"
  type="date"
  className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none"
/>
        </div>

        {/* Passengers */}
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Passengers
          </label>

          <select
           id="flight-passengers" className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            defaultValue="1"
          >
            <option value="1">1 Passenger</option>
            <option value="2">2 Passengers</option>
            <option value="3">3 Passengers</option>
            <option value="4">4 Passengers</option>
            <option value="5">5 Passengers</option>
            <option value="6">6 Passengers</option>
            <option value="7">7 Passengers</option>
            <option value="8">8 Passengers</option>
            <option value="9">9 Passengers</option>
          </select>
        </div>

      </div>

      {/* Button */}
      <div className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-slate-200 pt-8 md:flex-row">

        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Need a better fare?
          </h3>

          <p className="mt-1 text-slate-600">
            Send us your travel details and our team will assist you.
          </p>
        </div>

       <button
  type="button"
  onClick={sendFlightEnquiry}
  className="inline-flex rounded-full bg-blue-600 px-8 py-4 font-bold text-white"
>
  Search & Enquire
</button>

      </div>
    </div>

    {/* Popular Routes */}
    <div className="mt-12 grid gap-5 md:grid-cols-3">

      <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
          Popular Route
        </p>
        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Kuala Lumpur → Dhaka
        </h3>
        <p className="mt-2 text-slate-600">
          KUL → DAC
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
          Popular Route
        </p>
        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Kuala Lumpur → Bangkok
        </h3>
        <p className="mt-2 text-slate-600">
          KUL → BKK
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
          Popular Route
        </p>
        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Kuala Lumpur → Singapore
        </h3>
        <p className="mt-2 text-slate-600">
          KUL → SIN
        </p>
      </div>

    </div>

  </div>
</section>


      {/* CONTACT */}
      <section id="contact" className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-4xl font-extrabold">
            Contact MIAH WORLD TRAVELS & TOURS
          </h2>

        <div className="mt-8 space-y-3 text-slate-300">

  <p>
    <strong className="text-white">📍 Shop Address:</strong><br />
    A-LG, 05, Sungai Besi Serdang Perdana,<br />
    Taman Serdang Perdana, 43300 Seri Kembangan, Selangor
  </p>


  <p>
    <strong className="text-white">📞 WhatsApp:</strong>{" "}
    0166256738
  </p>

  <p>
    <strong className="text-white">📧 Email:</strong>{" "}
    miahworld53@gmail.com
  </p>

  <p>
    <strong className="text-white">📘 Facebook:</strong>{" "}
    <a
      href="https://www.facebook.com/miahworld1102"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline"
    >
      MIAH WORLD TRAVELS & TOURS
    </a>
  </p>

  <p>
    <strong className="text-white">🎵 TikTok:</strong>{" "}
    <a
      href="https://www.tiktok.com/@miahworld0"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline"
    >
      @miahworld0
    </a>
  </p>

  <p>
  <strong className="text-white">🌐 Website:</strong>{" "}
  <a
    href="https://www.miahworldtravels.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:underline"
  >
    www.miahworldtravels.com
  </a>
</p>

<p className="mt-5 text-lg text-slate-300">
  Your Journey, Our Passion.
</p></div></div>
</section>

      {/* FOOTER */}
      <footer className="bg-black px-6 py-8 text-center text-white">
        <p>
          © 2026 MIAH WORLD TRAVELS & TOURS. All Rights Reserved.
        </p>
      </footer>

    </main>
  );
}