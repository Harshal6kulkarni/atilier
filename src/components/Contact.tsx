import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-gray-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Thanks—your brief is in</h2>
          <p className="text-xl text-gray-400">You'll hear back within 24 hours with next steps and a proposed schedule.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">Start a Project</h2>
          <p className="text-xl text-gray-400">
            Tell us your timeline, budget band, and goal. Expect a reply within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Budget Band</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
              >
                <option value="">Select range</option>
                <option value="5k-15k">$5k – $15k</option>
                <option value="15k-30k">$15k – $30k</option>
                <option value="30k-50k">$30k – $50k</option>
                <option value="50k+">$50k+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Timeline</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
              >
                <option value="">Select timeline</option>
                <option value="urgent">Urgent (1-2 weeks)</option>
                <option value="standard">Standard (3-4 weeks)</option>
                <option value="flexible">Flexible (5+ weeks)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Project Notes</label>
            <textarea
              name="notes"
              rows={6}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Tell us about your project, goals, and any specific requirements..."
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
            />
          </div>

          <p className="text-xs text-gray-500">
            Your information is confidential and will only be used to respond to your inquiry.
          </p>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-medium rounded-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center space-x-2"
          >
            <span>Request Proposal</span>
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
