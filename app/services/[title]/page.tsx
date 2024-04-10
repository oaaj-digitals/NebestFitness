import services from "@/app/utilis/services";
import Image from "next/image";
import ServicePageContent from "@/app/components/ServicePage/ServicePage";

interface Props {
  params: { title: string; };
}



const ServiceDetailPage = ({ params: { title } }: Props) => {
  return (
    <main>
      {
        services.map(
          service => (
            service.title.toLowerCase().replace(" ", "_") == title ? <ServicePageContent service={service} key={service.id} /> : null
          )
        )
      }
    </main>
  );
};

export default ServiceDetailPage;