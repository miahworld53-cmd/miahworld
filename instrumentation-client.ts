"use client";

export function onRouterTransitionStart() {}

function track(name: string, params: Record<string, string>) {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", name, params);
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("click", (event) => {
    const target = (event.target as HTMLElement | null)?.closest("a,button");
    if (!target) return;

    const text = (target.textContent || "").trim().toLowerCase();
    const href = target.getAttribute("href") || "";

    if (href.includes("wa.me") || text.includes("whatsapp") || text.includes("chat on whatsapp") || text.includes("enquire on whatsapp")) {
      let eventName = "whatsapp_click";
      if (text.includes("flight") || text.includes("fare")) eventName = "flight_enquiry";
      else if (text.includes("transport") || text.includes("airport") || text.includes("car rental")) eventName = "transport_enquiry";
      else if (text.includes("visa")) eventName = "visa_enquiry";
      else if (text.includes("tour")) eventName = "tour_enquiry";

      track(eventName, { method: "whatsapp", button_text: (target.textContent || "").trim().slice(0, 100) });
    }
  }, { passive: true });
}
