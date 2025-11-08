import { ExternalLink, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Map = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-8">
          <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4 text-gradient">Sunucu Haritası</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Tüm şehirleri ve bölgeleri keşfet
          </p>
          <Button asChild variant="outline">
            <a
              href="http://map.wolfcraft.space:8123/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Tam Ekranda Aç
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <Card className="gaming-card border-border overflow-hidden">
          <CardContent className="p-0">
            <div className="relative w-full" style={{ paddingBottom: "75%" }}>
              <iframe
                src="http://map.wolfcraft.space:8123/"
                className="absolute inset-0 w-full h-full border-0"
                title="WolfCraft Server Map"
                loading="lazy"
              />
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="gaming-card border-border">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-2">🏰</div>
              <h3 className="font-bold text-xl mb-2">450+ Şehir</h3>
              <p className="text-muted-foreground">Keşfedilecek onlarca şehir</p>
            </CardContent>
          </Card>
          <Card className="gaming-card border-border">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <h3 className="font-bold text-xl mb-2">Dinamik Harita</h3>
              <p className="text-muted-foreground">Gerçek zamanlı güncelleme</p>
            </CardContent>
          </Card>
          <Card className="gaming-card border-border">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="font-bold text-xl mb-2">Özel Bölgeler</h3>
              <p className="text-muted-foreground">Event ve özel alanlar</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Map;
