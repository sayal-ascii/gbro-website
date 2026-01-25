export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="p-12 bg-gray-100 text-black">
        <h1 className="text-4xl font-bold mb-4">
          G.Bro Customs Clearing and Logistic Sewa
        </h1>
        <p className="text-lg max-w-2xl">
          Reliable customs clearance and logistics services based in Kathmandu,
          Nepal. We simplify import and export processes for your business.
        </p>
      </section>

      {/* Services Preview */}
      <section className="p-12 text-black bg-white">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <ul className="list-disc pl-5">
          <li>Customs Clearance</li>
          <li>Import & Export Documentation</li>
          <li>Logistics Coordination</li>
          <li>Regulatory Consultation</li>
        </ul>
      </section>

      {/* Call To Action */}
      <section className="p-12 bg-gray-100 text-black">
        <h2 className="text-2xl font-bold mb-4">Need customs support?</h2>
        <p className="mb-4">
          Contact our team today for reliable and hassle-free service.
        </p>
        <a
          href="/contact"
          className="inline-block bg-black text-white px-6 py-2"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}