import { Crown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const VIP = () => {
  const vipPackages = [
    {
      name: "VIP",
      price: "50₺",
      duration: "30 Gün",
      color: "from-green-500 to-emerald-600",
      features: [
        "Yeşil isim rengi",
        "/fly komutu",
        "5 ev kurma hakkı",
        "Özel VIP lobisi",
        "Chat renkleri",
      ],
    },
    {
      name: "VIP+",
      price: "100₺",
      duration: "30 Gün",
      color: "from-blue-500 to-cyan-600",
      features: [
        "Mavi isim rengi",
        "Tüm VIP özellikleri",
        "/god komutu",
        "10 ev kurma hakkı",
        "Özel pet'ler",
        "/workbench komutu",
      ],
    },
    {
      name: "MVP",
      price: "200₺",
      duration: "30 Gün",
      color: "from-purple-500 to-pink-600",
      popular: true,
      features: [
        "Mor isim rengi",
        "Tüm VIP+ özellikleri",
        "/heal komutu",
        "Sınırsız ev",
        "Özel parçacık efektleri",
        "/repair komutu",
        "Priority join",
      ],
    },
    {
      name: "MVP+",
      price: "350₺",
      duration: "30 Gün",
      color: "from-yellow-500 to-orange-600",
      features: [
        "Altın isim rengi",
        "Tüm MVP özellikleri",
        "/nick komutu",
        "Özel komutlar",
        "Aylık kozmetik paket",
        "/enderchest komutu",
        "Şehir bonusları",
        "VIP+ desteği",
      ],
    },
  ];

  const handlePurchase = (packageName: string) => {
    toast.success(`${packageName} paketi seçildi!`, {
      description: "Ödeme sayfasına yönlendiriliyorsunuz...",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <Crown className="w-20 h-20 text-primary mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4 text-gradient">VIP Paketler</h1>
          <p className="text-xl text-muted-foreground">
            Özel yetkiler ve avantajlarla oyunun tadını çıkar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vipPackages.map((pkg, index) => (
            <Card
              key={index}
              className={`gaming-card border-border hover:gaming-glow transition-all relative ${
                pkg.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  Popüler
                </div>
              )}
              <CardHeader>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center`}>
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-center text-2xl">{pkg.name}</CardTitle>
                <p className="text-center text-muted-foreground">{pkg.duration}</p>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-primary text-center mb-6">
                  {pkg.price}
                </p>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full gaming-glow"
                  variant={pkg.popular ? "default" : "secondary"}
                  onClick={() => handlePurchase(pkg.name)}
                >
                  Satın Al
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="gaming-card border-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-3">Lifetime Paketler</h3>
              <p className="text-muted-foreground mb-4">
                Ömür boyu VIP paketleri için bizimle iletişime geçin!
              </p>
              <Button variant="outline">İletişime Geç</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VIP;
