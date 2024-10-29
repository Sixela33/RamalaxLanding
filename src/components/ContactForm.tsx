import React, { FormEvent, useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { name, email, company, phone, message } = formData

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
      } else {
        console.error("Error submitting form:", data);
        ("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      ("An unexpected error occurred. Please try again.");
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
                    <div className='flex flex-row'>
                        <button
                            type="submit"
                            className="w-1/2 px-4 py-2 rounded-lg text-white transition-colors bg-green-500"
                            >
                            Leave a message
                        </button>
                        <a href='https://calendly.com/alexis-janko/30min' className='w-1/2 px-4 py-2 rounded-lg text-white transition-colors bg-green-500' target='#'> 
                                Arrange a meeting
                        </a>
                    </div>
            </form>
        </div>
    </div>
  );
}

export default ContactForm;
