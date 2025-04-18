import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { Github, Twitter, Linkedin, Mail, Send, ArrowLeft, ExternalLink } from "lucide-react";
import { Header } from "@/components/Header";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90">
      <Header />

      <main className="container mx-auto px-4 pt-8 pb-20">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Founder Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-premium-gradient">Get in Touch</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                We'd love to hear from you. Feel free to reach out with any questions or feedback.
              </p>
            </div>

            <Card className="border-0 overflow-hidden bg-black/20 backdrop-blur-xl shadow-premium">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-premium-gradient opacity-10"></div>
                  <div className="relative p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-tr from-primary/80 to-primary border-2 border-primary/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">RC</span>
                      </div>
                      <div className="space-y-2">
                        <h2 className="text-2xl md:text-3xl font-bold">Rajat Chhabra</h2>
                        <p className="text-muted-foreground">Founder & CEO</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold">About</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Rajat Chhabra is a student entrepreneur from Ambala, Haryana, with a passion for technology and education. 
                          His journey began when he identified the challenges that students face in maintaining focus and 
                          managing their time effectively. This inspired him to create INVICTUS APEX, a comprehensive productivity 
                          platform designed to empower students through innovative digital tools.
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          With a background in computer science and a deep understanding of educational needs, 
                          Rajat is committed to developing technology that makes a meaningful difference in students' lives. 
                          His vision is to create accessible, effective tools that help students achieve their full potential.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold">Education</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <p className="text-sm font-medium">Bachelor of Technology in Computer Science</p>
                            <p className="text-xs text-muted-foreground">2021 - 2025</p>
                          </div>
                          <p className="text-xs text-muted-foreground">Delhi Technological University</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold">Connect</h3>
                        <div className="flex flex-wrap gap-3">
                          <Button variant="outline" size="sm" className="h-9 px-3 rounded-full bg-background/30 hover:bg-primary/10 border-primary/10">
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </Button>
                          <Button variant="outline" size="sm" className="h-9 px-3 rounded-full bg-background/30 hover:bg-primary/10 border-primary/10">
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </Button>
                          <Button variant="outline" size="sm" className="h-9 px-3 rounded-full bg-background/30 hover:bg-primary/10 border-primary/10">
                            <Twitter className="h-4 w-4 mr-2" />
                            Twitter
                          </Button>
                          <Button variant="outline" size="sm" className="h-9 px-3 rounded-full bg-background/30 hover:bg-primary/10 border-primary/10">
                            <Mail className="h-4 w-4 mr-2" />
                            Email
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 rounded-xl bg-black/20 backdrop-blur-md border border-primary/5 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                At INVICTUS APEX, our mission is to transform the way students approach productivity and learning. 
                We believe that with the right tools and support, every student can achieve academic excellence 
                while maintaining a healthy balance in life. Our platform combines cutting-edge technology with 
                research-backed productivity methods to create an environment where focus and achievement come naturally.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h4 className="font-medium text-sm mb-2">Founded</h4>
                  <p className="text-lg font-bold">2023</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h4 className="font-medium text-sm mb-2">Location</h4>
                  <p className="text-lg font-bold">Ambala, Haryana</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-black/20 backdrop-blur-xl border-primary/10 overflow-hidden shadow-premium">
              <CardContent className="p-6 md:p-8">
                <div className="absolute inset-0 bg-premium-gradient opacity-5"></div>
                <div className="relative">
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-primary/10 focus:border-primary/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-primary/10 focus:border-primary/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-primary/10 focus:border-primary/30"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full py-6 bg-premium-gradient hover:bg-premium-gradient hover:opacity-90 text-white font-medium rounded-lg"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>

                  <div className="mt-12 pt-8 border-t border-primary/10">
                    <h3 className="text-lg font-medium mb-4">Visit Our Office</h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">contact@invictusapex.com</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Address</p>
                          <p className="text-sm text-muted-foreground">
                            Ambala, Haryana, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}