'use client';

import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ nombre: '', email: '', mensaje: '' });
    // Show success message (in a real implementation)
    alert('Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.');
  };

  return (
    <section className="py-20 bg-black text-white" id="contacto">
      <div className="container mx-auto px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-lora font-semibold mb-12 text-center">
            <span className="text-yellow">Contacto</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-primary/30 backdrop-blur-sm p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-lora font-semibold mb-6 text-yellow">Ponte en contacto</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="nombre" className="block mb-2 font-mono text-white">
                    Nombre
                  </label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white/10 border border-white/20 text-white font-mono focus:outline-none focus:ring-2 focus:ring-yellow transition duration-300" 
                    required 
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 font-mono text-white">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white/10 border border-white/20 text-white font-mono focus:outline-none focus:ring-2 focus:ring-yellow transition duration-300" 
                    required 
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="mensaje" className="block mb-2 font-mono text-white">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 rounded bg-white/10 border border-white/20 text-white font-mono focus:outline-none focus:ring-2 focus:ring-yellow transition duration-300"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-yellow text-primary px-6 py-3 rounded-full font-mono text-lg font-bold hover:bg-white transition-colors duration-300 shadow-lg"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-lora font-semibold mb-6 text-yellow">Información de contacto</h3>
                <div className="space-y-6 font-mono">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-4 text-yellow" />
                    <span className="text-lg">info@eltotoral.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-4 text-yellow" />
                    <span className="text-lg">+54 11 1234-5678</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-4 text-yellow flex-shrink-0 mt-1" />
                    <span className="text-lg">Calle del Totoral 123, Buenos Aires, Argentina</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-8 bg-primary/30 backdrop-blur-sm rounded-lg shadow-xl">
                <h4 className="text-xl font-lora font-semibold mb-4 text-yellow">Horario de atención</h4>
                <p className="font-mono text-lg mb-2">Lunes a Viernes: 10:00 - 20:00</p>
                <p className="font-mono text-lg">Sábados: 12:00 - 18:00</p>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-xl font-lora italic">
                  En <span className="text-yellow">El Totoral</span>, cada proyecto es una oportunidad para crear algo extraordinario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

