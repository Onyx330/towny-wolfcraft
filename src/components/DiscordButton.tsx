import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const DiscordButton = () => {
  return (
    <a
      href="https://discord.gg/wolfcraft"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Button
        size="lg"
        className="gaming-glow group hover:scale-105 transition-all duration-300 animate-pulse"
      >
        <MessageCircle className="mr-2 group-hover:rotate-12 transition-transform" />
        Discord'a Katıl
      </Button>
    </a>
  );
};

export default DiscordButton;
