'use client';

import { useState, FormEvent, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contacto() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    necesidad: '',
    necesidadOtra: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Prepare template parameters for EmailJS
    const templateParams = {
      to_email: 'maya.endo.o@gmail.com',
      from_name: formData.nombre,
      from_email: formData.email,
      telefono: formData.telefono,
      necesidad: formData.necesidad === 'Otro' ? formData.necesidadOtra : formData.necesidad,
      mensaje: formData.mensaje || 'No se proporcionó mensaje adicional.'
    };

    try {
      // Replace these with your actual EmailJS service ID, template ID, and public key
      // You'll need to sign up at https://www.emailjs.com/ and create a template
      const serviceId = 'service_ontos45'; // Replace with your service ID
      const templateId = 'template_mxtygnl'; // Replace with your template ID
      const publicKey = '9c-LD5zT9iheAYVZr'; // Replace with your public key

      // Send the email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', result.text);
      
      setSubmitStatus({
        success: true,
        message: 'Tu mensaje ha sido enviado. Nos pondremos en contacto contigo pronto.'
      });
      
      // Reset form after successful submission
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        necesidad: '',
        necesidadOtra: '',
        mensaje: ''
      });
      
      // Reset the form
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        success: false,
        message: 'Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-primary text-white" id="contacto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-lora font-semibold mb-8 text-center">
            <span className="text-yellow">Contacto</span>
          </h2>
          
          <div className="bg-primary/50 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl border border-white/10">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="nombre" className="block mb-2 font-mono text-white">
                  Nombre <span className="text-yellow">*</span>
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
              
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 font-mono text-white">
                  Email <span className="text-yellow">*</span>
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
              
              <div className="mb-5">
                <label htmlFor="telefono" className="block mb-2 font-mono text-white">
                  Teléfono <span className="text-yellow">*</span>
                </label>
                <input 
                  type="tel" 
                  id="telefono" 
                  name="telefono" 
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-white/10 border border-white/20 text-white font-mono focus:outline-none focus:ring-2 focus:ring-yellow transition duration-300" 
                  required 
                />
              </div>
              
              <div className="mb-5">
                <label htmlFor="necesidad" className="block mb-2 font-mono text-white">
                  ¿Qué es lo que necesita tu proyecto? <span className="text-yellow">*</span>
                </label>
                <select 
                  id="necesidad" 
                  name="necesidad" 
                  value={formData.necesidad}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-white/10 border border-white/20 text-white font-mono focus:outline-none focus:ring-2 focus:ring-yellow transition duration-300 appearance-none" 
                  required
                  style={{ color: 'white' }}
                >
                  <option value="" disabled style={{ color: 'black' }}>Selecciona una opción</option>
                  <option value="Grabación" style={{ color: 'black' }}>Grabación</option>
                  <option value="Producción" style={{ color: 'black' }}>Producción</option>
                  <option value="Mezcla" style={{ color: 'black' }}>Mezcla</option>
                  <option value="Mastering" style={{ color: 'black' }}>Mastering</option>
                  <option value="Ensayo" style={{ color: 'black' }}>Ensayo</option>
                  <option value="Otro" style={{ color: 'black' }}>Otro</option>
                </select>
                <div className="relative pointer-events-none">
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-white pointer-events-none" style={{ top: '-30px', right: '10px' }}>
                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {formData.necesidad === 'Otro' && (
                <div className="mb-5">
                  <label htmlFor="necesidadOtra" className="block mb-2 font-mono text-white">
                    Especifica tu necesidad <span className="text-yellow">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="necesidadOtra" 
                    name="necesidadOtra" 
                    value={formData.necesidadOtra}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white/10 border border-white/20 text-white font-mono focus:outline-none focus:ring-2 focus:ring-yellow transition duration-300" 
                    required 
                  />
                </div>
              )}
              
              <div className="mb-6">
                <label htmlFor="mensaje" className="block mb-2 font-mono text-white">
                  Cuéntanos más
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 rounded bg-white/10 border border-white/20 text-white font-mono focus:outline-none focus:ring-2 focus:ring-yellow transition duration-300"
                ></textarea>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-yellow text-primary px-6 py-3 rounded-full font-mono text-lg font-bold hover:bg-white transition-colors duration-300 shadow-lg disabled:opacity-70"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>
            </form>
            
            {submitStatus && (
              <div className={`mt-6 p-4 rounded ${submitStatus.success ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                <p className="text-center">{submitStatus.message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

