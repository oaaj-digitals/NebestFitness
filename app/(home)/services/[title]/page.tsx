import services from "../../../utilis/services";
import ServicePageContent from "../../../components/ServicePage/ServicePage";

interface Props {
  params: { title: string; };
}

export async function generateStaticParams() {

  // Extract service titles from your data
  const servicesTitle = services.map((service) => service["title"].toLowerCase().replace(/\s/g, "_"));

  return servicesTitle.map((title) => ({ title: title }));
}

const ServiceDetailPage = ({ params: { title } }: Props) => {
  return (
    <main>
      {
        services.map(
          service => (
            service.title.toLowerCase().replace(/\s/g, "_") == title ? <ServicePageContent service={service} key={service.id} /> : null
          )
        )
      }
    </main>
  );
};

export default ServiceDetailPage;