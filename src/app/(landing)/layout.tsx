import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landing/Footer";
import { FloatingQuestionnaireCTA } from "@/components/new-landing-comp/floating-questionnaire-cta";
import { headers } from "next/headers";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // const isHomePage;

  return (
    <div className="w-screen overflow-hidden relative min-h-screen bg-white antialiased z-0">
      <Navbar />
      {children}
      <Footer />
      {/* Floating Questionnaire CTA */}
      <FloatingQuestionnaireCTA />
    </div>
  );
}
