import React from 'react';
import SectionHeading from './SectionHeading';
import cmuAfricaSBLogo from '../assets/partner_logos/cmu-africa-sb-logo.png';
import cmuAfricaLogo from '../assets/partner_logos/CMU_AFRICA_LOGO.png';
import ieeeRwandaLogo from '../assets/partner_logos/ieee-rwanda-logo.png';
import tanzaniaSectionLogo from '../assets/partner_logos/Tanzania_section_logo.png';
import wieRwandaLogo from '../assets/partner_logos/wie_rwanda_logo.png';
import ypRwandaLogo from '../assets/partner_logos/yp_rwanda_logo.png';
import comsocLogo from '../assets/partner_logos/ieee-comsoc.webp';
import rasLogo from '../assets/partner_logos/ieee-ras.png';
import casLogo from '../assets/partner_logos/ieee-cas.png';
import foundationLogo from '../assets/partner_logos/ieee-foundation.png';
import spaxLogo from '../assets/partner_logos/ieee-spax.jpg';
import youngProfessionalsLogo from '../assets/partner_logos/ieee-young-professionals.jpg';
import sypActivitiesLogo from '../assets/partner_logos/ieee-cs-syp-activities.png';
import techSocialsLogo from '../assets/partner_logos/ieee-cs-syp-tech-socials.png';
import microMentoringLogo from '../assets/partner_logos/ieee-cs-syp-micro-mentoring.png';
import urLogo from '../assets/partner_logos/ur-ieee-student-branch.png';
import neotixLogo from '../assets/partner_logos/neotix-robotics.png';
import slsEnergyLogo from '../assets/partner_logos/sls-energy.png';

const logos = [
  { src: ieeeRwandaLogo, name: 'IEEE Rwanda Subsection' },
  { src: cmuAfricaLogo, name: 'Carnegie Mellon University Africa' },
  { src: cmuAfricaSBLogo, name: 'IEEE CMU-Africa Student Branch' },
  { src: comsocLogo, name: 'IEEE Communications Society' },
  { src: rasLogo, name: 'IEEE Robotics and Automation Society' },
  { src: casLogo, name: 'IEEE Circuits and Systems Society' },
  { src: foundationLogo, name: 'IEEE Foundation' },
  { src: ypRwandaLogo, name: 'IEEE Young Professionals Rwanda' },
  { src: youngProfessionalsLogo, name: 'IEEE Young Professionals' },
  { src: wieRwandaLogo, name: 'IEEE Women in Engineering Rwanda' },
  { src: sypActivitiesLogo, name: 'IEEE Computer Society SYP Activities' },
  { src: techSocialsLogo, name: 'IEEE CS SYP Tech Socials' },
  { src: microMentoringLogo, name: 'IEEE CS SYP Micro Mentoring' },
  { src: spaxLogo, name: 'IEEE SPAX' },
  { src: urLogo, name: 'University of Rwanda IEEE Student Branch' },
  { src: tanzaniaSectionLogo, name: 'IEEE Tanzania Section' },
  { src: neotixLogo, name: 'Neotix Robotics' },
  { src: slsEnergyLogo, name: 'SLS Energy' },
];

const Collaborators = () => {
  // keep the scroll speed steady no matter how many logos there are
  const duration = `${logos.length * 3}s`;

  return (
    <section id="collaborators" className="py-8 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto rounded-[28px] bg-white px-6 py-5 md:px-10 md:py-6 shadow-[0_20px_50px_rgba(15,23,42,0.07)]">
          <SectionHeading title="Partners" titleClassName="text-black" compact />

          <div className="overflow-hidden">
            <div className="logo-marquee flex items-center gap-10 py-2" style={{ animationDuration: duration }}>
              {logos.concat(logos).map((logo, index) => (
                <div key={index} className="logo-marquee__item flex min-w-[110px] items-center justify-center">
                  <img
                    src={logo.src}
                    alt={index < logos.length ? logo.name : ''}
                    aria-hidden={index >= logos.length ? 'true' : undefined}
                    loading="lazy"
                    className="h-10 md:h-12 w-auto max-w-[150px] object-contain"
                  />
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
