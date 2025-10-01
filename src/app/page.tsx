import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="text-lg font-semibold text-slate-900">Access Path Lab</div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#tests" className="hover:text-slate-900">Tests</a>
            <a href="#process" className="hover:text-slate-900">How it works</a>
            <a href="#faqs" className="hover:text-slate-900">FAQs</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a href="#book" className="inline-flex justify-center rounded-md bg-teal-600 text-white px-3 py-2 text-sm font-medium hover:bg-teal-700">Book</a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-12 text-center">
          <p className="inline-flex items-center rounded-full bg-white/80 ring-1 ring-slate-200 px-3 py-1 text-xs text-slate-600 mb-4">Trusted Diagnostic & Pathology Lab</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">Book Lab Tests at Home, Get Reports Fast</h1>
          <p className="mt-4 text-slate-600 text-base md:text-lg">NABL-certified labs • Hygienic home sample collection • Transparent pricing</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="#book" className="inline-flex justify-center rounded-md bg-teal-600 text-white px-6 py-3 text-sm font-medium hover:bg-teal-700">Book a Test</Link>
            <Link href="#tests" className="inline-flex justify-center rounded-md bg-white text-slate-900 ring-1 ring-slate-200 px-6 py-3 text-sm font-medium hover:bg-slate-100">See Popular Tests</Link>
          </div>
          <div className="mt-8 mx-auto max-w-2xl">
            <div className="flex items-center gap-2 rounded-xl ring-1 ring-slate-200 bg-white p-2">
              <input className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-slate-400" placeholder="Search tests (e.g., CBC, Thyroid, Vitamin D)" />
              <button className="rounded-lg bg-teal-600 text-white px-4 py-2 text-sm hover:bg-teal-700">Search</button>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-slate-500">
            <span className="rounded-full bg-white ring-1 ring-slate-200 px-3 py-1">NABL Certified</span>
            <span className="rounded-full bg-white ring-1 ring-slate-200 px-3 py-1">ICMR Compliant</span>
            <span className="rounded-full bg-white ring-1 ring-slate-200 px-3 py-1">24–48 hr Reports</span>
            <span className="rounded-full bg-white ring-1 ring-slate-200 px-3 py-1">Free Report Consultation</span>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white ring-1 ring-slate-200 p-5">
              <div className="text-teal-600 text-xl">{f.icon}</div>
              <h3 className="mt-3 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tests" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Popular Tests & Packages</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((t)=> (
              <div key={t.name} className="rounded-2xl ring-1 ring-slate-200 p-5">
                <h3 className="font-semibold text-slate-900">{t.name}</h3>
                <p className="text-sm text-slate-600">{t.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-teal-700 font-medium">₹{t.price}</span>
                  <a href="#book" className="text-sm text-teal-700 hover:underline">Book</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">How it works</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {steps.map((s, i)=> (
            <div key={s.title} className="rounded-2xl bg-white ring-1 ring-slate-200 p-5">
              <div className="text-xs text-slate-500">Step {i + 1}</div>
              <h3 className="mt-1 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">What patients say</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl ring-1 ring-slate-200 p-5">
                <div className="font-semibold text-slate-900">{t.name}</div>
                <div className="text-xs text-slate-500">{t.city}</div>
                <p className="mt-2 text-sm text-slate-600">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="contact" className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Contact us</h2>
          <div className="mt-2 text-sm text-slate-600">Call: +91-XXXXXXXXXX • Email: contact@accesspathlab.com</div>
          <div className="mt-1 text-sm text-slate-600">Address: Your clinic address here</div>
        </div>
      </section>

      <section id="faqs" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">FAQs</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl bg-white ring-1 ring-slate-200 p-5">
              <summary className="cursor-pointer list-none font-medium text-slate-900">{f.q}</summary>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>



      <section id="book" className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="rounded-2xl ring-1 ring-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold text-slate-900">Book a Home Collection</h2>
            <form className="mt-4 grid md:grid-cols-2 gap-4">
              <input className="rounded-lg bg-white ring-1 ring-slate-200 px-4 py-3 text-sm outline-none" placeholder="Full Name" />
              <input className="rounded-lg bg-white ring-1 ring-slate-200 px-4 py-3 text-sm outline-none" placeholder="Mobile Number" />
              <input className="rounded-lg bg-white ring-1 ring-slate-200 px-4 py-3 text-sm outline-none md:col-span-2" placeholder="Test Name (e.g., CBC)" />
              <input className="rounded-lg bg-white ring-1 ring-slate-200 px-4 py-3 text-sm outline-none md:col-span-2" placeholder="Address" />
              <button type="button" className="mt-2 inline-flex justify-center rounded-md bg-teal-600 text-white px-6 py-3 text-sm font-medium hover:bg-teal-700 md:col-span-2">Request Callback</button>
            </form>
            <p className="mt-3 text-xs text-slate-500">Our team will call to confirm your slot and share pricing.</p>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-12 text-sm text-slate-600">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-slate-900 font-semibold">Access Path Lab</div>
            <div>Modern Diagnostic & Pathology Lab</div>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
        <div className="mt-4 text-xs">© {new Date().getFullYear()} Access Path Lab. All rights reserved.</div>
      </footer>
    </main>
  );
}

const features = [
  { icon: "🏥", title: "Certified Labs", desc: "NABL-grade processes & calibrated analyzers" },
  { icon: "🧪", title: "Home Collection", desc: "Trained phlebotomists at your doorstep" },
  { icon: "⚡", title: "Fast Reports", desc: "Digital reports within 24–48 hours" },
  { icon: "💳", title: "Transparent Pricing", desc: "No hidden charges. Clear bills." },
];

const tests = [
  { name: "Complete Blood Count (CBC)", desc: "General health check", price: 299 },
  { name: "Thyroid Profile (T3, T4, TSH)", desc: "Thyroid screening", price: 499 },
  { name: "Vitamin D (25-OH)", desc: "Bone & immunity", price: 699 },
  { name: "Diabetes Package", desc: "FBS, PPBS, HbA1c", price: 799 },
  { name: "Lipid Profile", desc: "Heart health", price: 599 },
  { name: "Liver Function Test (LFT)", desc: "Liver assessment", price: 749 },
];

const steps = [
  { title: "Choose test or package", desc: "Search and select your required test." },
  { title: "Home sample collection", desc: "Expert visits your address at the chosen time." },
  { title: "Get digital reports", desc: "Access reports online; consult with doctors." },
];

const testimonials = [
  { name: "Aarav", city: "Delhi", quote: "Home collection was on time and very hygienic." },
  { name: "Mira", city: "Bengaluru", quote: "Reports arrived the next day with detailed insights." },
  { name: "Rohit", city: "Mumbai", quote: "Great prices and professional staff." },
];

const faqs = [
  { q: "Do you provide home sample collection?", a: "Yes, trained phlebotomists visit your address at your chosen time." },
  { q: "When will I receive my reports?", a: "Typically within 24–48 hours depending on the test." },
  { q: "Are your labs certified?", a: "Yes, we follow NABL-grade processes and ICMR guidelines." },
  { q: "How can I book a test?", a: "Use the Book a Home Collection form above or call us." },
];

