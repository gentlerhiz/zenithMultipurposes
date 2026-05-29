"use client";

import { CreditCard, Info, Monitor, Smartphone, X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function TermsModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50">
      <div className="m-6 w-full max-w-5xl overflow-hidden bg-white text-[#111] shadow-2xl">
        <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
          <div>
            <h3 className="text-lg font-bold md:text-xl">Website Design & App Development Terms</h3>
            <p className="mt-1 text-sm text-[#6B7280]">Reference and cost guidance</p>
          </div>
          <button aria-label="Close" onClick={onClose} className="inline-flex items-center gap-2 rounded px-3 py-1 text-sm font-semibold hover:bg-black/5">
            <X size={16} /> Close
          </button>
        </div>

        <div className="max-h-[85vh] overflow-y-auto px-6 py-6">
          <article className="mb-6 rounded-none bg-off-white p-6">
            <header className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-none bg-neon-green/10 text-dark-green">
                <Monitor size={18} />
              </span>
              <div>
                <h4 className="text-base font-bold md:text-lg">Web design terms</h4>
                <p className="text-sm text-[#6B7280]">Common terms and what they mean for your project.</p>
              </div>
            </header>

            <div className="grid gap-4">
              <p className="text-sm leading-7 text-[#111]">These are the most common terms you will see when requesting a website project. They help explain what is included in the build cost and what may be billed separately as a recurring service.</p>
              <div className="grid gap-3 text-sm leading-7">
                <p><strong>Single-page website</strong> — A website with all content arranged on one page, usually ideal for personal profiles, online CVs, event pages, or one-service businesses.</p>
                <p><strong>Multi-page website</strong> — A website with separate pages such as Home, About, Services, Contact, Blog, or Portfolio, suitable for businesses that need more detailed information online.</p>
                <p><strong>Landing page</strong> — A focused page built for a specific campaign, ad, product, or offer, usually designed to drive one clear action such as sign-up, booking, or inquiry.</p>
                <p><strong>Responsive design</strong> — A design approach that makes the website adjust properly across phones, tablets, laptops, and desktop screens.</p>
                <p><strong>Custom design</strong> — A website layout created specifically for your brand instead of using a generic template, usually resulting in a more unique and strategic presentation.</p>
                <p><strong>Domain name</strong> — Your website address, such as yourbrand.com or yourbrand.com.ng, which is paid for and renewed yearly.</p>
                <p><strong>Hosting</strong> — The online server space that stores your website files and keeps your website accessible on the internet.</p>
                <p><strong>SSL certificate</strong> — A security feature that protects data on your website and allows the site to display as secure with HTTPS.</p>
                <p><strong>SEO setup</strong> — Basic search engine optimization work such as page titles, descriptions, keywords, image tags, and site structure to help your website perform better on Google.</p>
                <p><strong>CMS</strong> — A content management system that allows you to update text, images, blog posts, or pages without rebuilding the website.</p>
                <p><strong>Maintenance</strong> — Ongoing support after launch, usually covering updates, backups, bug fixes, content edits, and security checks.</p>
                <p><strong>Premium plugins or tools</strong> — Paid software used to add advanced features such as forms, bookings, SEO tools, automation, or e-commerce enhancements.</p>
                <p><strong>Payment gateway integration</strong> — Setup that allows a website to receive online payments through supported processors.</p>
                <p><strong>Extra page</strong> — Any page added beyond the page limit included in your selected package.</p>
              </div>
            </div>
          </article>

          <article className="mb-6 bg-white p-6">
            <header className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-none bg-neon-green/10 text-dark-green">
                <Smartphone size={18} />
              </span>
              <div>
                <h4 className="text-base font-bold md:text-lg">App development terms</h4>
                <p className="text-sm text-[#6B7280]">Key terms commonly used in app development projects.</p>
              </div>
            </header>

            <div className="grid gap-3 text-sm leading-7">
              <p>These are the key terms commonly used in app development projects. They explain why app projects are often priced differently from websites, since apps usually require more logic, actions, testing, and system connections.</p>
              <p><strong>Web app</strong> — An application that runs in a browser and performs tasks beyond a regular website, such as bookings, dashboards, user actions, data handling, or workflow management.</p>
              <p><strong>Mobile app</strong> — An application designed for smartphones or tablets, usually for Android, iPhone, or both.</p>
              <p><strong>Custom app</strong> — A tailored application built around a specific business need instead of a general off-the-shelf solution.</p>
              <p><strong>MVP (Minimum Viable Product)</strong> — The simplest usable version of an app, built with only the essential features needed to launch quickly or test an idea before expanding.</p>
              <p><strong>Backend</strong> — The server-side part of an app that handles data, logic, storage, user records, and system operations behind the scenes.</p>
              <p><strong>Frontend</strong> — The visible part of the app that users interact with, including screens, buttons, forms, menus, and navigation.</p>
              <p><strong>Admin panel / dashboard</strong> — A control area used by the business owner or team to manage content, users, bookings, products, or reports.</p>
              <p><strong>User authentication</strong> — A login or sign-up system that lets users securely create accounts and access private areas of the app.</p>
              <p><strong>API integration</strong> — A connection between your app and third-party services such as payment systems, maps, WhatsApp tools, CRMs, or external databases.</p>
              <p><strong>Booking system</strong> — A feature that allows users to schedule appointments, reservations, or time slots directly through the app or website.</p>
              <p><strong>QR integration</strong> — A feature often used in electronic menu systems or event tools, where users scan a code to open a digital page or app function.</p>
              <p><strong>Testing / QA</strong> — The process of checking the app for bugs, broken functions, display issues, or performance problems before launch.</p>
              <p><strong>Deployment</strong> — The process of making the app live and accessible to users on the web, a device, or an app store.</p>
              <p><strong>Maintenance and support</strong> — Ongoing post-launch work such as updates, bug fixes, security checks, feature improvements, and technical support.</p>
            </div>
          </article>

          <article className="mb-6 rounded-none bg-off-white p-6">
            <header className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-none bg-neon-green/10 text-dark-green">
                <Info size={18} />
              </span>
              <div>
                <h4 className="text-base font-bold md:text-lg">How pricing works</h4>
                <p className="text-sm text-[#6B7280]">Why website and app pricing differ and what factors matter.</p>
              </div>
            </header>

            <p className="text-sm leading-7 text-[#111]">Website pricing is usually influenced by structure, design quality, page count, integrations, and business goals, while app pricing is more strongly affected by feature complexity, platform choice, backend development, testing, and ongoing support. Current pricing guidance also emphasizes feature-based and value-based pricing instead of charging by page count alone.</p>
            <p className="mt-3 text-sm leading-7 text-[#111]">A simple website may only need design, domain, hosting, and a few content sections, but a custom app may also require user accounts, admin management, database logic, APIs, and more testing time. That is why app development usually starts higher than standard website design.</p>
          </article>

          <article className="mb-2 rounded-none bg-white p-6">
            <header className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-none bg-neon-green/10 text-dark-green">
                <CreditCard size={18} />
              </span>
              <div>
                <h4 className="text-base font-bold md:text-lg">Cost breakdown</h4>
                <p className="text-sm text-[#6B7280]">Every project has a build cost and, in most cases, a running cost.</p>
              </div>
            </header>

            <div className="grid gap-2 text-sm">
              <div className="flex items-start justify-between gap-4 border-t border-black/5 py-3">
                <span>Domain name (.com.ng)</span>
                <strong className="shrink-0">₦6,450/year</strong>
              </div>
              <div className="flex items-start justify-between gap-4 border-t border-black/5 py-3">
                <span>Domain name (.ng)</span>
                <strong className="shrink-0">₦13,975/year</strong>
              </div>
              <div className="flex items-start justify-between gap-4 border-t border-black/5 py-3">
                <span>Hosting</span>
                <strong className="shrink-0">₦30,000/year</strong>
              </div>
              <div className="flex items-start justify-between gap-4 border-t border-black/5 py-3">
                <span>SSL / website security</span>
                <span className="max-w-sm text-right text-[#6B7280]">Usually included or billed separately depending on hosting setup</span>
              </div>
              <div className="flex items-start justify-between gap-4 border-t border-black/5 py-3">
                <span>Maintenance / updates</span>
                <strong className="shrink-0">₦50,000/year</strong>
              </div>
              <div className="flex items-start justify-between gap-4 border-t border-black/5 py-3">
                <span>Premium tools / plugins</span>
                <strong className="shrink-0">₦70,000/year</strong>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
