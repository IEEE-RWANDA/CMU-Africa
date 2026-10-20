// ---------------------------------------------------------------------------
// Content for the IEEE CS SBC CMU-Africa student branch site.
// Edit the arrays below to update the site; components only render this data.
// ---------------------------------------------------------------------------

// Leadership photos (hosted)
const JonathanImg = "https://ik.imagekit.io/simenya/IEEE/rwanda/ieee_ea_synergy/jonathan.png";
const KaviniImg = "https://ik.imagekit.io/simenya/IEEE/rwanda/ieee_ea_synergy/kavini.jpg";
const PeterImg = "https://ik.imagekit.io/simenya/IEEE/rwanda/ieee_ea_synergy/peter.JPG";
const RhodaImg = "https://ik.imagekit.io/simenya/IEEE/rwanda/ieee_ea_synergy/Rhoda.jpg";
const JamiuImg = "https://ik.imagekit.io/simenya/IEEE/rwanda/ieee_ea_synergy/jamiu.jpg";
const EdwinImg = "https://ik.imagekit.io/simenya/IEEE/rwanda/ieee_ea_synergy/prof_edwin.png";

// Activity / gallery photos
import imgClassroom from './assets/gallery/01-classroom-laptops.jpg';
import imgSealGroup from './assets/gallery/02-cmu-seal-group.jpg';
import imgHackathonWinners from './assets/gallery/03-techx-hackathon-winners.jpg';
import imgMentoring from './assets/gallery/04-mentoring-conversation.jpg';
import imgRegistration from './assets/gallery/05-registration-desk.jpg';
import imgStudentSpeaker from './assets/gallery/06-student-speaker.jpg';
import imgKeynote from './assets/gallery/07-keynote-techx-2026.jpg';
import imgGuest from './assets/gallery/08-attentive-guest.jpg';
import imgTechxGroup from './assets/gallery/09-techx-group-photo.jpg';
import imgVirtualKeynote from './assets/gallery/10-virtual-keynote.jpg';
import imgSpeakerSmile from './assets/gallery/11-speaker-smile.jpg';
import imgVolunteers from './assets/gallery/12-volunteers.jpg';
import imgAnsysTalk from './assets/gallery/13-ansys-talk.jpg';
import imgSynergyPanel from './assets/gallery/14-simulation-synergy-panel.jpg';
import imgAnsysPortrait from './assets/gallery/15-ansys-speaker-portrait.jpg';
import imgNetworking from './assets/gallery/16-networking-stand.jpg';
import imgCertificate from './assets/gallery/17-practicum-certificate.jpg';
import imgPanelist from './assets/gallery/18-panelist.jpg';
import imgSynergyGroup from './assets/gallery/19-simulation-synergy-group.jpg';
import imgFireside from './assets/gallery/20-fireside-chat.webp';

// Photos used by the legacy /journal/:id page
import tour from './assets/Innovation_Lab_Tour.jpg';
import industry from './assets/Corporate_Partner_Immersion.jpg';

// --- Navigation -------------------------------------------------------------
// `id` is the section id (and scroll-spy key). `tab` makes the link open that
// tab of the SB Overview section; `target` is the section to scroll to.
export const NAV_LINKS = [
    { label: 'Home', id: 'home' },
    { label: 'Leadership', id: 'leadership' },
    { label: 'Events', id: 'events', tab: 'events' },
    { label: 'Spotlight', id: 'spotlight', tab: 'spotlights', target: 'events' },
    { label: 'Timeline', id: 'timeline' },
    { label: 'Engage', id: 'engage' },
];

// --- Social channels --------------------------------------------------------
export const SOCIAL_LINKS = [
    { key: 'linkedin', label: 'LinkedIn', handle: 'IEEE CMU-Africa SB', href: 'https://www.linkedin.com/company/ieee-cmu-africa-sb' },
    { key: 'instagram', label: 'Instagram', handle: '@ieee.cmu.africa', href: 'https://www.instagram.com/ieee.cmu.africa/' },
    { key: 'facebook', label: 'Facebook', handle: 'ieee.cmu.africa', href: 'https://www.facebook.com/ieee.cmu.africa' },
];

// --- SB Overview: activity cards --------------------------------------------
export const ACTIVITY_TABS = [
    { key: 'events', label: 'Events' },
    { key: 'spotlights', label: 'Spotlights' },
    { key: 'upcoming', label: 'Upcoming' },
];

// category: technical | social | stem
export const ACTIVITY_CATEGORIES = {
    technical: 'Technical',
    social: 'Social',
    stem: 'STEM',
};

export const ACTIVITY_ITEMS = [
    // Events
    {
        id: 1,
        tab: 'events',
        category: 'technical',
        title: 'Rwanda Simulation Synergy',
        description: 'An industry networking workshop on numerical simulation and smart electrical systems, with Ansys, Ampersand, TRL Space and the University of Rwanda.',
        image: imgSynergyGroup,
    },
    {
        id: 2,
        tab: 'events',
        category: 'technical',
        title: 'TechX Rwanda 2026',
        description: 'A hackathon, talks and mentoring under the theme “Rethinking Career Growth in a Digital Age”, built to prepare students for tomorrow’s careers.',
        image: imgTechxGroup,
    },
    {
        id: 3,
        tab: 'events',
        category: 'social',
        title: 'Fireside Chats',
        description: 'Open conversations with global tech leaders on scaling innovation for social impact, from startups to human-centered systems.',
        image: imgFireside,
    },
    {
        id: 4,
        tab: 'events',
        category: 'social',
        title: 'Meet & Greet',
        description: 'Welcome sessions that bring IEEE members and newcomers together to build a close community from day one.',
        image: imgRegistration,
    },
    {
        id: 5,
        tab: 'events',
        category: 'stem',
        title: 'Tangaza Fellowship Outreach',
        description: 'Outreach with the Tangaza Fellowship that equips high school students with foundational technical skills.',
        image: imgStudentSpeaker,
    },
    {
        id: 6,
        tab: 'events',
        category: 'stem',
        title: 'High School Computer Training',
        description: 'Computer training programs for high school students across Rwanda, opening the door to a future in technology.',
        image: imgClassroom,
    },

    // Spotlights
    {
        id: 7,
        tab: 'spotlights',
        category: 'technical',
        title: 'IEEE MTT-S Presidents at CMU-Africa',
        description: 'We hosted the immediate past and current Presidents of IEEE MTT-S for high-impact talks with our students.',
        image: imgSynergyPanel,
    },
    {
        id: 8,
        tab: 'spotlights',
        category: 'social',
        title: 'IEEE Day 2025 Pre-Event',
        description: 'Dr. Mohamed Saeed, IEEE Region 8 Chair, joined us for vibrant discussions on innovation and leadership in IEEE.',
        image: imgSealGroup,
    },
    {
        id: 9,
        tab: 'spotlights',
        category: 'technical',
        title: 'TechX Hackathon Champions',
        description: 'Our winning teams took home the trophies at TechX Rwanda 2026 — proof of what young African builders can do.',
        image: imgHackathonWinners,
    },
    {
        id: 10,
        tab: 'spotlights',
        category: 'technical',
        title: 'Simulation Practicum Graduates',
        description: 'Students earned certificates of simulation practicum completion after presenting their own engineering projects.',
        image: imgCertificate,
    },

    // Upcoming (see the Timeline section for dates)
    {
        id: 11,
        tab: 'upcoming',
        category: 'technical',
        title: 'Tech Horizons Series',
        description: 'A recurring talk series on the technologies shaping Africa’s future, with in-person and virtual sessions.',
        image: imgAnsysTalk,
    },
    {
        id: 12,
        tab: 'upcoming',
        category: 'stem',
        title: 'Technology & AI Empowerment Outreach',
        description: 'School outreach that introduces high school students to technology and AI through hands-on sessions.',
        image: imgSpeakerSmile,
    },
    {
        id: 13,
        tab: 'upcoming',
        category: 'stem',
        title: 'Interschool Hackathon',
        description: 'Student teams from different schools build and pitch ideas together, with Africa Innovators Society.',
        image: imgVolunteers,
    },
];

// --- What we cover ----------------------------------------------------------
// (icons live in components/Collections.jsx, matched by `icon` key)
export const FOCUS_AREAS = [
    {
        id: 1,
        icon: 'entrepreneurship',
        title: 'Entrepreneurship',
        text: 'Pitch practice, founder conversations and venture-building workshops that turn student ideas into scalable African solutions.',
    },
    {
        id: 2,
        icon: 'outreach',
        title: 'STEM Outreach',
        text: 'Computer training and school programs, including our work with the Tangaza Fellowship, that inspire the next generation of Rwandan technologists.',
    },
    {
        id: 3,
        icon: 'leadership',
        title: 'Leadership & Mentorship',
        text: 'Officer roles, nano-mentoring and direct access to IEEE leaders that groom students to lead teams, chapters and organizations.',
    },
    {
        id: 4,
        icon: 'innovation',
        title: 'Innovation & Hackathons',
        text: 'Hackathons and design challenges that turn classroom skills into working solutions for real community problems.',
    },
    {
        id: 5,
        icon: 'technical',
        title: 'Technical Skills & Industry',
        text: 'Hands-on learning in computing, cybersecurity, data science and simulation, alongside industry partners such as Ansys.',
    },
    {
        id: 6,
        icon: 'community',
        title: 'Community & Career Growth',
        text: 'Meet & greets, networking and IEEE membership pathways that build lasting relationships and career readiness.',
    },
];

// --- Leadership -------------------------------------------------------------
export const TEAM_MEMBERS = [
    {
        id: 1,
        name: 'Jonathan Simenya',
        role: 'RAS Chapter Chair',
        image: JonathanImg,
        linkedin: 'https://www.linkedin.com',
        email: 'jonathan.simenya@example.com',
    },
    {
        id: 2,
        name: 'Rhoda Ojetola',
        role: 'Vice Chair',
        image: RhodaImg,
        linkedin: 'https://www.linkedin.com',
        email: 'rhoda@example.com',
    },
    {
        id: 3,
        name: 'Peter Adeyemo',
        role: 'Secretary',
        image: PeterImg,
        linkedin: 'https://www.linkedin.com',
        email: 'peter.adeyemo@example.com',
    },
    {
        id: 4,
        name: 'Kavini Esther',
        role: 'Treasurer',
        image: KaviniImg,
        linkedin: 'https://www.linkedin.com',
        email: 'kavini.esther@example.com',
    },
    {
        id: 5,
        name: 'Jamiu',
        role: 'Technical Lead',
        image: JamiuImg,
        linkedin: 'https://www.linkedin.com',
        email: 'jamiu@example.com',
    },
    {
        id: 6,
        name: 'Dr. Edwin Mugume',
        role: 'Advisor',
        image: EdwinImg,
        linkedin: 'https://www.linkedin.com',
        email: 'edwin.mugume@example.com',
    },
];

// --- Timeline (upcoming SB activities) --------------------------------------
// DEMO DATA: taken from the Spring 2026 plan (ieee-cmu-spring26.netlify.app).
// Replace with the real upcoming schedule. `date` is ISO (YYYY-MM-DD) and the
// weekday / month are derived from it. type: 'ieee' | 'collab'
export const TIMELINE_FILTERS = [
    { key: 'all', label: 'All' },
    { key: 'ieee', label: 'IEEE' },
    { key: 'collab', label: 'Collaboration' },
];

export const TIMELINE_EVENTS = [
    { id: 1, date: '2026-01-16', type: 'ieee', title: 'Technology and AI Empowerment Program Outreach', time: '3:00 PM', location: 'School Outreach' },
    { id: 2, date: '2026-01-30', type: 'ieee', title: 'IEEE CMU-Africa Tech Horizons Series', time: '2:00 PM', location: 'A203' },
    { id: 3, date: '2026-02-06', type: 'collab', title: 'Financial Literacy Workshop', subtitle: 'Women in Tech (TechX Pre-workshop)', time: '4:00 PM', location: 'A203' },
    { id: 4, date: '2026-02-19', type: 'ieee', title: 'Tech Horizons Series', time: '2:00 PM', location: 'Virtual Event' },
    { id: 5, date: '2026-02-20', type: 'ieee', title: 'Technology and AI Empowerment Program Outreach', time: '3:00 PM', location: 'School Outreach' },
    { id: 6, date: '2026-02-28', type: 'collab', title: 'Interschool Hackathon', subtitle: 'Africa Innovators (TechX Pre-workshop)', time: '10:00 AM', location: 'A203' },
    { id: 7, date: '2026-03-14', type: 'ieee', title: 'Industry Tour', time: '9:00 AM', location: 'TBD' },
    { id: 8, date: '2026-03-28', type: 'ieee', title: 'Tech X Rwanda ’26', time: '9:00 AM', location: 'A203' },
];

// --- Gallery (previous activities) ------------------------------------------
export const GALLERY_IMAGES = [
    { src: imgSealGroup, w: 2000, h: 1250, alt: 'Members and guests gathered in front of the Carnegie Mellon University seal' },
    { src: imgHackathonWinners, w: 2000, h: 1600, alt: 'TechX Rwanda 2026 hackathon winners holding their trophies' },
    { src: imgAnsysPortrait, w: 1333, h: 2000, alt: 'Industry speaker presenting beside an Ansys banner' },
    { src: imgClassroom, w: 2000, h: 1429, alt: 'Students listening during a session, laptops open' },
    { src: imgSynergyPanel, w: 2000, h: 1140, alt: 'Panel discussion at the Rwanda Simulation Synergy workshop' },
    { src: imgMentoring, w: 2000, h: 1600, alt: 'Two students in deep conversation during a mentoring session' },
    { src: imgTechxGroup, w: 2000, h: 1250, alt: 'Group photo of TechX Rwanda 2026 participants' },
    { src: imgStudentSpeaker, w: 2000, h: 1250, alt: 'Student speaker addressing the audience between IEEE banners' },
    { src: imgPanelist, w: 1333, h: 2000, alt: 'Panelist speaking into a microphone' },
    { src: imgRegistration, w: 2000, h: 1283, alt: 'Volunteers at the registration desk with event T-shirts' },
    { src: imgKeynote, w: 2000, h: 1334, alt: 'Keynote speaker at TechX Rwanda 2026' },
    { src: imgGuest, w: 2000, h: 1600, alt: 'Guest in traditional attire listening attentively' },
    { src: imgNetworking, w: 2000, h: 1333, alt: 'Students networking at an industry stand' },
    { src: imgVirtualKeynote, w: 2000, h: 1334, alt: 'Audience watching a virtual keynote on the big screen' },
    { src: imgSpeakerSmile, w: 2000, h: 1600, alt: 'Smiling speaker holding a microphone' },
    { src: imgCertificate, w: 2000, h: 1333, alt: 'Student receiving a simulation practicum certificate' },
    { src: imgVolunteers, w: 2000, h: 1600, alt: 'Three student volunteers wearing IEEE Young Professionals and Computer Society shirts' },
    { src: imgAnsysTalk, w: 2000, h: 1333, alt: 'Ansys speaker presenting to students' },
    { src: imgSynergyGroup, w: 2000, h: 1333, alt: 'Group photo on the CMU-Africa steps after the Simulation Synergy workshop' },
    { src: imgFireside, w: 1900, h: 1080, alt: 'Fireside chat with students seated in a semicircle' },
];

// --- Legacy journal posts (used by /journal/:id) -----------------------------
export const JOURNAL_POSTS = [
    {
        id: 1,
        date: '12 OCT 2026',
        title: 'Chasing Light in Namibia',
        excerpt: 'The dunes of Sossusvlei offer a palette unlike anywhere else on earth.',
        image: tour,
        content: `
            <p>Namibia is a land of contrasts. The stark beauty of the Namib desert, the oldest in the world, presents a unique challenge and opportunity for any photographer.</p>
            <p>We spent three days camping near Sossusvlei, waking up long before dawn to catch the first rays of sunlight hitting the red dunes. The interplay of light and shadow created abstract forms that felt more like paintings than photographs.</p>
            <p>The key to shooting in this environment is patience. The light changes rapidly, transforming the landscape from flat and featureless to dramatic and dimensional in a matter of minutes.</p>
        `
    },
    {
        id: 2,
        date: '05 SEP 2026',
        title: 'Gear Guide: GFX 100S II',
        excerpt: 'Why medium format is the future of our high-end studio editorials.',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600',
        content: `
            <p>In the studio, detail is everything. We recently upgraded our main driver to the Fujifilm GFX 100S II, and the difference is palpable.</p>
            <p>The dynamic range allows us to push shadows and pull highlights in ways that were previously impossible without significant noise. For our fashion editorials, where texture and skin tones are paramount, duplicate format is a game changer.</p>
        `
    },
    {
        id: 3,
        date: '22 AUG 2026',
        title: 'Chants of Truimp',
        excerpt: 'Documenting the vibrant energy of Africa’s most competitive tournament.',
        image: industry,
        content: `
            <p>Accra never sleeps. The energy is infectious, a constant hum of music, conversation, and movement. Documenting the nightlife here requires a fast lens and faster reflexes.</p>
            <p>We focused on capturing the candid moments – the laughter, the dance, the connection between people. It’s not just about the party; it’s about the community.</p>
        `
    },
];
