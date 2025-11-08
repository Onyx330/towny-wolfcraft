import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-gradient text-center">Hakkımızda</h1>
          
          <Card className="gaming-card border-border mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">WolfCraft Nedir?</h2>
              <p className="text-muted-foreground mb-4">
                WolfCraft, Türkiye'nin en büyük ve en kaliteli Minecraft Towny sunucusudur.
                2020 yılında kurulan sunucumuz, binlerce oyuncuya ev sahipliği yapmaktadır.
              </p>
              <p className="text-muted-foreground">
                Amacımız, oyunculara en iyi Towny deneyimini sunmak ve adil, eğlenceli
                bir oyun ortamı sağlamaktır.
              </p>
            </CardContent>
          </Card>

          <Card className="gaming-card border-border">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">İletişim</h2>
              <p className="text-muted-foreground">
                Discord: discord.gg/wolfcraft<br />
                E-posta: info@wolfcraft.space<br />
                Destek: support@wolfcraft.space
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
