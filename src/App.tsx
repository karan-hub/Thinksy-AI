import  { useEffect, useRef } from 'react';
import { Brain, Chrome, Loader, Settings, Smartphone, ShoppingCart,   ChevronDown,  ArrowRight, Users } from 'lucide-react';
import ContactUs from "./component/ContactUs";
function App() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);



  return (
    <div className="min-h-screen bg-[#FAF7F5] perspective">
      {/* Navigation */}
      <nav className=" sticky top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-black/5 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="../assets/logo3.gif" alt="icon" className="h-16 w-16 object-contain" />
              <span className="ml-2 text-xl font-bold text-black">Thinksy AI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-black hover:text-black/70 transition-all hover:scale-105 transform"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="relative min-h-screen pt-36 pb-20 px-4  flex justify-center items-center sm:px-6 lg:px-8 bg-[#FAF7F5] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10 ">
          <div className="text-center animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight">
              Your AI Partner    karan            <span className="block mt-2 bg-gradient-to-r from-black to-black/70 bg-clip-text text-transparent">
                for Affordable Growth
              </span>
            </h1>
            <p className="text-xl text-black/70 mb-8 max-w-2xl mx-auto animate-scale-in">
              Empowering small businesses with affordable AI and technology solutions to simplify and grow your business with ease.            </p>
            <div className="flex justify-center gap-4 stagger-children">
              <button className="hover-lift bg-black text-white px-8 py-3 rounded-lg transition-all flex items-center">
                Get Started with Smart Solutions<ArrowRight className="ml-2 h-5 w-5" />
              </button>

            </div>
            <div className="mt-16 flex justify-center">
              <ChevronDown className="h-8 w-8 text-black animate-bounce" />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 parallax">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAF7F5]/30" />
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        ref={(el) => (sectionRefs.current[1] = el)}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1EDEA]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                subtitle: "Transform your business with AI that works for you.",
                title: "AI-Powered Solutions",
                description: "We offer affordable and easy-to-implement AI solutions that enhance your business performance, streamline operations, and unlock growth opportunities."
              },
              {
                icon: <Chrome className="h-8 w-8" />,
                title: "Custom Web Development",
                subtitle: "Your business, your website.",

                description: "Our expert team creates websites tailored to your brand and business needs. From responsive design to seamless user experience, we bring your ideas to life online."
              },

              {
                icon: <Smartphone className="h-8 w-8" />,
                title: "Mobile App Development",
                subtitle: "Apps that connect and engage.",

                description: "We develop mobile applications that offer user-friendly experiences and drive customer engagement. Whether Android or iOS, we help you reach your audience where they are."
              },
              {
                icon: <ShoppingCart className="h-8 w-8" />,
                title: "E-commerce Solutions",
                subtitle: "Sell smarter, not harder.",

                description: "We provide end-to-end e-commerce solutions, from website development to payment gateways and order management systems, all designed to maximize your sales and simplify your workflow."
              }
              ,
              {
                icon: <Settings className="h-8 w-8" />,
                title: "Maintenance & Support",
                subtitle: "Your success is ongoing.",

                description: "We offer continuous support and maintenance for all your tech solutions to ensure everything runs smoothly and stays up-to-date."
              }

              ,
              {
                icon: <Loader className="h-8 w-8" />,
                title: "Automation & Workflow Optimization",
                subtitle: "Work smarter with automation.",

                description: "Improve your operational efficiency by automating repetitive tasks and optimizing workflows, saving time and resources so you can focus on growth."
              }

            ].map((service, index) => (
              <div
                key={index}
                className="hover-lift bg-white p-8 rounded-xl transition-all"
              >
                <div className="bg-black/5 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <h4 className="text-lg font-semibold mb-4">{service.subtitle}</h4>


                <p className="text-black/70 indent-4 hover:indent-8 font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        ref={(el) => (sectionRefs.current[2] = el)}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F5]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black text-center mb-16">Our Work</h2>
          <div className="grid md:grid-cols-2 gap-8 stagger-children">
            {[
              {
                media: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
                title: "Mobile Shopping App for Fashion Retailer",
                type: "image",
                description: " Increased customer engagement and boosted sales by 30%, improving user retention and satisfaction."
              },
              {
                media: "https://sowhat.one/upload/image-video.mp4",
                title: "E-commerce Website for Handmade Goods",
                type: "video",
                description: "For an artisan client, we developed a full-featured e-commerce website that includes product listing, payment integration, and inventory management. The website has boosted online sales by 40% in just six months."
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl hover-lift  "
              >
                {
                  project.type === 'video' ? (
                    <video
                      src={project.media}
                      autoPlay
                      muted
                      loop
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    // controls
                    />

                  ) : (<img
                    src={project.media}
                    alt={project.title}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />)
                }

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/90">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1EDEA]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black text-center mb-16">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8 stagger-children">
            {[
              {
                quote: "Working with AIgency transformed our business operations. Their AI solutions helped us achieve 200% growth in efficiency.",
                author: "Sarah Johnson",
                role: "CTO, TechCorp"
              },
              {
                quote: "The team's expertise in AI and machine learning is unmatched. They delivered beyond our expectations.",
                author: "Michael Chen",
                role: "CEO, InnovateAI"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="hover-lift bg-white p-8 rounded-xl"
              >
                <p className="text-lg mb-6 text-black/80">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="bg-black/5 w-12 h-12 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-black/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* contact */}
      <div id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F5]">
  <div className="max-w-7xl mx-auto">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-black mb-6">
        Ready to Get Started?
      </h2>
      <p className="text-lg text-black/70 mb-8">
        Let's discuss how our AI solutions can help your business grow.
      </p>
      <ContactUs />
    </div>
  </div>
</div>












      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center hover-scale">
              <span className="ml-2 text-xl font-bold">Thinksy AI
              </span>
            </div>
            <div className="text-white/60 text-sm">
              © 2024 AIgency. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;