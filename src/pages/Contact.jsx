import PageHero from "../components/PageHero";
import { FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import { useState } from "react";
import { toast } from "react-hot-toast";
import PrimaryButton from "../components/PrimaryButton";
import Input from "../components/Input";

export default function Contact() {
  const contactInfo = [
    {
      id: 1,
      title: "Email",
      value: "njohjunior4@gmail.com",
      icon: FaEnvelope,
      link: "mailto:njohjunior4@gmail.com",
    },
    {
      id: 2,
      title: "Téléphone",
      value: "+237 652 02 59 01",
      icon: FaPhone,
      link: "tel:+237652025901",
    },
    {
      id: 3,
      title: "Adresse",
      value: "Yaoundé, Cameroun",
      icon: FaLocationDot,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Veuillez entrer une adresse email valide");
      return;
    }

    // Success (since no backend)
    toast.success("Message envoyé avec succès ! Je vous répondrai bientôt.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <PageHero
        title="Contactez-moi"
        description="N'hesitez pas à me contacter pour toute question ou suggestion"
      />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-heading font-bold text-white text-center mb-6">
              Informations de contact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <motion.div
                    key={index}
                    variants={fadeIn("up", index * 0.1)}
                    className="flex items-center gap-4 p-6 bg-dark rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 h-full w-full"
                    whileHover={{ y: -5 }}
                  >
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="text-xl text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-gray-400 text-sm mb-0.5">
                        {info.title}
                      </p>
                      <p className="text-white font-medium truncate">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                );

                return info.link ? (
                  <a key={index} href={info.link} className="block w-full">
                    {content}
                  </a>
                ) : (
                  <div key={index} className="w-full">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Form */}
        <h3 className="text-2xl font-heading font-bold text-white text-center mb-6">
          Formulaire de contact
        </h3>
        <motion.div variants={fadeIn("up", 0.5)}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div variants={fadeIn("up", 0.6)}>
                <Input
                  label="Nom"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                />
              </motion.div>
              <motion.div variants={fadeIn("up", 0.7)}>
                <Input
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                />
              </motion.div>
            </div>

            <motion.div variants={fadeIn("up", 0.8)}>
              <Input
                label="Sujet"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Sujet du message"
              />
            </motion.div>

            <motion.div variants={fadeIn("up", 0.9)}>
              <Input
                label="Message"
                id="message"
                name="message"
                textarea
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Votre message..."
                required
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 1.0)}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <PrimaryButton
                type="submit"
                className="w-full px-8 py-4 flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50"
              >
                <FaPaperPlane />
                Envoyer le message
              </PrimaryButton>
            </motion.div>
          </form>
        </motion.div>
      </section>
    </motion.div>
  );
}
