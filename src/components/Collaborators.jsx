import React from 'react';
import SectionHeading from './SectionHeading';
import cmuAfricaSBLogo from '../assets/partner_logos/cmu-africa-sb-logo.png';
import cmuAfricaLogo from '../assets/partner_logos/CMU_AFRICA_LOGO.png';
import ieeeRwandaLogo from '../assets/partner_logos/ieee-rwanda-logo.png';
import kenyaSectionLogo from '../assets/partner_logos/kenya_section_logo.png';
import tanzaniaSectionLogo from '../assets/partner_logos/Tanzania_section_logo.png';
import ugandaSectionLogo from '../assets/partner_logos/uganda_section_logo.png';
import wieRwandaLogo from '../assets/partner_logos/wie_rwanda_logo.png';
import ypRwandaLogo from '../assets/partner_logos/yp_rwanda_logo.png';

const logos = [
  ieeeRwandaLogo,  
  cmuAfricaLogo,
  ypRwandaLogo,
  ugandaSectionLogo,
  wieRwandaLogo,
  kenyaSectionLogo,
  cmuAfricaSBLogo,
  tanzaniaSectionLogo,
];

const Collaborators = () => {
  return (
    <section id="collaborators" className="py-16 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto rounded-[40px] bg-white p-8 md:p-12 shadow-[0_40px_80px_rgba(15,23,42,0.08)]">
          <SectionHeading title="Partners" titleClassName="text-black" />

          <div className="overflow-hidden">
            <div className="logo-marquee flex items-center gap-12 py-6">
              {logos.concat(logos).map((logo, index) => (
                <div key={index} className="logo-marquee__item flex min-w-[180px] items-center justify-center">
                  <img src={logo} alt={`Collaborator logo ${index + 1}`} className="h-16 md:h-20 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
