import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Contact
              </span>
              <h1 className="heading-display text-primary-foreground mb-6">
                Parlons de votre <span className="text-accent">situation</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Notre équipe est à votre écoute pour étudier votre dossier et vous proposer
                une solution adaptée à votre situation d'indivision.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-secondary/50">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-premium text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
                <a href="tel:0142301000" className="text-muted-foreground hover:text-accent">
                  01.42.30.10.00
                </a>
              </div>
              <div className="card-premium text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a href="mailto:contact@patrimoine-indivis.fr" className="text-muted-foreground hover:text-accent">
                  contact@patrimoine-indivis.fr
                </a>
              </div>
              <div className="card-premium text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
                <p className="text-muted-foreground">02, rue d'Auteuil<br />75016 Paris</p>
              </div>
              <div className="card-premium text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Horaires</h3>
                <p className="text-muted-foreground">Lun-Ven : 9h-18h</p>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
