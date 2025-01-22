import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import NewArrival from "@/components/NewArrival";
import SaleBanner from "@/components/SaleBanner";
import TopSelling from "@/components/TopSelling";

export default async function Home() {
  return (
   <>
   <Banner/>
   <SaleBanner/>
   <Brands/>
   <NewArrival/>
   <TopSelling/>
   </>
  );
}
