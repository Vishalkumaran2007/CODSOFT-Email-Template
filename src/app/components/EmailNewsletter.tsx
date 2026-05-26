import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Mail, 
  Bell, 
  Send, 
  Timer, 
  Ruler, 
  SlidersHorizontal, 
  Users,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

export function EmailNewsletter() {
  const features = [
    {
      icon: Timer,
      title: "Timer",
      description: "Track your time efficiently with our built-in timer feature",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Ruler,
      title: "Measure Tool",
      description: "Precise measurement tools for your projects",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: SlidersHorizontal,
      title: "Slider",
      description: "Customize your experience with intuitive sliders",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Users,
      title: "Users",
      description: "Collaborate with your team seamlessly",
      color: "bg-pink-100 text-pink-600"
    }
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Instagram, label: "Instagram" },
    { icon: Linkedin, label: "LinkedIn" }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Main Email Container */}
      <Card className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 md:px-10 md:py-6 flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900">SaasFlow</span>
          </div>
          <div className="text-sm font-medium text-gray-600">
            Weekly Newsletter
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-50/50 to-peach-50 px-6 py-10 md:px-10 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Don't miss out our BIG news!
                </h1>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Get the latest updates, feature releases, and exclusive insights delivered straight to your inbox. Stay ahead with our newest innovations.
                </p>
              </div>
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Go to your account!
              </Button>
            </div>

            {/* Right Illustration */}
            <div className="relative hidden md:block">
              <div className="relative aspect-square">
                {/* Background Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200/50 rounded-full blur-3xl opacity-50"></div>
                
                {/* Icons Arrangement */}
                <div className="relative h-full flex items-center justify-center">
                  <div className="relative">
                    {/* Central Mail Icon */}
                    <div className="w-32 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center relative z-10">
                      <Mail className="w-16 h-16 text-orange-500" />
                    </div>
                    
                    {/* Notification Bell - Top Right */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg flex items-center justify-center rotate-12">
                      <Bell className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Paper Plane - Bottom Left */}
                    <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg flex items-center justify-center -rotate-12">
                      <Send className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="px-6 py-12 md:px-10 md:py-16 bg-white">
          <div className="space-y-10">
            {/* Section Header */}
            <div className="text-center space-y-4">
              <div className="inline-block">
                <span className="text-orange-500 font-bold text-sm tracking-wider uppercase">
                  NEW RELEASES
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Checkout our amazing features
              </h2>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={index}
                    className="p-6 md:p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="space-y-4">
                      {/* Icon */}
                      <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-6 py-12 md:px-10 md:py-16 bg-gradient-to-br from-orange-50/50 to-peach-50 text-center">
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Go to your account!
          </Button>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-br from-peach-100/80 to-orange-100/60 px-6 py-8 md:px-10 md:py-10">
          <div className="space-y-6">
            {/* Social & Logo Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={index}
                      className="w-10 h-10 bg-white hover:bg-orange-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  );
                })}
              </div>

              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-gray-900">SaasFlow</span>
              </div>
            </div>

            {/* Footer Text */}
            <div className="text-center space-y-3">
              <p className="text-sm text-gray-600 leading-relaxed">
                You received this email because you signed up on our website or made a purchase from us.
              </p>
              <button className="text-sm text-orange-600 hover:text-orange-700 font-medium underline">
                Unsubscribe
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* Preview Note */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          📧 This is a responsive email newsletter template • Desktop, Tablet & Mobile Ready
        </p>
      </div>
    </div>
  );
}
