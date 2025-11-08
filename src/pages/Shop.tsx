import { ShoppingCart, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Shop = () => {
  const items = [
    {
      name: "Elmas Zırh Seti",
      price: "150₺",
      description: "Tam koruma sağlayan elmas zırh takımı",
      icon: "💎",
    },
    {
      name: "Netherite Kılıç",
      price: "200₺",
      description: "Keskinlik V ve Yağma III büyülü",
      icon: "⚔️",
    },
    {
      name: "Elytra",
      price: "300₺",
      description: "Uçuş için elytra kanatları",
      icon: "🦅",
    },
    {
      name: "Spawner",
      price: "500₺",
      description: "İstediğin mob spawner'ı",
      icon: "🔮",
    },
    {
      name: "Kozmetik Paket",
      price: "100₺",
      description: "Özel parçacık efektleri ve isim renkleri",
      icon: "✨",
    },
    {
      name: "Şehir Genişletme",
      price: "250₺",
      description: "Şehir sınırlarını genişlet",
      icon: "🏰",
    },
  ];

  const handlePurchase = (itemName: string) => {
    toast.success(`${itemName} sepete eklendi!`, {
      description: "Ödeme sayfasına yönlendiriliyorsunuz...",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gradient">Mağaza</h1>
          <p className="text-xl text-muted-foreground">
            Oyun içi avantajlar ve özel itemler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Card key={index} className="gaming-card border-border hover:gaming-glow transition-all">
              <CardHeader>
                <div className="text-6xl mb-4 text-center">{item.icon}</div>
                <CardTitle className="text-center">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center mb-4">
                  {item.description}
                </p>
                <p className="text-3xl font-bold text-primary text-center">
                  {item.price}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full gaming-glow"
                  onClick={() => handlePurchase(item.name)}
                >
                  <ShoppingCart className="mr-2" />
                  Satın Al
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="gaming-card border-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Package className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Güvenli Ödeme</h3>
              <p className="text-muted-foreground">
                Tüm ödemeler SSL ile şifrelenir. Kredi kartı, havale/EFT ve
                kripto para ile ödeme yapabilirsiniz.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
