type ContactProps = {
  className?: string;
};

export default function Contact({ className = '' }: ContactProps) {
  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Address</h3>
              <address className="text-gray-600 not-italic">
                7 Bayview Station Road<br />
                Ottawa, ON<br />
                K1Y 2C5
              </address>
            </div>

            <div>
              <h3 className="font-medium mb-2">Email</h3>
              <a 
                href="mailto:info@mindtrustleadership.ca"
                className="text-blue-600 hover:underline"
              >
                info@mindtrustleadership.ca
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps iframe */}
        <div className="w-full h-[300px] rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6893.04368465182!2d-75.7280263!3d45.4096858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0441d4558e01%3A0x68c5b9a6731b105e!2s7%20Bayview%20Station%20Rd%2C%20Ottawa%2C%20ON%20K1Y%202C5!5e1!3m2!1sen!2sca!4v1731615181257!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
} 