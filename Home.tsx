import { Header } from "@/components/Header";
import Timer, { TimerRef } from "@/components/Timer";
import TimerSettings from "@/components/TimerSettings";
import TodoList from "@/components/TodoList";
import ApexAI from "@/components/ApexAI";
import { useState, useRef } from "react";
import { Clock, ListChecks, Trophy, ChevronRight, Bot } from "lucide-react";

export default function Home() {
  const [timerCompleted, setTimerCompleted] = useState(false);
  const [isApexAIOpen, setIsApexAIOpen] = useState(false);
  const timerRef = useRef<TimerRef>(null);
  
  const openApexAI = () => setIsApexAIOpen(true);
  const closeApexAI = () => setIsApexAIOpen(false);
  
  const startFocusTimer = () => {
    if (timerRef.current) {
      timerRef.current.startTimer();
      
      // Scroll to the timer section for visibility
      const timerSection = document.getElementById('timer-section');
      if (timerSection) {
        timerSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <div className="min-h-screen text-foreground font-sans relative">
      {/* Background features */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-hero-pattern opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-hero-pattern opacity-20 blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-2 max-w-7xl">
          {/* Hero Section */}
          <section className="mb-12 glass-card p-8 rounded-2xl relative overflow-hidden animate-slide-in-up">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-premium-gradient opacity-10 blur-2xl"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-3xl md:text-4xl font-bold premium-header mb-4">
                  Achieve More With <span className="text-primary">Focused Time</span>
                </h2>
                <p className="text-muted-foreground premium-text leading-relaxed max-w-md mb-6">
                  Optimize your productivity with our professional timer and task management system.
                  Track your progress and build consistent habits with INVICTUS APEX.
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={startFocusTimer}
                    className="premium-button px-6 py-3 rounded-full flex items-center hover:shadow-premium-hover transition-all"
                  >
                    <Clock className="w-5 h-5 mr-2" />
                    Start Timer
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                  <button 
                    onClick={openApexAI}
                    className="px-6 py-3 rounded-full flex items-center bg-accent text-white hover:bg-accent/90 transition-colors shadow-premium"
                  >
                    <Bot className="w-5 h-5 mr-2" />
                    Apex AI
                    <span className="relative flex h-3 w-3 ml-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                  </button>
                </div>
              </div>
              
              <div className="w-64 h-64 rounded-full bg-premium-gradient-animate bg-[size:200%_200%] animate-gradient-shift flex items-center justify-center shadow-premium">
                <div className="w-56 h-56 rounded-full bg-background/90 flex items-center justify-center">
                  <div className="text-center">
                    <Trophy className="w-12 h-12 text-primary mx-auto mb-2" />
                    <div className="text-4xl font-bold premium-header">25:00</div>
                    <div className="text-xs text-muted-foreground">POMODORO TECHNIQUE</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Timer Section */}
            <div className="lg:col-span-2 space-y-8">
              <section id="timer-section" className="glass-card p-6 rounded-xl shadow-premium">
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  <h2 className="text-xl font-bold premium-header">Focus Timer</h2>
                </div>
                <Timer 
                  ref={timerRef}
                  onTimerComplete={() => setTimerCompleted(true)}
                />
              </section>
              
              <section className="glass-card p-6 rounded-xl shadow-premium">
                <div className="flex items-center mb-4">
                  <ListChecks className="w-5 h-5 text-primary mr-2" />
                  <h2 className="text-xl font-bold premium-header">Timer Settings</h2>
                </div>
                <TimerSettings />
              </section>
            </div>
            
            {/* Todo Section */}
            <div className="lg:col-span-3">
              <section className="glass-card p-6 rounded-xl shadow-premium h-full">
                <TodoList />
              </section>
            </div>
          </div>
        </main>
        
        <footer className="mt-12 py-6 border-t border-primary/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-8 h-8 rounded-full bg-premium-gradient flex items-center justify-center mr-2">
                  <span className="text-xs font-bold text-white">IA</span>
                </div>
                <p className="text-sm premium-text text-muted-foreground">
                  © {new Date().getFullYear()} INVICTUS APEX. All rights reserved.
                </p>
              </div>
              
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</a>
                <a href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      
      {/* AI Assistant Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          className="group w-16 h-16 rounded-full bg-premium-gradient flex items-center justify-center shadow-premium hover:shadow-premium-hover transition-all duration-300 relative"
          aria-label="Open Apex AI Assistant"
          onClick={openApexAI}
        >
          <Bot className="w-7 h-7 text-white" />
          <div className="absolute -top-10 right-0 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-md border border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            <span className="premium-text text-xs">Apex AI</span>
          </div>
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center shadow-sm border border-white/20">
            <span className="animate-pulse w-3 h-3 rounded-full bg-white"></span>
          </span>
        </button>
      </div>
      
      {/* Apex AI Component */}
      <ApexAI isOpen={isApexAIOpen} onClose={closeApexAI} />
    </div>
  );
}
