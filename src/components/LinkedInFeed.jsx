import React from 'react';
import SectionHeading from './SectionHeading';
import FadeIn from './FadeIn';

// Live LinkedIn page posts, embedded through SociableKit.
const LinkedInFeed = () => {
    return (
        <section id="linkedin" className="py-24 px-6 md:px-12 container mx-auto">
            <SectionHeading title="From LinkedIn" subtitle="Latest from our page" />

            <FadeIn>
                <div className="max-w-5xl mx-auto overflow-hidden rounded-[28px] bg-white shadow-[0_30px_70px_rgba(0,40,85,0.12)]">
                    <iframe
                        src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/227129"
                        title="Latest posts from the IEEE CMU-Africa Student Branch LinkedIn page"
                        frameBorder="0"
                        width="100%"
                        height="1000px"
                        loading="lazy"
                    />
                </div>
            </FadeIn>
        </section>
    );
};

export default LinkedInFeed;
