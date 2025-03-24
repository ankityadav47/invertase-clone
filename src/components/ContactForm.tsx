import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    companySize: '',
    country: '',
    foundUs: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      website: '',
      companySize: '',
      country: '',
      foundUs: '',
      message: '',
    });
  };

  return (
    <section className="py-16 bg-gray-94">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h2 className="text-32 font-title font-bold text-gray-8 mb-6">
            Get in touch
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-gray-20 font-medium mb-2">
                  First name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-80 rounded-md focus:ring-2 focus:ring-primary-1 focus:border-transparent transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-20 font-medium mb-2">
                  Last name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-80 rounded-md focus:ring-2 focus:ring-primary-1 focus:border-transparent transition-colors"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-20 font-medium mb-2">
                Work email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-80 rounded-md focus:ring-2 focus:ring-primary-1 focus:border-transparent transition-colors"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="website" className="block text-gray-20 font-medium mb-2">
                Company website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-80 rounded-md focus:ring-2 focus:ring-primary-1 focus:border-transparent transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="companySize" className="block text-gray-20 font-medium mb-2">
                  Company size
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-80 rounded-md focus:ring-2 focus:ring-primary-1 focus:border-transparent transition-colors"
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501+">501+ employees</option>
                </select>
              </div>
              <div>
                <label htmlFor="country" className="block text-gray-20 font-medium mb-2">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-80 rounded-md focus:ring-2 focus:ring-primary-1 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="foundUs" className="block text-gray-20 font-medium mb-2">
                How did you find us?
              </label>
              <select
                id="foundUs"
                name="foundUs"
                value={formData.foundUs}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-80 rounded-md focus:ring-2 focus:ring-primary-1 focus:border-transparent transition-colors"
              >
                <option value="">Select an option</option>
                <option value="search">Search engine</option>
                <option value="github">GitHub</option>
                <option value="social">Social media</option>
                <option value="word">Word of mouth</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-20 font-medium mb-2">
                How can we help you?*
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-80 rounded-md focus:ring-2 focus:ring-primary-1 focus:border-transparent transition-colors"
                required
              ></textarea>
            </div>

            <div className="mb-8 text-gray-40 text-sm">
              By submitting this form, you acknowledge our{' '}
              <a href="/privacy-policy" className="text-primary-1 hover:underline">Privacy Policy</a>.
            </div>

            <button type="submit" className="btn-primary w-full md:w-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
