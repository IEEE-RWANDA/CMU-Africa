// ---------------------------------------------------------------------------
// Content for the IEEE CMU-Africa student branch site.
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
import imgTangaza from './assets/gallery/21-tangaza-school-outreach.jpg';
import imgComputerTraining from './assets/gallery/22-computer-training-session.webp';
import imgHandshake from './assets/gallery/23-handshake-comsoc.jpg';
import imgBannerChat from './assets/gallery/24-ieee-banner-conversation.jpg';
import imgVisitors from './assets/gallery/25-registration-visitors.jpg';
import imgQrSpeaker from './assets/gallery/26-speaker-qr-code.jpg';
import imgLaughing from './assets/gallery/27-laughing-comsoc.jpg';
import imgAudienceQuestion from './assets/gallery/28-question-from-audience.jpg';
import imgLectureHall from './assets/gallery/29-tiny-computers-lecture-hall.jpg';
import imgGuestLecturer from './assets/gallery/30-guest-lecturer-podium.jpg';
import imgLecternSpeaker from './assets/gallery/31-speaker-at-lectern.jpg';
import imgSmilingAttendee from './assets/gallery/32-smiling-attendee.jpg';
import imgBench from './assets/gallery/33-attendees-on-bench.jpg';
import imgFoundationAttendees from './assets/gallery/34-seated-attendees-ieee-foundation.jpg';
import imgWiePresenter from './assets/gallery/35-wie-presenter.jpg';
import imgPanelBackdrop from './assets/gallery/36-panel-ieee-backdrop.jpg';
import imgVehiclePlant from './assets/gallery/37-industry-visit-vehicle-plant.jpg';
import imgZipline from './assets/gallery/38-zipline-muhanga-visit.jpg';
import imgEnergyLecture from './assets/gallery/39-energy-systems-lecture.jpg';
import imgLunchAerial from './assets/gallery/40-lunch-table-aerial.jpg';
import imgLeadershipWinners from './assets/gallery/41-synergy-leadership-winners.jpg';
import imgMarkInStem from './assets/gallery/42-make-your-mark-in-stem-group.jpg';
import imgStemSpeakers from './assets/gallery/43-stem-forum-speakers.jpg';
import imgMttsPanel from './assets/gallery/44-mtts-industry-panel.jpg';
import imgMttsGroup from './assets/gallery/45-mtts-workshop-group-steps.jpg';
import imgMentoringCircle from './assets/gallery/46-mentoring-circle.jpg';
import imgWorkshopAudience from './assets/gallery/47-workshop-audience.jpg';
import imgRegistrationVolunteers from './assets/gallery/48-registration-volunteers.jpg';

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
        image: imgTangaza,
    },
    {
        id: 6,
        tab: 'events',
        category: 'stem',
        title: 'High School Computer Training',
        description: 'Computer training programs for high school students across Rwanda, opening the door to a future in technology.',
        image: imgComputerTraining,
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

// --- Timeline (SB activity) ---------------------------------------------------
// Events exported from IEEE vTools (IEEE_vTools_Events_20261020091323.csv). `date` / `endDate`
// are ISO (YYYY-MM-DD); weekday and month are derived from them. Duplicate vTools entries
// for the same event were merged. category: technical | professional | nontechnical | administrative
export const TIMELINE_CATEGORIES = {
    technical: 'Technical',
    professional: 'Professional',
    nontechnical: 'Non-technical',
    administrative: 'Administrative',
};

const RAW_TIMELINE_EVENTS = [
    { date: '2026-01-30', title: 'Geospatial Innovation in Africa', venue: 'Kigali Innovation City, Kigali', category: 'technical' },
    { date: '2026-02-24', title: 'Scaling Innovation for Social Impact: From Startups to Human-Centered Systems', venue: 'Kigali', category: 'technical', cosponsor: 'African Innovators Society' },
    { date: '2026-03-11', title: 'Executive Monthly Meeting', venue: 'Virtual', category: 'administrative' },
    { date: '2026-04-23', title: 'Agentic AI For Social Impact: Innovation, Safety and Human-Centered Systems', venue: 'Virtual', category: 'technical' },
    { date: '2026-04-29', title: 'Executive Monthly Meeting', venue: 'Virtual', category: 'administrative' },
    { date: '2026-04-29', title: 'Tartan Synergy: Securing the Grid.', venue: 'Bumbogo, Kigali', category: 'technical' },
    { date: '2026-05-16', title: 'Tech-X Rwanda Committee meeting', venue: 'Virtual', category: 'administrative' },
    { date: '2026-05-22', title: 'Rwanda Simulation Synergy', venue: 'Kigali', category: 'technical' },
    { date: '2026-05-30', title: 'Tech-X Rwanda Committee meeting', venue: 'Virtual', category: 'administrative' },
    { date: '2026-07-03', title: 'The Rooms We Enter, The Spaces We Create (WIE Day 2026)', venue: 'Virtual', category: 'professional' },
    { date: '2026-07-09', title: 'Executive Monthly Meeting', venue: 'KG 5 Ave, Kigali', category: 'administrative' },
    { date: '2026-08-06', title: 'Imagine More With IEEE', venue: 'Kigali', category: 'nontechnical' },
    { date: '2026-08-08', title: 'IEEE SBXchange 2026', venue: 'Virtual', category: 'technical' },
    { date: '2026-08-14', title: 'IEEE Member Onboarding', venue: 'Virtual', category: 'nontechnical' },
    { date: '2026-08-15', title: 'TechX Rwanda Committee meeting', venue: 'Virtual', category: 'administrative' },
    { date: '2026-08-16', title: 'TechX Rwanda x Nano Mentoring', venue: 'Virtual', category: 'administrative' },
    { date: '2026-08-18', title: 'Connected Futures', venue: 'Kigali', category: 'nontechnical' },
    { date: '2026-08-28', title: 'Make Your Mark in STEM (From Student to Leader: Building Careers, Confidence, and Connections in STEM)', venue: 'Kigali', category: 'professional' },
    { date: '2026-09-04', endDate: '2026-09-05', title: 'TechX Rwanda 2026', venue: 'Kigali', category: 'technical' },
    { date: '2026-09-04', endDate: '2026-09-12', title: 'The Rwanda Ethics Summit: Rethinking Career Growth in a Digital Age', venue: 'Kigali', category: 'professional' },
    { date: '2026-10-15', endDate: '2026-10-16', title: 'IEEE East Africa Leadership, Innovation & Design Synergy', venue: 'Kigali', category: 'technical' },
];

// Group by term: Spring = Jan-May, Summer = Jun-Aug, Fall = Sep-Dec
const termOf = (iso) => {
    const month = Number(iso.slice(5, 7));
    const season = month <= 5 ? 'Spring' : month <= 8 ? 'Summer' : 'Fall';
    return `${season} ${iso.slice(0, 4)}`;
};

export const TIMELINE_EVENTS = RAW_TIMELINE_EVENTS
    .map((event, index) => ({ id: index + 1, term: termOf(event.date), ...event }))
    .sort((a, b) => a.date.localeCompare(b.date));

export const TIMELINE_FILTERS = [
    { key: 'all', label: 'All' },
    ...[...new Set(TIMELINE_EVENTS.map((event) => event.term))].map((term) => ({ key: term, label: term })),
];

// --- Gallery (previous activities) ------------------------------------------
// w/h are the photo's pixel size; the gallery groups photos by orientation from them.
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
    { src: imgHandshake, w: 2000, h: 1429, alt: 'Two IEEE ComSoc members shaking hands in front of an IEEE Region 8 banner' },
    { src: imgBannerChat, w: 2000, h: 1429, alt: 'Three students chatting in front of the IEEE and Carnegie Mellon University Africa banner' },
    { src: imgVisitors, w: 2000, h: 1429, alt: 'Volunteers welcoming visitors at the registration desk' },
    { src: imgQrSpeaker, w: 2000, h: 1429, alt: 'Speaker pointing to a QR code projected on the wall' },
    { src: imgLaughing, w: 2000, h: 1600, alt: 'Two IEEE ComSoc members laughing together' },
    { src: imgAudienceQuestion, w: 2000, h: 1600, alt: 'Participant asking a question during a session' },
    { src: imgLectureHall, w: 2000, h: 1125, alt: 'Packed lecture hall of students with laptops during a technical talk' },
    { src: imgGuestLecturer, w: 2000, h: 1428, alt: 'Guest lecturer speaking at the Carnegie Mellon University Africa lectern' },
    { src: imgLecternSpeaker, w: 2000, h: 1600, alt: 'Speaker explaining a point at the lectern' },
    { src: imgSmilingAttendee, w: 1600, h: 2000, alt: 'Smiling attendee in an IEEE Rwanda GRSS shirt' },
    { src: imgBench, w: 2000, h: 1535, alt: 'Three guests seated on a bench in the lobby' },
    { src: imgFoundationAttendees, w: 2000, h: 1600, alt: 'Two smiling attendees with IEEE Foundation lanyards' },
    { src: imgWiePresenter, w: 534, h: 800, alt: 'Student presenting in front of an IEEE Women in Engineering slide' },
    { src: imgPanelBackdrop, w: 2000, h: 1334, alt: 'Panelist speaking in front of the IEEE societies backdrop' },
    { src: imgVehiclePlant, w: 2000, h: 1333, alt: 'Members posing during an industry visit to a vehicle assembly plant' },
    { src: imgZipline, w: 2000, h: 1171, alt: 'Students arriving at the Zipline Muhanga site for an industry visit' },
    { src: imgEnergyLecture, w: 2000, h: 1334, alt: 'Students following a lecture on energy systems' },
    { src: imgLunchAerial, w: 1334, h: 2000, alt: 'Aerial view of participants sharing lunch' },
    { src: imgLeadershipWinners, w: 2000, h: 1429, alt: 'Winners holding trophies and certificates at the IEEE ComSoc Student Leadership Conference' },
    { src: imgMarkInStem, w: 2000, h: 1125, alt: 'Participants and speakers posing in front of the Make Your Mark in STEM slide' },
    { src: imgStemSpeakers, w: 2000, h: 1506, alt: 'Four women speakers at the Make Your Mark in STEM career forum' },
    { src: imgMttsPanel, w: 1223, h: 918, alt: 'Industry and academic panel at the IEEE MTT-S workshop at Carnegie Mellon University Africa' },
    { src: imgMttsGroup, w: 1617, h: 910, alt: 'Group photo of students and IEEE leaders on the Carnegie Mellon University Africa steps' },
    { src: imgMentoringCircle, w: 1212, h: 909, alt: 'Students gathered in a circle for a mentoring conversation with an IEEE leader' },
    { src: imgWorkshopAudience, w: 1484, h: 989, alt: 'Students and guests following a session in the workshop hall' },
    { src: imgRegistrationVolunteers, w: 1152, h: 864, alt: 'Smiling volunteers at the MTT-S workshop registration desk' },
];
