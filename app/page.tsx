import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Scissors, Ruler, Shirt, Phone, MapPin, Instagram, Facebook, Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#4A3728]">
        <div className="absolute inset-0 opacity-40">
          {/* Placeholder for hero image - using a pattern or solid color for now if no image available */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524255684952-d7185b509571?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl lg:max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-[#FDFBF7] mb-6 drop-shadow-lg">
            Costura y Diseño <br /> <span className="text-[#FCD116]">con Amor</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#FDFBF7] mb-8 font-light tracking-wide">
            Confección a medida, arreglos y diseño con el corazón y la tradición de nuestra tierra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="shadow-xl">
                Agendar Cita
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20 hover:text-[#FCD116] hover:border-[#FCD116]">
                Ver Servicios
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" className="bg-[#FDFBF7]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image
              src="https://images.unsplash.com/photo-1596904673516-244365775949?q=80&w=2670&auto=format&fit=crop"
              alt="Costurera trabajando"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-[#CE1126]">
              <Heart className="w-5 h-5 fill-current" />
              <span className="uppercase tracking-widest text-sm font-bold">Sobre Mí</span>
            </div>
            <h2 className="text-4xl font-bold text-[#4A3728]">Raíces y Pasión por la Costura</h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Soy una apasionada de la costura con raíces colombianas. Cada puntada lleva consigo la dedicación y el detalle que caracteriza a nuestra gente.
              Desde arreglos simples hasta vestidos de gala, mi objetivo es que te sientas única y cómoda con cada prenda.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Traigo conmigo la calidez y el servicio personalizado de Colombia, asegurando que cada cliente se sienta como en casa.
            </p>
            <div className="pt-4">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
                alt="Bandera de Colombia"
                width={40}
                height={30}
                className="shadow-sm"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" className="bg-[#F5F5F0]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4A3728] mb-4">Mis Servicios</h2>
          <div className="w-24 h-1 bg-[#FCD116] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Scissors className="w-10 h-10" />,
              title: "Arreglos y Ajustes",
              desc: "Bastas, ajustes de talla, cambio de cierres y reparaciones para que tu ropa te quede perfecta."
            },
            {
              icon: <Ruler className="w-10 h-10" />,
              title: "Confección a Medida",
              desc: "Diseño y creación de prendas exclusivas hechas a tu medida y gusto personal."
            },
            {
              icon: <Shirt className="w-10 h-10" />,
              title: "Transformaciones",
              desc: "Dale una segunda vida a tus prendas favoritas con un diseño renovado y moderno."
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#FCD116] group">
              <div className="w-16 h-16 bg-[#FDFBF7] rounded-full flex items-center justify-center text-[#4A3728] mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#4A3728] mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery Section */}
      <Section id="gallery" className="bg-[#4A3728] text-[#FDFBF7]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#FDFBF7] mb-4">Galería de Diseños</h2>
          <p className="text-[#FCD116]">Una muestra de mi trabajo y dedicación</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2576&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=2535&auto=format&fit=crop"
          ].map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-lg group">
              <Image
                src={src}
                alt={`Diseño ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Heart className="text-white w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-[#FDFBF7]">
        <div className="max-w-4xl lg:max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 bg-[#4A3728] text-[#FDFBF7] flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contáctame</h2>
                <p className="mb-8 text-white/80">
                  ¿Tienes una prenda que arreglar o una idea en mente? Escríbeme y hagamos realidad tu proyecto.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#FCD116] flex items-center justify-center text-[#4A3728]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>+57 320 261 3152</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#FCD116] flex items-center justify-center text-[#4A3728]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span>Bogotá, Colombia</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <a href="#" className="hover:text-[#FCD116] transition-colors"><Instagram /></a>
                <a href="#" className="hover:text-[#FCD116] transition-colors"><Facebook /></a>
              </div>
            </div>

            <div className="p-10 flex flex-col items-center justify-center text-center space-y-8">
              <h3 className="text-2xl font-bold text-[#4A3728]">¡Hablemos por WhatsApp!</h3>
              <p className="text-gray-600">
                La forma más rápida de cotizar y agendar tu cita.
              </p>
              <a
                href="https://wa.me/573202613152"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white border-none text-lg gap-2">
                  <Phone className="w-5 h-5" />
                  Enviar Mensaje
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="w-full py-6 bg-[#2d2218] text-center text-[#FDFBF7]/60 text-sm">
        <p>© {new Date().getFullYear()} Costura y Diseño. Hecho con amor en Colombia.</p>
      </footer>
    </main>
  );
}
