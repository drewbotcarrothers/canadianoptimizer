import Button from "./Button";

export default function EndOfPostNewsletter() {
  return (
    <div className="bg-canadian-red rounded-2xl p-8 md:p-12 text-white text-center my-16 shadow-lg transform hover:scale-[1.01] transition-transform">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">Master Your Financial Optimization</h3>
      <p className="text-red-100 mb-8 max-w-xl mx-auto">
        Join 5,000+ Canadians receiving our weekly "Optimization Tactics" directly to their inbox. Get our free 5-day starter guide instantly.
      </p>
      <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input 
          type="email" 
          placeholder="your@email.com" 
          className="flex-grow px-4 py-3 rounded-md text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal"
          required
        />
        <button 
          type="submit" 
          className="bg-charcoal text-white px-6 py-3 rounded-md font-bold hover:bg-gray-800 transition-colors"
        >
          Send My Guide
        </button>
      </form>
      <p className="text-xs text-red-200 mt-4 italic">No generic tips. No spam. Only optimization tactics.</p>
    </div>
  );
}
