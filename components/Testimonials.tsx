export default function Testimonials() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mt-8">
          <div className="aspect-video overflow-hidden rounded-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/HUFk4JmwJ68"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
