import Link from 'next/link';
import Contact from '@/components/Contact';

export default function ContactUs() {
  return (
    <>
      {/* Header Section */}
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>›</span>
            <span>Contact us</span>
          </div>
          <h1 className="text-4xl font-bold">Get in touch with us</h1>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-6xl mx-auto px-6 pt-12">
        <p className="text-gray-600">
          We would be pleased to hear from you. Please use the form below to contact Mindtrust,
          and we will respond as soon as possible.
        </p>
      </div>

      {/* Contact Form and Specific Inquiries Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <p className="text-sm text-gray-600 mb-8">
              Please fill out the form below with your details
            </p>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  First and Last Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Send
              </button>
            </form>
          </div>

          {/* Specific Inquiries */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Specific Inquiries</h2>
            <p className="text-sm text-gray-600 mb-8">
              For more specific inquiries, please email us directly:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">
                  For information about Mindtrust programs:
                </h3>
                <a 
                  href="mailto:programs@mindtrustleadership.ca"
                  className="text-blue-600 hover:underline"
                >
                  programs@mindtrustleadership.ca
                </a>
              </div>

              <div>
                <h3 className="font-medium mb-2">
                  For volunteer opportunities:
                </h3>
                <a 
                  href="mailto:info@mindtrustleadership.ca"
                  className="text-blue-600 hover:underline"
                >
                  info@mindtrustleadership.ca
                </a>
              </div>

              <div>
                <h3 className="font-medium mb-2">
                  For partnership & sponsorship opportunities:
                </h3>
                <a 
                  href="mailto:partner@mindtrustleadership.ca"
                  className="text-blue-600 hover:underline"
                >
                  partner@mindtrustleadership.ca
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information and Map Section */}
      <Contact className="bg-gray-100" />
    </>
  );
}
