import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 mt-10"
    >
      <div className="relative max-w-5xl w-full mx-auto rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-5 sm:p-6 md:p-8">
        <h2 className="text-[#C3CC9B] font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8 text-center">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-[#C3CC9B] font-semibold text-xl sm:text-2xl mb-4 sm:mb-5">
                Let&apos;s work together!
              </h3>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                Have a project in mind? I&apos;d love to hear about it. Feel
                free to reach out and let&apos;s create something amazing
                together.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 stroke-[#C3CC9B]" />
                </div>

                <div>
                  <p className="text-white/60 text-xs sm:text-sm mb-1">Email</p>
                  <p className="text-white text-base sm:text-lg break-all">
                    tanimbinaziz145@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 stroke-[#C3CC9B]" />
                </div>

                <div>
                  <p className="text-white/60 text-xs sm:text-sm mb-1">Phone</p>
                  <p className="text-white text-base sm:text-lg">
                    +8801719000060
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 stroke-[#C3CC9B]" />
                </div>

                <div>
                  <p className="text-white/60 text-xs sm:text-sm mb-1">
                    Location
                  </p>
                  <p className="text-white text-base sm:text-lg">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6">
            <form className="space-y-3 sm:space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-[#C3CC9B] text-xs sm:text-sm mb-1 block"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm sm:text-base placeholder:text-white/40 focus:outline-none focus:border-[#C3CC9B] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-[#C3CC9B] text-xs sm:text-sm mb-1 block"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="youremail@example.com"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm sm:text-base placeholder:text-white/40 focus:outline-none focus:border-[#C3CC9B] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-[#C3CC9B] text-xs sm:text-sm mb-1 block"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm sm:text-base placeholder:text-white/40 focus:outline-none focus:border-[#C3CC9B] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-[#17504d] to-[#aab287] text-white px-6 py-2.5 rounded-xl hover:from-[#21706c] hover:to-[#aab287] transition-all flex items-center justify-center gap-2 group text-sm sm:text-base"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
