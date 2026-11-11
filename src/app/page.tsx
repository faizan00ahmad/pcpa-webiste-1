import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { GalleryStrip } from "@/components/GalleryStrip";
import { IntroVideo } from "@/components/IntroVideo";
import { TileLink, PersonCard } from "@/components/blocks";
import { documents } from "@/content/documents";
import { keyDates } from "@/content/events";
import { news } from "@/content/news";
import { cabinet } from "@/content/people";
import { services } from "@/content/membership";
import { offices, site, slides } from "@/content/site";

export default function Home() {
  const latest = documents.filter((d) => d.status === "Current").slice(0, 5);
  return (
    <>
      <IntroVideo />
      <section className="pc-hero">
        <div className="pc-wrap pc-hero-in">
          <div className="pc-hero-copy">
            <p className="pc-eyebrow">Pakistan Crop Protection Association</p>
            <h1>Representing and strengthening Pakistan&apos;s crop protection industry</h1>
            <p>
              Membership, leadership, meetings, elections and official documents of the Association, in one place.
            </p>
            <div className="pc-actions">
              <Link href="/membership/apply" className="pc-btn pc-btn-primary">
                Apply for membership
              </Link>
              <Link href="/downloads" className="pc-btn pc-btn-outline">
                Download centre
              </Link>
            </div>
          </div>
          <div className="pc-hero-photo pc-collage">
            <div className="pc-collage-a">
              <Image src="/images/farm/tractor-in-mustard-field.jpg" alt="A tractor on a track between flowering mustard fields at sunset" fill priority sizes="(max-width:900px) 50vw, 280px" />
            </div>
            <div className="pc-collage-b">
              <Image src="/images/farm/harvest-at-sunset.jpg" alt="Farmers handling straw beside a thresher at sunset" fill priority sizes="(max-width:900px) 50vw, 240px" />
            </div>
            <div className="pc-collage-c">
              <Image src="/images/farm/threshing-in-dust.jpg" alt="Workers threshing grain in the morning dust" fill priority sizes="(max-width:900px) 50vw, 240px" />
            </div>
          </div>
        </div>
      </section>

      <section className="pc-facts" aria-label="PCPA at a glance">
        <div className="pc-wrap pc-facts-in">
          <div>
            <strong>2</strong>
            <span>Offices – Multan &amp; Lahore</span>
          </div>
          <div>
            <strong>2</strong>
            <span>Membership classes</span>
          </div>
          <div>
            <strong>2026-28</strong>
            <span>Executive Committee term</span>
          </div>
          <div>
            <strong>{documents.length}+</strong>
            <span>Documents in the Download Centre</span>
          </div>
        </div>
      </section>

      <section className="pc-section">
        <div className="pc-wrap">
          <h2 className="pc-h2">Quick services</h2>
          <div className="pc-grid pc-grid-3">
            {services.map((s) => (
              <TileLink key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="pc-section pc-section-alt">
        <div className="pc-wrap pc-two">
          <div>
            <h2 className="pc-h2">Key dates</h2>
            <ol className="pc-timeline">
              {keyDates.map((k) => (
                <li key={k.sort}>
                  <time dateTime={k.sort}>{k.date}</time>
                  <div>
                    <strong>{k.title}</strong>
                  </div>
                </li>
              ))}
            </ol>
            <Link href="/meetings" className="pc-link">
              All meetings &amp; elections <Icon name="arrow" size={14} />
            </Link>
          </div>
          <div>
            <h2 className="pc-h2">Latest documents</h2>
            <ul className="pc-doclist">
              {latest.map((d) => (
                <li key={d.id} className="pc-doclink">
                  <Icon name="pdf" size={20} />
                  <a href={d.file} target="_blank" rel="noopener noreferrer">
                    {d.title}
                  </a>
                </li>
              ))}
            </ul>
            <Link href="/downloads" className="pc-link">
              Open the Download Centre <Icon name="arrow" size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pc-section">
        <div className="pc-wrap">
          <h2 className="pc-h2">Leadership</h2>
          <div className="pc-grid pc-grid-6 pc-people">
            {cabinet.map((p) => (
              <PersonCard key={p.name} p={p} />
            ))}
          </div>
          <p>
            <Link href="/leadership/cabinet" className="pc-link">
              Meet the Cabinet <Icon name="arrow" size={14} />
            </Link>
          </p>
        </div>
      </section>

      <section className="pc-section pc-section-alt">
        <div className="pc-wrap">
          <div className="pc-section-head">
            <h2 className="pc-h2">Photo gallery</h2>
            <Link href="/gallery" className="pc-link">
              View all photos <Icon name="arrow" size={14} />
            </Link>
          </div>
          <GalleryStrip />
        </div>
      </section>

      <section className="pc-section">
        <div className="pc-wrap">
          <h2 className="pc-h2">News</h2>
          <div className="pc-grid pc-grid-2">
            {news.map((n) => (
              <Link key={n.slug} href={n.path} className="pc-card pc-news">
                <Image src={n.image} alt="" width={640} height={360} sizes="(max-width:800px) 100vw, 400px" />
                <div>
                  <time className="pc-muted">{n.published}</time>
                  <h3 className="pc-h4">{n.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pc-cta">
        <div className="pc-wrap pc-cta-in">
          <div>
            <h2>Need help from the Secretariat?</h2>
            <p>
              {offices.multan.name}: {site.phone} · {site.email}
            </p>
          </div>
          <Link href="/contact" className="pc-btn pc-btn-light">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
