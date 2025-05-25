import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState("правила");

  const navItems = [
    "правила",
    "о игре",
    "медиа",
    "отзывы",
    "купить",
    "контакты",
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/files/76e3436c-71c2-4575-be17-2e22001a75da.jpg)",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-cyan-400 font-oswald tracking-wider">
          LOWEST POINT
        </div>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`uppercase text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                activeTab === item
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Icon name="Globe" className="text-gray-400 w-5 h-5" />
          <span className="text-gray-400 text-sm">RU</span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-oswald tracking-widest glitch-effect">
            LOWEST POINT
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light typing-animation">
            Ты не на дне. Ты глубже.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-medium rounded-none border-none transition-all duration-300 transform hover:scale-105 pulse-glow">
              <Icon name="Play" className="w-5 h-5 mr-3" />
              Открыть трейлер
            </Button>

            <Button className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 text-lg font-medium rounded-none transition-all duration-300 transform hover:scale-105">
              <Icon name="Download" className="w-5 h-5 mr-3" />
              Демо версия
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="w-6 h-6 text-gray-400" />
        </div>
      </main>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-6 right-6 z-20">
        <Button variant="ghost" size="sm">
          <Icon name="Menu" className="w-6 h-6 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
