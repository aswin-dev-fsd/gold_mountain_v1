import React from 'react';
import Image from 'next/image';
import {
  Header,
  Footer,
  PrimaryButton,
  SecondaryButton,
  WhatsAppCTA,
  SectionHeading,
  EditorialSection,
  LocationBlock,
  RoomCard,
  WellnessOfferingCard,
  ExperienceBlock,
  BlogCard,
  TestimonialCard,
  PinnedTestimonials,
  EnquiryForm,
} from '@/components';

export default function HomePage() {
  return (
    <>
      <Header transparentOnTop={true} />

      {/* --------------------------------------------------------------------------
         SECTION 01 — HERO
         -------------------------------------------------------------------------- */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-light)',
          overflow: 'hidden',
          padding: '6.5rem 0 3rem 0',
        }}
      >
        <Image
          src="/images/resort_aerial_golden_hour_view.webp"
          alt="Gold Mountain Wellness Resort aerial view at Arunachala"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            opacity: 0.75,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(20, 36, 25, 0.25) 0%, rgba(20, 36, 25, 0.65) 100%)',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '860px' }}>
          <span className="eyebrow" style={{ color: 'var(--accent-gold)' }}>
            Sanctuary at Tiruvannamalai
          </span>
          <h1
            className="editorial-serif"
            style={{
              fontSize: 'var(--fs-hero)',
              color: 'var(--text-light)',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            A Wellness Stay <br />
            <span className="editorial-italic" style={{ color: 'var(--accent-gold)' }}>
              in the Presence of Arunachala.
            </span>
          </h1>
          <p
            style={{
              color: 'var(--text-light-muted)',
              fontSize: 'var(--fs-body-lg)',
              maxWidth: '640px',
              margin: '0 auto 2.25rem auto',
              lineHeight: 1.6,
            }}
          >
            A peaceful resort where traditional wellness, healthy food, and nature come together in the natural and spiritual surroundings of Tiruvannamalai.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <PrimaryButton href="/wellness">Explore Wellness</PrimaryButton>
            <SecondaryButton href="/stay" style={{ borderColor: 'var(--border-dark)', color: 'var(--text-light)' }}>
              Plan Your Stay
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 02 — WELLNESS
         -------------------------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Resort Proposition"
            title="Wellness, in its own time."
            subtitle="Gold Mountain offers an environment where guests can slow down, reconnect, and explore traditional wellness practices at their own pace."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <WellnessOfferingCard
              category="Traditional Therapy"
              title="Ayurvedic Practices"
              description="Rooted in authentic tradition, tailored to restore balance through gentle therapies and natural oils."
              icon={
                <svg width="64" height="64" viewBox="0 0 60 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M58.4114 22.0266H29.6676L13.0149 7.56602C12.7523 4.21156 9.93081 1.56149 6.51813 1.56149C6.51296 1.56149 6.50778 1.56149 6.50261 1.56149C2.92369 1.56796 0.00777888 4.48517 1.69126e-05 8.06279C-0.00774506 11.4903 2.6572 14.3241 6.02589 14.5764L12.9677 22.0266H1.02589C0.472203 22.0266 0.0226561 22.4748 0.0226561 23.0298V37.6514C0.0226561 46.2672 7.03172 53.2776 15.6482 53.2776H43.7892C52.405 53.2776 59.4147 46.2672 59.4147 37.6514V23.0292C59.4153 22.4748 58.9658 22.0266 58.4114 22.0266ZM7.21477 12.9076C7.02719 12.7051 6.76328 12.5906 6.48708 12.588C4.01166 12.5718 2.00131 10.544 2.00713 8.06796C2.01295 5.59189 4.03042 3.57443 6.50714 3.56796C6.51166 3.56796 6.5149 3.56796 6.51878 3.56796C8.98838 3.56796 11.011 5.57572 11.0285 8.04791C11.0311 8.33704 11.1566 8.61001 11.3739 8.79953L26.6074 22.0266H15.7109L7.21477 12.9076ZM57.4082 37.6514C57.4082 45.1618 51.2989 51.2704 43.7892 51.2704H15.6488C8.13909 51.2704 2.02977 45.1624 2.02977 37.6514V24.0324H57.4082V37.6514Z" fill="currentColor"/>
                  <path d="M43.1695 54.5713H16.2698C14.1462 54.5713 12.4185 56.2983 12.4185 58.4206V61.268C12.4185 61.821 12.8681 62.2712 13.4224 62.2712H46.0169C46.5712 62.2712 47.0207 61.8216 47.0207 61.268V58.4206C47.0201 56.2983 45.2924 54.5713 43.1695 54.5713ZM45.013 60.2641H14.4256V58.4206C14.4256 57.4051 15.2523 56.5784 16.2698 56.5784H43.1695C44.1857 56.5784 45.0136 57.4044 45.0136 58.4206L45.013 60.2641Z" fill="currentColor"/>
                  <path d="M40.0783 20.3422H40.0815C50.7122 20.3105 59.3849 11.6378 59.4153 1.00712C59.4153 0.739328 59.3099 0.48383 59.1217 0.294308C58.9328 0.10608 58.6773 0 58.4114 0H58.4082C47.7775 0.0316947 39.1042 8.7057 39.0744 19.3357C39.0731 19.6035 39.1799 19.8603 39.3687 20.0485C39.557 20.2361 39.8112 20.3422 40.0783 20.3422ZM57.3746 2.0414C56.8299 10.7471 49.8202 17.7575 41.1145 18.3008C41.6585 9.59638 48.6682 2.58603 57.3746 2.0414Z" fill="currentColor"/>
                  <path d="M37.0084 20.3423H37.0117C37.2769 20.3423 37.5324 20.2362 37.7213 20.048C37.9101 19.8598 38.0156 19.603 38.0156 19.3352C37.989 10.3908 30.6909 3.09262 21.7465 3.06739H21.7432C21.4767 3.06739 21.2212 3.17218 21.0337 3.36041C20.8448 3.54993 20.7381 3.80607 20.7394 4.07322C20.7652 13.0189 28.0641 20.3158 37.0084 20.3423ZM35.9664 18.2931C28.9541 17.7615 23.3202 12.1282 22.7879 5.11526C29.8008 5.64825 35.4341 11.2815 35.9664 18.2931Z" fill="currentColor"/>
                </svg>
              }
            />
            <WellnessOfferingCard
              category="Nourishment"
              title="Healthy & Mindful Dining"
              description="Fresh, wholesome meals prepared thoughtfully using farm-grown vegetables and traditional culinary wisdom."
              icon={
                <svg width="64" height="64" viewBox="0 0 69 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M29.4127 38.0909C29.7054 37.5933 30.3467 37.4275 30.8485 37.7316C33.0648 39.0308 35.9363 39.0308 38.1527 37.7316C38.6545 37.4413 39.2957 37.6072 39.5885 38.0909C39.8812 38.5885 39.7139 39.2242 39.226 39.5145C37.8182 40.3438 36.1873 40.7722 34.5146 40.7722C32.8419 40.7722 31.211 40.33 29.8031 39.5145C29.3013 39.2243 29.1341 38.5885 29.4407 38.0909H29.4127ZM21.9552 8.98386C22.5267 8.98386 23.0006 8.51394 23.0006 7.94725C23.0006 6.99362 23.7812 6.21964 24.743 6.21964H27.5309C28.1024 6.21964 28.5763 5.74972 28.5763 5.18303C28.5763 4.61634 28.1024 4.14642 27.5309 4.14642H24.743C22.6242 4.14642 20.9097 5.84644 20.9097 7.94725C20.9097 8.51391 21.3836 8.98386 21.9552 8.98386ZM69 61.85V64.6142C69 69.963 66.9091 75.0218 63.1316 78.8634C59.2286 82.8163 54.015 85 48.4393 85H20.5607C14.985 85 9.77144 82.8162 5.86843 78.8634C2.07694 75.0211 0 69.9489 0 64.6142V61.85C0 61.2833 0.473936 60.8134 1.04547 60.8134H6.30057C7.62483 57.0816 10.7333 54.1654 14.6363 53.1426L26.4845 50.0052V43.9792C22.5815 41.5191 19.9052 37.3175 19.5706 32.48H17.7725C15.6537 32.48 13.9391 30.78 13.9391 28.6792V23.1507C13.9391 21.4231 15.124 19.9718 16.727 19.5158V6.56505C16.727 2.94388 19.696 0 23.3482 0H40.0754C42.1941 0 43.9087 1.70002 43.9087 3.80083V5.52845H45.6511C49.3032 5.52845 52.2723 8.47232 52.2723 12.0935V19.5154C53.8753 19.9715 55.0602 21.4227 55.0602 23.1504V28.6788C55.0602 30.7796 53.3456 32.4797 51.2268 32.4797H49.4287C49.0941 37.3171 46.4178 41.5189 42.5148 43.9788V50.0048L54.363 53.1423C58.266 54.165 61.3745 57.0813 62.6987 60.813H67.9538C68.5253 60.813 69 61.2833 69 61.85ZM51.2273 21.4233H49.4849V30.4068H51.2273C52.1891 30.4068 52.9697 29.6328 52.9697 28.6792V23.1507C52.9697 22.1971 52.1891 21.4233 51.2273 21.4233ZM18.8185 6.5655V19.3499H19.5154V17.6223C19.5154 15.5215 21.23 13.8215 23.3488 13.8215H30.0675L38.208 9.7857C38.5286 9.61985 38.9189 9.64749 39.2256 9.82717C39.5322 10.0207 39.7274 10.3524 39.7274 10.7117V13.8214H45.6516C47.7704 13.8214 49.4849 15.5215 49.4849 17.6223V19.3499H50.1819V12.0938C50.1819 9.61983 48.1468 7.60199 45.6516 7.60199H42.8638C42.2923 7.60199 41.8183 7.13207 41.8183 6.56538V3.80116C41.8183 2.84753 41.0377 2.07354 40.0759 2.07354H23.3487C20.8536 2.07354 18.8185 4.09149 18.8185 6.5655ZM17.773 30.4068H19.5154V21.4233H17.773C16.8112 21.4233 16.0306 22.1973 16.0306 23.1509V28.6794C16.0306 29.633 16.8112 30.4068 17.773 30.4068ZM28.2001 42.5835C32.0473 44.7258 36.9679 44.7258 40.8012 42.5835C44.732 40.386 47.3945 36.2258 47.3945 31.4435V17.6224C47.3945 16.6688 46.6139 15.8948 45.6521 15.8948H38.6824C38.1109 15.8948 37.6369 15.4249 37.6369 14.8582V12.3842L30.7788 15.7842C30.6394 15.8533 30.4721 15.8948 30.3188 15.8948H23.3492C22.3874 15.8948 21.6068 16.6688 21.6068 17.6224V31.4435C21.6068 36.2256 24.2692 40.3854 28.2001 42.5835ZM28.6182 45.1128C28.6182 45.1128 28.5904 45.1128 28.5764 45.099V50.5031L34.5006 59.9014L40.4248 50.5031V45.099C40.4248 45.099 40.3969 45.099 40.383 45.1128C38.5709 45.873 36.5915 46.3015 34.5005 46.3015C32.4096 46.3015 30.4304 45.873 28.6182 45.1128ZM14.9858 60.8136C15.641 60.8136 16.2682 60.8551 16.9094 60.9104C17.1045 60.9242 17.2997 60.9518 17.4948 60.9795C17.9409 61.0348 18.373 61.1039 18.8052 61.173C19.0143 61.2144 19.2373 61.2559 19.4464 61.2974C19.8785 61.3941 20.2967 61.5047 20.7149 61.6153C20.8961 61.6705 21.0773 61.712 21.2585 61.7673C21.844 61.947 22.4155 62.1543 22.9731 62.3892C23.5307 62.6242 24.0882 62.8868 24.618 63.177C24.7852 63.26 24.9386 63.3567 25.1058 63.4535C25.4822 63.6608 25.8446 63.8819 26.2071 64.1169C26.3883 64.2274 26.5556 64.3518 26.7228 64.4624C27.0713 64.6973 27.4058 64.96 27.7404 65.2226C27.8798 65.3331 28.0331 65.4437 28.1725 65.5681C28.6325 65.9551 29.0785 66.3559 29.5107 66.7705C29.9428 67.199 30.347 67.6413 30.7234 68.0974C30.8349 68.2356 30.9464 68.3738 31.058 68.5258C31.3228 68.8575 31.5877 69.2031 31.8246 69.5485C31.9501 69.7144 32.0616 69.8802 32.1731 70.0599C32.4101 70.4193 32.6331 70.7786 32.8422 71.138C32.9398 71.3039 33.0373 71.4559 33.121 71.6218C33.3998 72.147 33.6646 72.6722 33.9016 73.225V73.2526C34.1107 73.7502 34.3058 74.2478 34.4731 74.7591C34.6404 74.2477 34.8355 73.7502 35.0446 73.2526V73.225C35.2816 72.6722 35.5464 72.1469 35.8252 71.6218C35.9088 71.4559 36.0064 71.3039 36.104 71.138C36.3131 70.7648 36.5361 70.4055 36.7731 70.0599C36.8846 69.8941 36.9961 69.7144 37.1215 69.5485C37.3725 69.203 37.6234 68.8575 38.8882 68.5258C37.9997 68.3876 38.1112 68.2356 38.2228 68.0974C38.6131 67.6413 39.0173 67.1852 39.4355 66.7705C39.8537 66.3559 40.3137 65.9551 40.7737 65.5681C40.9131 65.4437 41.0664 63.3531 41.2058 65.2226C41.5403 64.96 41.8749 64.7112 42.2233 64.4624C42.3906 64.338 42.5718 64.2274 42.7391 64.1169C43.1015 63.8819 43.4639 63.6608 43.8403 63.4535C44.0076 63.3567 44.1609 63.2738 44.3282 63.177C44.8718 62.8868 45.4155 62.6242 45.9731 62.3892C46.5307 62.1543 47.1021 61.947 47.6876 61.7673C47.8688 61.712 48.0501 61.6567 48.2313 61.6153C48.6495 61.4909 49.0676 61.3803 49.4998 61.2974C49.7089 61.2559 49.918 61.2006 50.141 61.173C50.5731 61.09 51.0052 61.0348 51.4513 60.9795C51.6465 60.9518 51.8416 60.9242 52.0368 60.9104C52.664 60.8551 53.3053 60.8136 53.9604 60.8136H60.4282C59.2155 58.0494 56.7621 55.9348 53.7792 55.1331L41.9033 51.9819L35.3379 62.3895C35.1427 62.6936 34.8082 62.8733 34.4458 62.8733C34.0833 62.8733 37.7488 62.6936 35.536 62.3895L26.9882 51.9819L15.1124 55.1331C12.1154 55.9209 9.67599 58.0355 8.46334 60.8136H14.9858ZM20.5615 82.9274H29.5103L28.7576 82.5957C21.1189 79.2786 14.1635 74.2477 8.62971 68.0555C8.25334 67.627 8.28123 66.9774 8.71334 66.5905C9.14546 66.2173 9.80065 66.2449 10.1909 66.6734C15.5296 72.6441 22.2344 77.4817 29.5944 80.6882L33.4556 82.3605V81.1858C33.4556 71.0824 25.1756 62.8729 14.9861 62.8729H2.09232V64.6005C2.09232 69.3965 3.96024 73.9432 7.37535 77.4124C10.8741 80.9644 15.5577 82.9132 20.5617 82.9132L20.5615 82.9274ZM66.9096 62.887H54.0159C43.8261 62.887 35.5464 71.0967 35.5464 81.1999V82.3746L39.4076 80.7023C46.7675 77.5096 53.4861 72.6584 58.8111 66.6875C59.2014 66.259 59.8566 66.2176 60.2886 66.6046C60.7207 66.9777 60.7626 67.6412 60.3723 68.0695C54.8384 74.2614 47.8826 79.2927 40.2443 82.6098L39.4916 82.9415H48.4404C53.4447 82.9415 58.1279 80.9789 61.6268 77.4407C65.028 73.9854 66.9098 69.4382 66.9098 64.6288L66.9096 62.887Z" fill="currentColor"/>
                </svg>
              }
            />
            <WellnessOfferingCard
              category="Rest & Movement"
              title="Yoga & Meditation"
              description="Quiet spaces overlooking mountain stretches, designed for breathwork, movement, and inward stillness."
              icon={
                <svg width="64" height="64" viewBox="0 0 86 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M40.6996 45.9241C35.974 45.9241 25.3082 45.0965 18.4334 38.2218C9.64979 29.4381 10.7578 14.4205 10.8112 13.7797C10.8378 13.4687 10.9726 13.1769 11.1921 12.955C11.4116 12.733 11.7019 12.595 12.0126 12.565C12.4798 12.565 23.7597 11.6572 32.5433 17.0769C32.7823 17.2264 32.9679 17.4477 33.0734 17.709C33.1789 17.9704 33.1989 18.2585 33.1307 18.532C32.7738 19.9915 32.5901 21.488 32.5834 22.9905C32.5834 33.5496 42.3148 42.5602 43.4361 43.548C43.628 43.7184 43.7667 43.9405 43.8356 44.1877C43.9045 44.4349 43.9007 44.6967 43.8246 44.9418C43.7486 45.1869 43.6035 45.4049 43.4067 45.5696C43.21 45.7344 42.9699 45.8389 42.7153 45.8707C42.2347 45.8974 41.5673 45.9241 40.6996 45.9241ZM13.4276 15.2214C13.3608 18.8123 13.7479 29.7985 20.329 36.3796C25.8955 41.9461 34.5991 43.0541 39.3246 43.2543C35.7604 39.4632 29.9803 31.881 29.9803 23.0306C29.9798 21.6497 30.1185 20.2722 30.3941 18.9191C24.0267 15.3416 16.351 15.1146 13.4276 15.1814V15.2214Z" fill="currentColor"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M44.6107 45.9302C43.6763 45.9302 43.0222 45.9302 42.7552 45.9302C42.4908 45.9158 42.2367 45.823 42.0251 45.6638C41.8136 45.5045 41.6542 45.2859 41.5672 45.0358C41.4821 44.7874 41.4721 44.5194 41.5386 44.2653C41.6051 44.0112 41.745 43.7824 41.9409 43.6075C43.0622 42.6197 52.807 33.6091 52.807 23.05C52.8004 21.5519 52.6167 20.0598 52.2597 18.6048C52.1945 18.3333 52.2161 18.0481 52.3215 17.7895C52.4268 17.5309 52.6107 17.3118 52.8471 17.1631C61.6307 11.7167 72.8706 12.5844 73.3912 12.6245C73.7066 12.6486 74.0033 12.7839 74.2282 13.0064C74.4531 13.2289 74.5917 13.524 74.6193 13.8392C74.6193 14.48 75.7807 29.4976 66.9837 38.2812C60.0689 45.1693 49.096 45.9302 44.6107 45.9302ZM55.063 18.8985C55.3381 20.2472 55.4767 21.6202 55.4768 22.9966C55.4768 31.8604 49.63 39.4426 46.0658 43.2337C50.778 43.0735 59.4815 41.9656 65.0881 36.3456C71.6825 29.7646 72.083 18.7783 72.0029 15.1875C69.1195 15.1207 61.4038 15.3477 55.063 18.8985Z" fill="currentColor"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M24.881 51.8009C22.6849 51.8143 20.4989 51.5039 18.3933 50.8798C6.48602 47.3023 0.358829 33.5261 0.105198 32.9387C-0.0171257 32.6491 -0.0333158 32.3257 0.0594802 32.0253C0.152276 31.7249 0.348104 31.4669 0.61246 31.2968C4.57877 28.865 8.93057 27.1269 13.4809 26.1574C13.8057 26.0892 14.1442 26.1444 14.4305 26.3122C14.7168 26.48 14.9303 26.7485 15.0294 27.0652C16.0076 30.5742 17.8425 33.7852 20.369 36.4095C27.7376 43.7781 40.4993 43.391 42.4749 43.2842H43.0356C45.0246 43.391 57.7195 43.7781 65.1282 36.4095C67.652 33.8092 69.4872 30.6204 70.4678 27.1319C70.5669 26.8152 70.7804 26.5468 71.0667 26.3789C71.353 26.2111 71.6915 26.1559 72.0163 26.2242C76.5666 27.1937 80.9184 28.9317 84.8847 31.3635C85.1491 31.5337 85.3449 31.7917 85.4377 32.092C85.5305 32.3924 85.5143 32.7159 85.392 33.0055C85.1384 33.5928 79.0112 47.369 67.1039 50.9465C56.8385 53.9634 45.7855 48.3034 42.7152 46.5547C40.0454 48.0498 32.8236 51.8009 24.881 51.8009ZM47.1871 45.8472C51.6457 47.8896 59.2012 50.4526 66.2629 48.3301C75.18 45.6603 80.7198 36.1291 82.3618 32.9387C79.2847 31.2137 75.9952 29.8988 72.577 29.0275C71.4282 32.4781 69.5112 35.6229 69.704 38.2249C61.1636 44.0451 52.4867 45.5268 47.1871 45.8472ZM3.06868 32.9387C4.71061 36.1291 10.2504 45.647 19.1676 48.3301C26.1758 50.4393 33.8515 47.8896 38.2433 45.8472C32.9037 45.5268 24.2669 44.0585 18.4334 38.2249C15.9088 35.6152 14.002 32.4721 12.8535 29.0275C9.43356 29.8937 6.14336 31.2088 3.06868 32.9387Z" fill="currentColor"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M42.7153 45.9951C42.4017 45.992 42.0992 45.8785 41.8609 45.6747C41.367 45.2609 29.9536 35.436 29.9536 22.9814C29.9536 10.5268 41.3804 0.728612 41.8476 0.314793C42.0884 0.111511 42.3934 0 42.7086 0C43.0238 0 43.3288 0.111511 43.5696 0.314793C44.0635 0.728612 55.4769 10.5535 55.4769 23.0081C55.4769 35.4627 44.0635 45.2743 43.5696 45.7014C43.3276 45.8956 43.0255 45.9995 42.7153 45.9951ZM42.7153 3.14478C40.1256 5.64105 32.6101 13.6905 32.6101 22.9948C32.6101 32.299 40.1122 40.3485 42.7019 42.8447C45.2916 40.3485 52.8071 32.299 52.8071 22.9948C52.8071 13.6905 45.305 5.64105 42.7153 3.14478Z" fill="currentColor"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M42.7153 46.022C42.3706 46.0066 42.0453 45.8583 41.8076 45.6082C41.5891 45.4349 41.4305 45.1974 41.3539 44.9293C41.2772 44.6611 41.2865 44.3757 41.3804 44.1131C41.4707 43.8548 41.6382 43.6304 41.8603 43.4704C42.0824 43.3104 42.3482 43.2226 42.6219 43.2188H42.8755C43.1569 43.2206 43.4305 43.3112 43.6572 43.4778C43.884 43.6444 44.0523 43.8783 44.1382 44.1463C44.2241 44.4142 44.2231 44.7024 44.1353 44.9698C44.0476 45.2371 43.8777 45.4699 43.6498 45.6349L42.8755 44.5537L43.6364 45.6483C43.3923 45.8836 43.0677 46.0173 42.7287 46.022H42.7153Z" fill="currentColor"/>
                </svg>
              }
            />
            <WellnessOfferingCard
              category="Environment"
              title="Nature & Reconnection"
              description="Lush gardens, fresh air, and peaceful surroundings in the sacred presence of divine Arunachala."
              icon={
                <svg width="64" height="64" viewBox="0 0 88 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M43.2744 27.0664H43.7803C48.0234 27.0664 51.6376 28.031 55.1221 30.0918L55.8174 30.5186C56.4367 30.9124 56.8983 31.2539 57.248 31.5625C57.7211 31.9813 58.6662 33.0554 59.9062 34.5664C61.1209 36.0465 62.5536 37.8649 63.9736 39.6973C66.8125 43.3605 69.5824 47.0582 70.4209 48.1816L70.5664 48.376L70.7734 48.5029L83.957 56.5117L83.958 56.5156L84.4727 56.8291C85.1907 57.2667 85.665 57.9873 85.7793 58.8145C85.8944 59.6479 85.6377 60.466 85.0664 61.0791L84.9199 61.2256C84.1751 61.9186 83.1078 62.1447 82.123 61.7998L65.2246 55.8301H65.2236C65.2215 55.8293 65.2187 55.8272 65.2158 55.8252C65.2131 55.8233 65.2107 55.8213 65.209 55.8193L65.2051 55.8154L57.4326 47.0381L54.8438 44.1152L55.2539 47.998L56.5811 60.5811L56.6826 61.543L57.6396 61.6865L67.125 63.1055L67.126 63.1064C67.1267 63.1068 67.128 63.1072 67.1299 63.1084C67.1352 63.112 67.1464 63.1218 67.1582 63.1406L67.1934 63.1982L64.4268 62.7832L56.6338 61.6133L56.627 61.6123L56.6094 61.6064C56.6066 61.605 56.6039 61.604 56.6025 61.6025C56.6012 61.6011 56.5998 61.5992 56.5986 61.5967C56.5975 61.5943 56.5957 61.589 56.5947 61.5801V61.5762L54.7402 43.9785L54.7393 43.9688C54.7383 43.9603 54.7387 43.955 54.7393 43.9521L54.7402 43.9492L54.7578 43.9424C54.7772 43.9342 54.7943 43.9338 54.8066 43.9365C54.8175 43.9389 54.8219 43.9426 54.8252 43.9463L54.8301 43.9512L65.0684 55.5049L65.2822 55.7461L65.5869 55.8545L82.1689 61.7197L82.1709 61.7207C83.1677 62.0707 84.289 61.7986 85.0137 61.0205C85.5735 60.4293 85.8212 59.6267 85.709 58.834H85.71C85.5958 58.0197 85.1264 57.3366 84.46 56.9219L84.4492 56.915L70.5371 48.4619L70.499 48.4209C68.9673 46.3713 66.1402 42.6238 63.4658 39.1836C62.1236 37.457 60.8148 35.8022 59.7266 34.4756C58.6667 33.1837 57.7443 32.114 57.2041 31.6357C56.8369 31.3088 56.3529 30.9581 55.79 30.6055H55.791C52.0578 28.2354 48.3301 27.1768 43.8018 27.1768H43.2959C38.7664 27.1768 35.0406 28.2341 31.3135 30.6016C30.8815 30.872 30.5105 31.1341 30.1963 31.3838L29.9014 31.6289L29.8936 31.6357C29.3531 32.114 28.4301 33.1829 27.3701 34.4746C26.2818 35.8008 24.9739 37.4555 23.6318 39.1816C20.9465 42.6355 18.1066 46.3995 16.5791 48.4463L16.5723 48.4541L16.5674 48.458L2.64844 56.915C1.94904 57.3407 1.50102 58.0446 1.38867 58.8301C1.27477 59.6273 1.52537 60.4311 2.0752 61.0205V61.0215C2.80039 61.8001 3.91214 62.0689 4.91309 61.7227L4.9209 61.7197L21.5029 55.8545L21.8076 55.7461L22.0215 55.5049L32.2598 43.9512C32.271 43.9385 32.2814 43.9334 32.2891 43.9316C32.2954 43.9302 32.3025 43.9315 32.3115 43.9346C32.3316 43.9448 32.3428 43.9652 32.3408 43.9834L32.3398 43.9873L30.4863 61.585L30.4854 61.5859C30.485 61.589 30.4829 61.5987 30.4727 61.6094C30.4682 61.614 30.4636 61.6168 30.4609 61.6182L30.459 61.6191L30.4463 61.6211L24.7793 62.4707L20.1543 63.165L24.5078 64.8711C33.402 68.3567 39.9258 71.3633 44.3672 74.0146L45.0088 74.3984L45.6504 74.0137C49.9553 71.4351 56.2235 68.5414 64.7021 65.1807L67.6885 63.9961L67.707 64.0254L68.6758 63.6465C69.2123 63.4365 69.7126 63.2453 70.0498 63.1045C72.3633 62.1601 74.3054 62.2213 75.9629 63.0908C77.303 63.7975 78.2355 64.9315 78.8438 65.9463C78.9983 66.2041 79.1285 66.4498 79.2373 66.6719H79.1387C79.0054 66.4073 78.8342 66.0935 78.6201 65.7598C78.0392 64.8544 77.0833 63.695 75.6621 63.0293L75.6572 63.0381L75.6602 63.0273C74.8803 62.6662 74.06 62.4981 73.1963 62.498C72.1839 62.498 71.135 62.7375 70.0713 63.165C69.5862 63.3575 68.8455 63.6472 67.8848 64.0186C57.8452 67.8835 51.2024 70.9651 46.8311 73.4102L45.083 74.3867L46.7285 75.5283C48.5973 76.8239 49.8551 77.9894 50.6113 79.0322C51.3567 80.0601 51.5705 80.9022 51.4932 81.6211L51.3086 83.3408L52.999 82.9775C57.5596 81.9958 62.5386 80.5485 66.7324 79.1553C70.8957 77.7722 74.3857 76.4094 75.9229 75.5811L75.9219 75.5801C78.2502 74.3277 79.2209 72.4614 79.5596 70.8408C79.8879 69.2698 79.6235 67.9534 79.5518 67.6416L79.4199 67.0703C79.4444 67.1267 79.4685 67.1799 79.4893 67.2305C79.556 67.3932 79.6024 67.5221 79.6309 67.6055C79.64 67.6321 79.6464 67.6535 79.6514 67.6689C80.1023 69.6405 79.8528 73.3655 76.3271 75.4922L75.9756 75.6924C74.5857 76.4417 70.6203 78.0186 65.6621 79.6328C60.7309 81.2383 54.9341 82.8422 49.916 83.6719L49.792 83.6924L49.6748 83.7373C48.8133 84.0661 47.6067 84.2461 46.0557 84.2461C45.7348 84.2461 45.3977 84.2384 45.041 84.2266L44.9854 84.2256L44.9287 84.2285C44.6092 84.2465 44.2874 84.2461 43.9424 84.2461C42.3905 84.2461 41.1811 84.0662 40.3252 83.7383L40.207 83.6934L40.082 83.6719C35.0657 82.8421 29.2687 81.2383 24.3369 79.6328C19.3783 78.0186 15.413 76.4416 14.0234 75.6924C11.2067 74.1739 10.2918 71.6896 10.1846 69.6631L10.2979 69.6328C10.318 70.0559 10.3738 70.5221 10.4883 71.0098C10.8603 72.5937 11.8465 74.3711 14.084 75.5801H14.085C16.4868 76.8742 23.8261 79.5502 31.2246 81.5615C34.9424 82.5722 38.7327 83.4315 41.9805 83.8682C43.6034 84.0864 45.1188 84.2024 46.4375 84.1729C47.7325 84.1438 48.9491 83.9727 49.9043 83.5352L49.9131 83.5312L49.9209 83.5273C50.3249 83.3351 50.6654 83.0984 50.9229 82.793C51.1953 82.4698 51.3076 82.1491 51.3643 81.9141L51.3672 81.9023L51.3691 81.8916C51.5795 80.9416 51.2646 79.9298 50.4971 78.9023C49.7362 77.8839 48.4444 76.7245 46.4131 75.3711C42.3418 72.6585 35.0118 68.9811 22.1094 64.0186C21.1311 63.6404 20.4007 63.3632 19.9424 63.1729L19.9365 63.1699L19.5674 63.0273C17.7249 62.3527 15.9286 62.2899 14.3359 63.0264L14.333 63.0283C12.9749 63.6611 12.0418 64.741 11.4521 65.6318C10.8566 66.5315 10.5463 67.3362 10.4678 67.5576L10.252 68.166C10.2778 67.9897 10.3068 67.8222 10.3428 67.666C10.3476 67.6503 10.3564 67.6245 10.3682 67.5898C10.3964 67.5065 10.4425 67.3782 10.5088 67.2158C10.642 66.8893 10.8524 66.4346 11.1523 65.9336C11.7592 64.9201 12.6909 63.7885 14.0332 63.0879L14.0361 63.0859C15.6086 62.2588 17.4556 62.1734 19.6279 62.9854L19.9307 63.0977L20.25 63.0508L29.4229 61.6816L30.3799 61.5391L30.4814 60.5771L31.8096 47.9941L32.2197 44.1113L29.6309 47.0342L21.8584 55.8115L21.8545 55.8154C21.8528 55.8174 21.8504 55.8194 21.8477 55.8213C21.8449 55.8231 21.842 55.8244 21.8398 55.8252H21.8389L4.93652 61.7969L4.93359 61.7979C3.89699 62.1675 2.74067 61.8825 1.98926 61.0752C1.4206 60.4482 1.16314 59.6308 1.27637 58.8105V58.8066C1.38687 57.986 1.86097 57.2646 2.58105 56.8252L2.58203 56.8262L16.2812 48.5029L16.4893 48.376L16.6338 48.1816C17.4698 47.0607 20.2391 43.3636 23.0781 39.7002C24.4982 37.8678 25.9313 36.0499 27.1465 34.5693C28.2328 33.2458 29.0929 32.2565 29.6084 31.749L29.8076 31.5615C30.1662 31.2488 30.6292 30.9036 31.2354 30.5195L31.2373 30.5186C34.9427 28.1636 38.7493 27.0664 43.2744 27.0664ZM43.5342 1.25C49.2483 1.25012 53.9111 5.91276 53.9111 11.627C53.9111 17.3412 49.2484 22.0038 43.5342 22.0039C37.8191 22.0039 33.1572 17.3523 33.1572 11.627C33.1572 5.91269 37.8199 1.25 43.5342 1.25ZM43.5342 1.35352C37.8605 1.35352 33.2483 5.96505 33.248 11.6387C33.248 17.3125 37.8604 21.9248 43.5342 21.9248C49.2079 21.9247 53.8193 17.3124 53.8193 11.6387C53.8191 5.96512 49.2078 1.35364 43.5342 1.35352Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                </svg>
              }
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <SecondaryButton href="/wellness">Discover Full Wellness Philosophy &rarr;</SecondaryButton>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 03 — RESORT / PLACE
         -------------------------------------------------------------------------- */}
      <EditorialSection
        eyebrow="The Resort Experience"
        title="Stay close to nature. Stay close to yourself."
        content={
          <>
            <p style={{ marginBottom: '1rem' }}>
              Gold Mountain is designed primarily as a peaceful resort. The architecture and open spaces honour the landscape, creating a sanctuary where quiet rhythm replaces everyday rush.
            </p>
            <p>
              Stroll through open courtyards, sit by quiet gardens, and experience a dwelling that feels integrated into the hill views of Tiruvannamalai.
            </p>
          </>
        }
        imageSrc="/images/resort_building_exterior_front.webp"
        imageAlt="Resort building facade and courtyard entrance"
        imagePosition="left"
        cta={<PrimaryButton href="/about">Explore the Resort</PrimaryButton>}
      />

      {/* --------------------------------------------------------------------------
         SECTION 04 — STAY
         -------------------------------------------------------------------------- */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Accommodations"
            title="Restful Dwellings in Nature"
            subtitle="Thoughtfully appointed rooms crafted for peaceful sleep, privacy, and natural light."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-lg)',
            }}
          >
            <RoomCard
              title="Deluxe Garden Room"
              subtitle="Ground Level | Garden Views"
              description="Spacious room featuring private garden views, natural wooden finishes, and serene natural ventilation."
              imageSrc="/images/resort_building_exterior_front.webp"
              amenities={['King Bed', 'Private Verandah', 'Garden View', 'Complimentary Tea']}
              href="#enquire"
            />
            <RoomCard
              title="Mountain View Suite"
              subtitle="Upper Level | Arunachala Views"
              description="Elevated suite offering direct vistas of the sacred hill stretch, expansive seating area, and private balcony."
              imageSrc="/images/resort_aerial_golden_hour_view.webp"
              amenities={['King Bed', 'Mountain Balcony', 'Spacious Lounge', 'Pure Natural Toiletries']}
              href="#enquire"
            />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 05 — EXPERIENCE
         -------------------------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Property Elements"
            title="More than a stay."
            subtitle="A place shaped by nature, tradition, and a deeper connection to sacred surroundings."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-md)',
            }}
          >
            <ExperienceBlock
              title="Shiva Shakthi Darshanam"
              subtitle="Sacred Vistas"
              description="Quiet viewing spots oriented toward the mountain stretch for quiet contemplation."
              imageSrc="/images/resort_aerial_golden_hour_view.webp"
            />
            <ExperienceBlock
              title="Farm & Herbal Garden"
              subtitle="Nourishment"
              description="Homegrown vegetables and fresh herbs cultivated for our wellness kitchen."
              imageSrc="/images/mindful_dining_sattvic_breakfast.webp"
              />
            <ExperienceBlock
              title="Quiet Pond & Sanctuary"
              subtitle="Reflection"
              description="Calm water features surrounded by natural flora and gentle bird calls."
              imageSrc="/images/meditation_buddha_sanctuary.webp"
            />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 06 — LOCATION
         -------------------------------------------------------------------------- */}
      <LocationBlock />

      {/* --------------------------------------------------------------------------
         SECTION 07 — DINING
         -------------------------------------------------------------------------- */}
      <section
        className="section"
        style={{
          position: 'relative',
          backgroundImage: 'url(/images/food_background.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 'var(--space-2xl) 0',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              textAlign: 'center',
              padding: 'var(--space-md)',
            }}
          >
            <span className="eyebrow" style={{ color: 'var(--accent-gold)' }}>
              Mindful Dining
            </span>
            <h2
              className="editorial-serif"
              style={{
                fontSize: 'var(--fs-h2)',
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-md)',
                lineHeight: '1.2',
              }}
            >
              Food that nourishes.
            </h2>
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: 'var(--fs-body)',
                lineHeight: '1.7',
                marginBottom: 'var(--space-md)',
              }}
            >
              Dining at Gold Mountain is an extension of our wellness ethos. We emphasize freshly cooked, wholesome meals prepared with seasonal local produce, gentle spices, and traditional recipes designed to support digestion and vitality.
            </p>
            <div>
              <PrimaryButton href="/wellness">Discover Dining Philosophy</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 08 — TRUST / TESTIMONIALS (Pinned Horizontal Scroll)
         -------------------------------------------------------------------------- */}
      <PinnedTestimonials
        eyebrow="Guest Reflections"
        title="Genuine Experiences at Gold Mountain"
        testimonials={[
          {
            quote: "The quiet presence of Arunachala and the peaceful garden walk made our stay deeply restorative. The food was gentle on the stomach and truly nourishing.",
            author: "International Wellness Guest",
            origin: "Stayed 7 Nights",
          },
          {
            quote: "A true resort surrounded by nature. Not a clinical environment, but a warm, slow-paced haven where you can really rest.",
            author: "Retreat Visitor",
            origin: "Stayed 5 Nights",
          },
          {
            quote: "The morning yoga sessions facing the hills brought an incredible sense of clarity. Truly a sacred sanctuary to reset mind and body.",
            author: "Ayurveda & Yoga Guest",
            origin: "Stayed 10 Nights",
          },
          {
            quote: "Fresh, farm-to-table vegetarian meals that felt tailored to our digestive well-being. We left feeling lighter and energized.",
            author: "Mindful Dining Guest",
            origin: "Stayed 4 Nights",
          },
          {
            quote: "Walking around the serene landscape at sunrise while observing hill views was a memory we will treasure forever.",
            author: "Long-Stay Sanctuary Guest",
            origin: "Stayed 14 Nights",
          },
        ]}
      />

      {/* --------------------------------------------------------------------------
         SECTION 09 — BLOG / JOURNAL
         -------------------------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Journal & Stories"
            title="Perspectives on Wellness & Nature"
            subtitle="Articles on traditional wellness, Arunachala history, healthy food, and living mindfully."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-md)',
            }}
          >
            <BlogCard
              title="Understanding the Rhythm of Arunachala"
              category="Location & Nature"
              excerpt="How the natural surroundings of Tiruvannamalai offer an ideal sanctuary to slow down and listen inwardly."
              date="August 2026"
              imageSrc="/images/resort_aerial_golden_hour_view.webp"
              slug="rhythm-of-arunachala"
            />
            <BlogCard
              title="The Principles of Mindful Dining"
              category="Nutrition"
              excerpt="Exploring how simple, fresh, seasonal meals support digestion and overall vitality during a wellness stay."
              date="August 2026"
              imageSrc="/images/mindful_dining_sattvic_breakfast.webp"
              slug="mindful-dining-principles"
            />
            <BlogCard
              title="Slowing Down: A Beginner's Guide to Rest"
              category="Lifestyle"
              excerpt="Simple practices to disconnect from digital noise and reconnect with natural circadian rhythms."
              date="August 2026"
              imageSrc="/images/meditation_buddha_sanctuary.webp"
              slug="beginners-guide-to-rest"
            />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 10 — FINAL CTA & ENQUIRY
         -------------------------------------------------------------------------- */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)', padding: 'var(--space-2xl) 0' }}>
        <div className="container">
          <div className="plan-visit-grid">
            <div className="plan-visit-text-block">
              <span className="eyebrow" style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>
                Plan Your Visit
              </span>
              <h2 className="editorial-serif" style={{ fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', color: 'var(--text-light)', lineHeight: 1.15, marginBottom: '1.5rem', maxWidth: '420px' }}>
                Your time at Gold Mountain begins here.
              </h2>
              <p style={{ color: 'var(--text-light-muted)', fontSize: 'var(--fs-body-lg)', lineHeight: 1.6, maxWidth: '420px' }}>
                Plan your stay, explore our wellness offerings, or simply speak with our team directly.
              </p>
            </div>

            <div className="plan-visit-form-block">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
