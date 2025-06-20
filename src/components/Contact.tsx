import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">
        Contact <span className="text-teal-600">Me</span>
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
        I’m open to collaboration, freelance work, or exciting opportunities.
        Let's connect!
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Mail className="text-teal-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Email</h4>
              <p className="text-gray-600">ukm3423@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-teal-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-600">+91-6201033951</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-teal-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Location</h4>
              <p className="text-gray-600">Ranchi, Jharkhand, India</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Message</label>
            <textarea
              rows={4}
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
