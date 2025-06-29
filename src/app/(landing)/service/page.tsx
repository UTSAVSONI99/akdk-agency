"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/landing/page-header2";
import GetAQuoteModal from "@/components/landing/GetAQuoteModal"; // ✅ imported here

const service = [
  {
    title: "Website Design and Development",
    description:
      "We specialize in crafting bespoke digital experiences that captivate audiences and drive results....",
    image: "/web.jpg",
    link: `/service/website-development`,
  },
  {
    title: "Mobile App Development",
    description:
      "Reach a broader audience with cross-platform mobile app development. Our team leverages the latest technologies to build apps ....",
    image: "/mobile.jpg",
    link: `/service/mobile-development`,
  },
  {
    title: "E-commerce & CMS",
    description:
      "Beyond the norm, IQSetters provides outstanding E-commerce and Content Management System (CMS) services that transform...",
    image: "/cms.jpg",
    link: `/service/ecommerce`,
  },
  {
    title: "Package Starts at  On Request",
    description:
      "Recognizing your online presence is essential for success in the digital age. Get unparalleled insight into the functionality...",
    image: "/package.jpg",
    link: `/service/package`,
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Making an impression in the crowded online environment is crucial. Our Search Engine Optimization (SEO) services aim...",
    image: "/seo.jpg",
    link: `/service/seoptimize`,
  },
];

export default function Service2() {
  const [showQuoteModal, setShowQuoteModal] = React.useState(false);

  return (
    <>
      {/* ✅ Only show modal when state is true */}
      {showQuoteModal && (
        <GetAQuoteModal setShowQuoteModal={setShowQuoteModal} />
      )}

      <PageHeader
        heading={<>Our Comprehensive Web App Services</>}
        description={
          <>
            At AKDK Digital, we offer a range of web app services designed to
            meet your business needs. Our team of expert developers is dedicated
            to delivering custom solutions, seamless upgrades, and ongoing
            support to ensure your web applications are always performing at
            their best. Discover how we can help you achieve your digital goals.
          </>
        }
      />

      <section className="max-w-[1440px] mx-auto py-40 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 sm:gap-8">
          {service.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              setShowQuoteModal={setShowQuoteModal}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  service,
  setShowQuoteModal,
}: {
  service: { title: string; description: string; image: string; link: string };
  setShowQuoteModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#000000]/20">
      <Link href={service.link}>
        <Image
          src={service.image}
          alt={service.title}
          width={500}
          height={500}
          className="w-full h-60 sm:h-72 lg:h-80 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
            {service.title}
          </h3>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            {service.description}
          </p>
        </div>
      </Link>
      <div className="pb-5 text-center">
        <Button
          variant="link"
          onClick={(e) => {
            e.stopPropagation();
            setShowQuoteModal(true);
          }}
        >
          Get a Quote
        </Button>
      </div>
    </div>
  );
}
