import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Have a question about a strategy? Spotted a tax rule change? Reach out.
          </p>
        </header>

        <div className="bg-light-slate p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm">
          <form 
            action="https://formspree.io/f/placeholder" 
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-canadian-red focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-canadian-red focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-canadian-red focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={6}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-canadian-red focus:border-transparent outline-none transition-all resize-y"
                required
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <Button type="submit" variant="primary" className="w-full md:w-auto px-10">
                Send Message
              </Button>
              <p className="text-sm text-gray-500 mt-4">Average response time is 48-72 hours.</p>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
