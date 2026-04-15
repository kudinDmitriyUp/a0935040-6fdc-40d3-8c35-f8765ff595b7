"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmall"
        background="fluid"
        cardStyle="glass-depth"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Happy Panda"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "downward-rays-static",
      }}
      logoText="Happy Panda Flowers"
      description="Bringing joy and elegance to your special moments with fresh, hand-arranged botanical masterpieces. Discover the beauty of nature, delivered to your doorstep."
      buttons={[
        {
          text: "Shop Bouquets",
          href: "#products",
        },
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/flowers-frame_23-2148133670.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Our Passion for Petals"
      description="At Happy Panda, we believe flowers are more than just plants—they are expressions of love, celebration, and comfort. Founded by floral enthusiasts, our studio brings local, sustainable, and artistic arrangements to every corner of the city."
      bulletPoints={[
        {
          title: "Artistic Vision",
          description: "Hand-crafted designs unique to your occasion.",
        },
        {
          title: "Sustainable Roots",
          description: "Supporting local growers and eco-friendly practices.",
        },
        {
          title: "Same-Day Delivery",
          description: "Fast and fresh service every single day.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/trimming_23-2148013619.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          label: "Events",
          title: "Wedding & Events",
          items: [
            "Venue decoration",
            "Personalized bouquets",
            "Corsages & boutonnieres",
          ],
        },
        {
          id: "f2",
          label: "Gifts",
          title: "Daily Gifts",
          items: [
            "Birthday surprises",
            "Anniversary flowers",
            "Just because",
          ],
        },
        {
          id: "f3",
          label: "Workshops",
          title: "Floral Workshops",
          items: [
            "Basic floral design",
            "Wreath making",
            "Professional techniques",
          ],
        },
      ]}
      title="What We Do"
      description="Comprehensive floral services tailored to bring your vision to life."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Spring",
          name: "Cream Elegance",
          price: "$45",
          rating: 5,
          reviewCount: "12",
          imageSrc: "http://img.b2bpic.net/free-photo/wedding-bouquet_23-2147990768.jpg",
        },
        {
          id: "p2",
          brand: "Summer",
          name: "Golden Joy",
          price: "$65",
          rating: 5,
          reviewCount: "8",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-autumn-bouquet-with-yellow-combination-flowers_114579-2477.jpg",
        },
        {
          id: "p3",
          brand: "Dried",
          name: "Everlasting Charm",
          price: "$35",
          rating: 4,
          reviewCount: "15",
          imageSrc: "http://img.b2bpic.net/free-photo/white-floral-arrangement-with-candle-books_9975-133808.jpg",
        },
        {
          id: "p4",
          brand: "Wedding",
          name: "Bridal Bloom",
          price: "$90",
          rating: 5,
          reviewCount: "22",
          imageSrc: "http://img.b2bpic.net/free-photo/floral-mandala_23-2151843131.jpg",
        },
        {
          id: "p5",
          brand: "Party",
          name: "Celebration Box",
          price: "$55",
          rating: 4,
          reviewCount: "10",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-composition-pink-spray-roses-alstroemeria-flowers-with-eucalyptus-wooden-box_140725-12153.jpg",
        },
        {
          id: "p6",
          brand: "Seasonal",
          name: "Lily Grace",
          price: "$50",
          rating: 5,
          reviewCount: "18",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-pink-white-color-alstroemeria-flowers-grey-background_141793-7918.jpg",
        },
      ]}
      title="Our Signature Arrangements"
      description="Hand-picked, seasonal blooms styled with care and flair."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "plan1",
          title: "Weekly Joy",
          price: "$29",
          period: "/week",
          features: [
            "Seasonal flowers",
            "Free delivery",
            "Standard vase included",
          ],
          button: {
            text: "Subscribe",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/woman-building-her-own-dried-flowers-arrangement_23-2149626681.jpg",
          imageAlt: "fresh flowers delivery service",
        },
        {
          id: "plan2",
          title: "Bi-Weekly Bloom",
          price: "$49",
          period: "/2 weeks",
          features: [
            "Premium stems",
            "Free delivery",
            "Customization options",
          ],
          button: {
            text: "Subscribe",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/flowers-frame_23-2148133670.jpg",
          imageAlt: "fresh flowers delivery service",
        },
        {
          id: "plan3",
          title: "Monthly Luxe",
          price: "$85",
          period: "/month",
          features: [
            "Deluxe arrangement",
            "Free delivery",
            "Priority shipping",
            "Exclusive perks",
          ],
          button: {
            text: "Subscribe",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/trimming_23-2148013619.jpg",
          imageAlt: "fresh flowers delivery service",
        },
      ]}
      title="Flower Subscriptions"
      description="Keep your home blooming with regular fresh floral deliveries."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Our Impact"
      tag="Milestones"
      metrics={[
        {
          id: "m1",
          value: "2.5k+",
          description: "Happy Customers",
        },
        {
          id: "m2",
          value: "12k+",
          description: "Bouquets Delivered",
        },
        {
          id: "m3",
          value: "5+",
          description: "Years of Joy",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Alice M.",
          role: "Wedding Client",
          company: "Local Event",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-smiling-with-bouquet-roses_23-2148080525.jpg",
        },
        {
          id: "t2",
          name: "John D.",
          role: "Subscriber",
          company: "Home Delivery",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-casual-peach-sweater-isolated-green-olive-wall-hold-orange-white-flower-box-composition-cotton-flowers-gypsophila-wheat-lagurus-gift-happy-amazed-surprised_343596-5124.jpg",
        },
        {
          id: "t3",
          name: "Sarah P.",
          role: "Birthday Giver",
          company: "Gift Registry",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-blonde-happy-female-florist-holding-pink-hydrangea-bouquet-two-hands_23-2148049452.jpg",
        },
        {
          id: "t4",
          name: "David W.",
          role: "Event Manager",
          company: "Corp Events",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-couple-decorating-home_23-2150633264.jpg",
        },
        {
          id: "t5",
          name: "Emily R.",
          role: "Daily User",
          company: "Lifestyle",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/flower-composition-glass-vase-white-orange-lithianthus-roses-side-view_141793-4422.jpg",
        },
      ]}
      title="Stories of Happiness"
      description="Hear from our beloved clients about their Happy Panda experience."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "downward-rays-static",
      }}
      text="Ready to bring some flowers to your world? We're here to help you design the perfect arrangement for your special day."
      buttons={[
        {
          text: "Contact Our Studio",
          href: "mailto:hello@happypanda.flowers",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/delicate-dark-blue-flowers-white-colored-water_23-2148256409.jpg"
      logoText="Happy Panda"
      columns={[
        {
          title: "Store",
          items: [
            {
              label: "Bouquets",
              href: "#products",
            },
            {
              label: "Subscriptions",
              href: "#pricing",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
