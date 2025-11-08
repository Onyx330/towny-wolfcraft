import { ArrowRight, Users, Trophy, Sword, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiscordButton from "@/components/DiscordButton";

const Home = () => {
  const stats = [
    { label: "Aktif Oyuncu", value: "2,500+", icon: Users },
    { label: "Kurulmuş Şehir", value: "450+", icon: Trophy },
    { label: "Günlük Etkinlik", value: "50+", icon: Sword },
  ];

  const features = [
    {
      title: "Towny Sistemi",
      description: "Kendi şehrini kur, yönet ve büyüt. Komşularınla ticaret yap!",
      icon: Trophy,
    },
    {
      title: "Ekonomi",
      description: "Gelişmiş ekonomi sistemi ile zenginliğini artır.",
      icon: ShoppingBag,
    },
    {
      title: "Savaşlar",
      description: "Epik savaşlara katıl, şehrini savun veya fethet!",
      icon: Sword,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              WolfCraft Towny
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Türkiye'nin en büyük ve en eğlenceli Towny sunucusuna hoş geldin!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">Sunucu IP</p>
                <p className="text-xl font-bold text-primary">oyna.wolfcraft.space</p>
              </div>
              <DiscordButton />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="gaming-card border-border">
                <CardContent className="flex items-center gap-4 p-6">
                  <stat.icon className="w-12 h-12 text-primary" />
                  <div>
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            Neler Sunuyoruz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="gaming-card border-border hover:scale-105 transition-transform">
                <CardContent className="p-8">
                  <feature.icon className="w-16 h-16 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20 px-4 bg-gaming-darker">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            Hemen Başla
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="gaming-card border-border hover:gaming-glow transition-shadow">
              <CardContent className="p-8">
                <ShoppingBag className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Mağaza</h3>
                <p className="text-muted-foreground mb-6">
                  Özel itemler, kozmetikler ve daha fazlası!
                </p>
                <Button asChild className="w-full">
                  <Link to="/shop">
                    Mağazaya Git <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="gaming-card border-border hover:gaming-glow transition-shadow">
              <CardContent className="p-8">
                <Trophy className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">VIP Paketler</h3>
                <p className="text-muted-foreground mb-6">
                  Özel yetkiler ve avantajlarla oyunun tadını çıkar!
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <Link to="/vip">
                    VIP Ol <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
