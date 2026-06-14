import { Service, Step, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'branding',
    title: 'Branding & Identity',
    tagline: 'Create a distinct, trusting brand identity',
    description: 'We design clean, professional visuals and clear messaging. From modern logo systems and templates to style guidelines, we build brands that your customers trust.',
    items: [
      'Brand Identity Refresh',
      'Logo Systems',
      'Visual Styling Guidelines',
      'High-Resolution Assets'
    ],
    icon: 'Sparkles',
    stat: { value: '25+', label: 'Design Awards' }
  },
  {
    id: 'marketing',
    title: 'Omnichannel Marketing',
    tagline: 'Reach your ideal buyers online',
    description: 'We launch tailored marketing campaigns across social media, search engine ads, and local channels to consistently bring in high-quality customer inquiries.',
    items: [
      'Social Media Ads & Campaigns',
      'Direct-Response Copywriting',
      'Paid Search Campaigns',
      'Local & Regional Targeting'
    ],
    icon: 'Megaphone',
    stat: { value: '4.5B', label: 'Cumulative Client Reach' }
  },
  {
    id: 'staffing',
    title: 'Staffing & HR Support',
    tagline: 'Hire qualified team members, guilt-free',
    description: 'We solve the hardest growth challenge by scouting, screening, and placing experienced, reliable professionals directly into your roles so you can grow with confidence.',
    items: [
      'Talent Scouting & Recruiting',
      'Practical Operator Vetting',
      'Fast Shortlists & Background Checks',
      'Ongoing Team Onboarding Support'
    ],
    icon: 'Users',
    stat: { value: '14 Days', label: 'Avg Placement Time' }
  },
  {
    id: 'acquisition',
    title: 'Customer Acquisition',
    tagline: 'Convert leads into paying clients',
    description: 'We set up clear sales funnels, email automation workflows, and follow-up templates to turn web traffic into scheduled calendar bookings and direct client acquisitions.',
    items: [
      'Lead Capture & Landing Sites',
      'Ideal Buyer Customer Research',
      'Automated Email Follow-up Checks',
      'Meeting Booking Systems'
    ],
    icon: 'Target',
    stat: { value: '3.2x', label: 'Average Pipeline ROI' }
  },
  {
    id: 'consulting',
    title: 'Business Consulting & Systems',
    tagline: 'Keep your operations clean and aligned',
    description: 'We serve as your strategic partner, auditing your current workflow bottlenecks, helping you set clear quarter goals, and outlining reliable standard templates.',
    items: [
      'Quarterly Strategy Planning',
      'Goal Setting & Metric Checkpoints',
      'Competitor & Audience Analysis',
      'Internal Workflow Optimization'
    ],
    icon: 'Briefcase',
    stat: { value: '94%', label: 'Retention Success Rate' }
  }
];

export const PROCESS_STEPS: Step[] = [
  {
    number: 1,
    title: 'Discover',
    description: 'We review your current brand assets, ad setup, and administrative workflows, finding the exact friction points holding your sales back.',
    duration: 'Week 1',
    deliverable: 'Initial Diagnostic Report'
  },
  {
    number: 2,
    title: 'Strategize',
    description: 'We create a custom, step-by-step roadmap detailing how we will refresh your assets, scale your ad reach, and place your key hires.',
    duration: 'Weeks 2-3',
    deliverable: 'Custom Step-by-Step Growth Plan'
  },
  {
    number: 3,
    title: 'Execute',
    description: 'Our team does the actual building. We design your branding assets, launch verified ad campaigns, and place vetted professionals in open roles.',
    duration: 'Weeks 4-10',
    deliverable: 'Live Sales Funnels & Active Hires'
  },
  {
    number: 4,
    title: 'Scale',
    description: 'We monitor and optimize the results. We adjust ad target filters weekly, improve website loading times, and maintain ongoing workflow support.',
    duration: 'Ongoing',
    deliverable: 'Weekly Performance & Stat Checks'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'CEO & Founder',
    company: 'Solas Apparel',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200',
    quote: "GBA fundamentally changed our growth trajectory. Instead of managing a marketing contractor, a separate recruiter, and an expensive branding executive, GBA handled the entire suite cohesively. Our revenue grew 4x in 90 days.",
    metric: '4X Growth',
    metricLabel: '90-day Revenue Multiple',
    highlight: 'Replaced disjointed contractors'
  },
  {
    id: 't2',
    name: 'Marcus Ramirez',
    role: 'Managing Director',
    company: 'LogixFlow',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200',
    quote: "Their internet-native sense of customer behavior is uncanny. They modernized our visual brand, immediately filled our hiring gaps with three stellar developers, and designed in-bound funnels that convert organically.",
    metric: '+320%',
    metricLabel: 'Qualified Lead Pipelines',
    highlight: 'Filled critical hiring gaps'
  },
  {
    id: 't3',
    name: 'Aria Chen',
    role: 'Co-Founder',
    company: 'Zetta Robotics',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    quote: "We spent months talking to disconnected consultants who gave us boring manuals. GBA actually did the building. They crafted a gorgeous system, set up automated outbound campaigns, and structured our long-term HR strategy.",
    metric: '14 Days',
    metricLabel: 'Average Staff Integration',
    highlight: 'Replaced multiple monthly agencies'
  }
];

export const CASE_STUDIES = [
  {
    id: 'c1',
    category: 'Startup Growth',
    title: 'How GBA Helped Solas Apparel Quadruple Their Sales in 90 Days',
    metric: '+320% Leads',
    description: 'Redesigned their visual assets and launched targeted organic and paid ad campaigns to build a consistent stream of new buyers.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'c2',
    category: 'Local Business',
    title: 'How a Local Service Business Converted Web Traffic into Premium Clients',
    metric: '3X Customer Acquisition',
    description: 'Built straightforward local search strategies and friendly follow-up automation steps to book calls directly on schedules.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'c3',
    category: 'Retail Brand',
    title: 'Expanding a High-Growth Brand into New Retail Channels',
    metric: 'Expanded Into New Markets',
    description: 'Aided in new audience selection, set up reliable storage processes, and placed on-the-ground employees for smooth scaling.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
  }
];
