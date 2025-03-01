import { Play } from "lucide-react"

export default function Trabajo() {
  return (
    <section className="pt-24 md:pt-28 pb-20 bg-primary text-white" id="trabajo">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-lora font-bold mb-16 text-center text-yellow">Nuestro Trabajo</h2>

        <div className="mb-16">
          <h3 className="text-2xl font-lora font-semibold text-yellow mb-8">Música Producida en El Totoral</h3>
          <div className="bg-primary/50 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white/10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
              <div className="flex-shrink-0">
                <Play className="w-12 h-12 text-yellow" />
              </div>
              <div>
                <h4 className="text-xl font-lora font-semibold mb-2">Totoral Music</h4>
                <p className="font-mono text-white/80">
                  Una selección de música grabada, mezclada y producida por Lorenzo Tapia & Moncho Berry en El Totoral Studio.
                  Incluye artistas como Jaze, Temple Sour, Moncho Berry, rulolo, Maya Endo y más.
                </p>
              </div>
            </div>
            
            <div className="aspect-auto w-full rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://open.spotify.com/embed/playlist/4ZOQDb0bT1n4nmCaJRyPPN?utm_source=generator&theme=0" 
                width="100%" 
                height="500" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Totoral Music Playlist"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-lora font-semibold text-yellow mb-8">Artistas Destacados</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary/50 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white/10">
              <h4 className="text-xl font-lora font-semibold mb-3 text-yellow">Jaze</h4>
              <p className="font-mono text-sm mb-4">Colaboración en múltiples proyectos incluyendo &ldquo;ke será de mí&rdquo;, &ldquo;Lunares&rdquo; y &ldquo;Al Mango&rdquo;</p>
              <div className="flex justify-end">
                <a href="https://open.spotify.com/artist/5kUiVvEXKzJ4y8Yj2zPCDI" target="_blank" rel="noopener noreferrer" className="text-yellow hover:text-white transition-colors font-mono text-sm">
                  Ver artista →
                </a>
              </div>
            </div>
            
            <div className="bg-primary/50 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white/10">
              <h4 className="text-xl font-lora font-semibold mb-3 text-yellow">Temple Sour</h4>
              <p className="font-mono text-sm mb-4">Producción de temas como &ldquo;La Venenotza&rdquo;, &ldquo;La Beba&rdquo;, &ldquo;France$ka&rdquo; y &ldquo;Power Reggae&rdquo;</p>
              <div className="flex justify-end">
                <a href="https://open.spotify.com/artist/0Gy0Ov8JLNEJnMyzYgOYJo" target="_blank" rel="noopener noreferrer" className="text-yellow hover:text-white transition-colors font-mono text-sm">
                  Ver artista →
                </a>
              </div>
            </div>
            
            <div className="bg-primary/50 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white/10">
              <h4 className="text-xl font-lora font-semibold mb-3 text-yellow">Moncho Berry</h4>
              <p className="font-mono text-sm mb-4">Artista y productor con temas como &ldquo;SENTIRME BIEN&rdquo;, &ldquo;No Soy Yo&rdquo; y &ldquo;Antes De Partir&rdquo;</p>
              <div className="flex justify-end">
                <a href="https://open.spotify.com/artist/5Hv2bYBhMp1lUHFri9AxXh" target="_blank" rel="noopener noreferrer" className="text-yellow hover:text-white transition-colors font-mono text-sm">
                  Ver artista →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-lora font-semibold text-yellow mb-8">Testimonios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary/50 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white/10">
              <p className="italic mb-4 font-mono">
                &ldquo;El Totoral no solo grabó nuestra música, sino que también capturó nuestra esencia. Un lugar mágico para
                crear.&rdquo;
              </p>
              <p className="font-lora text-yellow">- Temple Sour</p>
            </div>
            <div className="bg-primary/50 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white/10">
              <p className="italic mb-4 font-mono">
                &ldquo;La experiencia y profesionalismo del equipo hicieron que mi álbum sonara mejor de lo que imaginé.&rdquo;
              </p>
              <p className="font-lora text-yellow">- Mattias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

