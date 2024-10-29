import React, { FormEvent, useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { name, email, company, phone, message } = formData;

    const dataToSend = {
      name,
      email,
      company,
      phone,
      message,
      access_key: "f668a24f-81e5-44c1-b0a3-0fe745fadfd8",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();

      if (data.success) {
        setFeedbackMessage("Your message has been sent successfully!");
        // Clear the form if desired
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
        });
      } else {
        console.error("Error submitting form:", data);
        setFeedbackMessage("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFeedbackMessage("An unexpected error occurred. Please try again.");
    }

    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className='bg-gray-900 rounded-2xl p-12 text-center'>
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg outline-none focus:border focus:border-green-400 transition-colors"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg outline-none focus:border focus:border-green-400 transition-colors"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg outline-none focus:border focus:border-green-400 transition-colors"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg outline-none focus:border focus:border-green-400 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg outline-none focus:border focus:border-green-400 transition-colors md:col-span-2"
              rows={4}
              required
            />
          </div>
          <div className='flex justify-end w-full	space-x-5'>
            <button
              type="submit"
              className="border border-green-500 text-green-400 hover:bg-green-500/10 font-bold py-5 px-10 rounded-lg text-xl transition-all"
            >
              Leave a message
            </button>
            <a href='https://calendly.com/alexis-janko/30min' className='bg-green-500 hover:bg-green-600 text-black font-bold py-5 px-10 rounded-lg text-xl transition-all transform hover:scale-105' target='#'> 
              Arrange a meeting
            </a>
          </div>
        </form>
        {feedbackMessage && (
          <p className="mt-4 text-green-500">{feedbackMessage}</p>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
