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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/files/76e3436c-71c2-4575-be17-2e22001a75da.jpg)",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-8">
        <div className="text-lg font-medium text-cyan-400 uppercase tracking-wider">
          LOWEST POINT
        </div>

        <nav className="hidden md:flex space-x-8 text-sm">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className="uppercase text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <Icon name="Globe" className="text-gray-400 w-4 h-4" />
          <span className="text-gray-400 text-sm">RU</span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[75vh] text-center px-6">
        <div className="animate-fade-in space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-[0.2em] font-oswald">
            LOWEST POINT
          </h1>

          <p className="text-lg md:text-xl text-gray-300 font-light">
            Ты не на дне. Ты глубже.
          </p>

          <Button className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 text-sm font-medium rounded transition-all duration-200">
            <Icon name="Play" className="w-4 h-4 mr-2" />
            Открыть трейлер
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="w-5 h-5 text-gray-500" />
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
