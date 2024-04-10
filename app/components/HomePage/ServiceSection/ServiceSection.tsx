import Image from 'next/image';
import styles from "./ServiceSection.module.css";
import Btn from '../../Btn/Btn';

import Link from 'next/link';

import services from '@/app/utilis/services';
import ServiceCard from '../../ServiceCard/ServiceCard';

const ServiceSection = () => {
  return (
    <section id="services" className={styles.section}>

      <div className='titleBox left'>
        <div>
          <h3 className='secondary-heading'>Services</h3>
          <div className="underline"></div>
        </div>
      </div>

      <div className={styles.serviceContainer}>
        {
          services.map(service => <ServiceCard title={service.title} image={service.image} key={service.id} />)
        }
      </div>

      <Btn link="https://pdfbwss34k5.typeform.com/to/Cf2YXHll?typeform-source=linktr.ee">
        Start Today
      </Btn>
    </section>
  );
};

export default ServiceSection;