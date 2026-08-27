import Bestsellers from "@/components/home/bestSellers";
import Hero from "@/components/home/hero";
import Highlights from "@/components/home/highlights";
import TestimonialCarousel from "@/components/reviews/TestimonialCarousel";



export default function HomePage() {
  return (
    <>
    <Hero/>
   <Bestsellers/>
   <Highlights/>
   <TestimonialCarousel/>
    </>
  );
}