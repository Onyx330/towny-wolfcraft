import { Gamepad2, Swords, Target, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Games = () => {
  const games = [
    {
      name: "Towny",
      description: "Kendi şehrini kur, yönet ve büyüt. Ekonomik sistem ile ticaret yap.",
      icon: Trophy,
      players: "2000+",
      status: "Aktif",
    },
    {
      name: "Survival",
      description: "Klasik survival deneyimi. Custom enchantlar ve özel itemler.",
      icon: Gamepad2,
      players: "500+",
      status: "Aktif",
    },
    {
      name: "PvP Arena",
      description: "Yeteneklerini test et! 1v1 ve takım savaşları.",
      icon: Swords,
      players: "300+",
      status: "Aktif",
    },
    {
      name: "SkyBlock",
      description: "Gökyüzünde adanda hayatta kal ve genişlet.",
      icon: Target,
      players: "Yakında",
      status: "Yakında",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gradient">Oyun Modları</h1>
          <p className="text-xl text-muted-foreground">
            Farklı oyun modlarıyla eğlencenin sınırlarını zorla
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {games.map((game, index) => (
            <Card key={index} className="gaming-card border-border hover:gaming-glow transition-all">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                    <game.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{game.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        game.status === "Aktif" 
                          ? "bg-green-500/20 text-green-500" 
                          : "bg-yellow-500/20 text-yellow-500"
                      }`}>
                        {game.status}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {game.players} Oyuncu
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{game.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="gaming-card border-border max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                Daha Fazla Mod Geliyor!
              </h3>
              <p className="text-muted-foreground text-lg">
                Yeni oyun modları ve özellikler için takipte kalın. Discord
                sunucumuza katılarak gelişmelerden haberdar olabilirsiniz.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Games;
