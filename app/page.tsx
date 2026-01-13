'use client'

import Image from 'next/image'
import { Phone, MapPin, ArrowRight, Star, Bike, Wrench, Beer, Quote, Clock, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

const stagger = {
  animate: { transition: { staggerChildren: 0.15 } }
}

export default function HomePage() {
  return (
    <>
      {/* ============================================
          HERO - "Pub. Hardware. Bicycles."
          Full-bleed exterior shot
      ============================================ */}
      <section className="relative min-h-screen flex items-end">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/exterior-01.webp"
            alt="Foxy John's - the iconic green facade on Main Street, Dingle"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/20" />
        </div>

        <motion.div
          className="relative z-10 w-full pb-16 md:pb-24 lg:pb-32 pt-40"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <div className="container-wide">
            <div className="max-w-4xl">
              {/* The iconic three-word headline */}
              <motion.div variants={fadeUp} className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 max-w-[60px] bg-mustard-400" />
                  <span className="text-mustard-400 text-sm font-semibold uppercase tracking-[0.3em]">Since 1899</span>
                </div>
                <h1 className="shop-sign text-cream-50 text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]">
                  Pub.<br />
                  <span className="text-mustard-400">Hardware.</span><br />
                  Bicycles.
                </h1>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="text-xl md:text-2xl text-cream-200 leading-relaxed mb-10 max-w-2xl"
              >
                Since 1899, Foxy John's has been serving pints, selling nails, and renting bikes on Dingle's Main Street. We see no reason to stop now.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <a href="#visit" className="btn-mustard">
                  Find Us on Main Street
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#services" className="btn-ghost-light">
                  <Bike className="w-5 h-5" />
                  Rent a Bike
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-cream-200/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-cream-200/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* ============================================
          SOCIAL PROOF BAR
          Quick credibility markers
      ============================================ */}
      <section className="bg-mustard-400 text-ink py-6 md:py-8">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-ink text-ink" />
                ))}
              </div>
              <span className="font-display font-bold">10/10</span>
              <span className="text-ink/70">Scoundrel's Field Guide</span>
            </div>
            <span className="hidden md:inline text-ink/30">|</span>
            <span className="font-medium">125+ years on Main Street</span>
            <span className="hidden md:inline text-ink/30">|</span>
            <span className="font-medium">Star Wars wrap party venue</span>
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT - The delightful absurdity
          Shows the interior with hardware and drinkers
      ============================================ */}
      <section id="about" className="section bg-cream-100">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image - THE iconic shot: Guinness with hardware shelves behind */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/guinness-hardware.webp"
                  alt="A pint of Guinness on the bar with hardware shelves and the Foxy John's sign behind"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-forest-700 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-mustard-400 -z-10" />
            </div>

            {/* Copy - directly from Brand Brief */}
            <div className="order-1 lg:order-2">
              <p className="kicker mb-4">Welcome to Foxy John's</p>
              <h2 className="text-ink text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8 leading-tight">
                Walk through our green doors and you'll notice something odd.
              </h2>
              <div className="space-y-6 text-lg text-ink-muted leading-relaxed">
                <p>
                  On your left: Guinness, whiskey, the crackle of a trad session starting up.
                </p>
                <p>
                  On your right: screwdrivers, nails, a bicycle pump, and yes, that is rat poison behind the bar.
                </p>
                <p className="text-ink font-medium">
                  Welcome to Foxy John's.
                </p>
                <p>
                  The combination you never knew you needed. Part pub, part hardware store, part bicycle rental. All since 1899.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-1 h-16 bg-forest-700" />
                <div>
                  <p className="font-display font-bold text-ink text-lg">125 years strong</p>
                  <p className="text-ink-muted">If we were doing something wrong, someone would have mentioned it by now.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SERVICES - Three Things, One Shop
          With real photos for each service
      ============================================ */}
      <section id="services" className="section bg-ink text-cream-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="kicker text-mustard-400 mb-4">What We Do</p>
            <h2 className="text-cream-50 text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Three Things, One Shop
            </h2>
            <p className="text-xl text-cream-300 max-w-2xl mx-auto">
              Drinks. Hardware. Bikes. We've been doing this since your great-grandparents were young.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pub */}
            <div className="group relative bg-ink-light overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/nice-pint.webp"
                  alt="A perfect pint of Guinness at Foxy John's bar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Beer className="w-10 h-10 text-mustard-400 mb-4" />
                <h3 className="font-display font-bold text-2xl text-cream-50 mb-2">The Pub</h3>
                <p className="text-cream-300 text-sm leading-relaxed">
                  Guinness. Irish whiskeys. The occasional trad session. We don't serve food, just drinks. The way a pub should be.
                </p>
              </div>
            </div>

            {/* Hardware */}
            <div className="group relative bg-ink-light overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/interior-03.webp"
                  alt="The hardware shelves at Foxy John's - decades of accumulated inventory"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Wrench className="w-10 h-10 text-mustard-400 mb-4" />
                <h3 className="font-display font-bold text-2xl text-cream-50 mb-2">The Hardware</h3>
                <p className="text-cream-300 text-sm leading-relaxed">
                  Nails, screwdrivers, tape, rubber gloves, chisels. If you need it fixed, we probably have what you need. Ask at the bar.
                </p>
              </div>
            </div>

            {/* Bikes */}
            <div className="group relative bg-ink-light overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/interior-02.webp"
                  alt="Foxy John's sign showing Hardware and Rent a Bike services"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Bike className="w-10 h-10 text-mustard-400 mb-4" />
                <h3 className="font-display font-bold text-2xl text-cream-50 mb-2">The Bicycles</h3>
                <p className="text-cream-300 text-sm leading-relaxed">
                  Day rentals for exploring the Dingle Peninsula. We'll sort you out with a bike and point you toward Connor Pass.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          THE SNUG - The famous feature
          Quote-focused with atmospheric styling
      ============================================ */}
      <section id="snug" className="section bg-forest-700 text-cream-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="kicker text-mustard-400 mb-4">The Magic Corner</p>
              <h2 className="text-cream-50 text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8 leading-tight">
                The Snug
              </h2>
              <div className="space-y-6 text-lg text-cream-200 leading-relaxed">
                <p>
                  Just left of the main entrance. A narrow wooden coffin of a space with a window view and a private drink counter with direct access to the bar.
                </p>
                <p className="text-cream-50 font-medium">
                  Get there early. The locals know about it too.
                </p>
                <p>
                  This is how Dingle has always worked: community first, categories second. Need a pint? Need a chisel? Need someone to tell you the best route over Connor Pass?
                </p>
                <p className="text-2xl font-display font-bold text-mustard-400">
                  Pull up a stool.
                </p>
              </div>
            </div>

            {/* The actual snug - narrow wooden corner */}
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/images/snug-actual.webp"
                  alt="The Snug at Foxy John's - a narrow wooden corner with red and yellow walls"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-mustard-400 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          STAR WARS - Social Proof that matters
          Mark Hamill chose this pub
      ============================================ */}
      <section className="section bg-ink text-cream-50 relative overflow-hidden">
        {/* Decorative stars */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-mustard-300"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${8 + Math.random() * 12}px`,
                height: `${8 + Math.random() * 12}px`,
                opacity: 0.3 + Math.random() * 0.7,
              }}
            />
          ))}
        </div>

        <div className="container-narrow text-center relative z-10">
          <p className="kicker text-mustard-400 mb-6">May 2016</p>
          <h2 className="text-cream-50 text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8">
            When Star Wars wrapped filming, they came here.
          </h2>
          <div className="space-y-6 text-lg text-cream-200 leading-relaxed max-w-2xl mx-auto">
            <p>
              After filming wrapped on Star Wars: The Last Jedi, the cast needed somewhere to celebrate. Skellig Michael was a short boat ride away. They could have gone anywhere.
            </p>
            <p className="text-xl text-cream-50 font-medium">
              Mark Hamill walked in at 11pm with his dog Millie. Daisy Ridley ended up pulling pints behind the bar.
            </p>
            <p>
              They chose Foxy John's because you can't fake what we have. You certainly can't build it. You can only let 125 years of business make its own kind of sense.
            </p>
          </div>
          <div className="mt-12 inline-flex items-center gap-4 px-8 py-4 bg-forest-700/50 backdrop-blur-sm">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-mustard-400 text-mustard-400" />
              ))}
            </div>
            <span className="font-display font-bold">10/10</span>
            <span className="text-cream-300 text-sm">"One of the world's most perfect drinking locations"</span>
          </div>
          <p className="text-cream-400 text-sm mt-4">Scoundrel's Field Guide</p>
        </div>
      </section>

      {/* ============================================
          GALLERY - Quick photo grid
      ============================================ */}
      <section className="section-sm bg-cream-100">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square relative overflow-hidden">
              <Image src="/images/exterior-cow.webp" alt="A cow outside Foxy John's - only in Dingle" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square relative overflow-hidden">
              <Image src="/images/interior-bar.webp" alt="The bar at Foxy John's with warm lighting" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square relative overflow-hidden">
              <Image src="/images/back-room.webp" alt="The cozy back room with stone walls" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square relative overflow-hidden">
              <Image src="/images/exterior-04.webp" alt="Foxy John's street view" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          VISIT - Find Us
          Location, hours, contact
      ============================================ */}
      <section id="visit" className="section bg-cream-200">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="kicker mb-4">Come Visit</p>
            <h2 className="text-ink text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Main Street, Dingle
            </h2>
            <p className="text-xl text-ink-muted max-w-2xl mx-auto">
              No reservations. Just walk in. If you can't find us, ask anyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Location */}
            <div className="bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-10 h-10 mx-auto mb-4 text-forest-700" />
              <h3 className="font-display font-bold text-xl text-ink mb-2">Location</h3>
              <p className="text-ink-muted">
                Main Street, Grove<br />
                Dingle, Co. Kerry<br />
                V92 PD6F
              </p>
              <a
                href="https://maps.google.com/?q=52.1409,-10.2671"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-forest-700 font-semibold hover:text-forest-600 transition-colors underline"
              >
                Get Directions
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-10 h-10 mx-auto mb-4 text-forest-700" />
              <h3 className="font-display font-bold text-xl text-ink mb-2">Hours</h3>
              <p className="text-3xl font-bold text-forest-700 mb-1">10:30am</p>
              <p className="text-ink-muted">Open daily</p>
              <p className="text-ink-faint text-sm mt-4">Closing depends on the craic</p>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <Phone className="w-10 h-10 mx-auto mb-4 text-forest-700" />
              <h3 className="font-display font-bold text-xl text-ink mb-2">Call Us</h3>
              <a
                href="tel:+353669151316"
                className="text-2xl font-bold text-forest-700 hover:text-forest-600 transition-colors"
              >
                066 915 1316
              </a>
              <p className="text-ink-faint text-sm mt-4">Questions? Bike bookings? Just call.</p>
            </div>

            {/* Bikes */}
            <div className="bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <Bike className="w-10 h-10 mx-auto mb-4 text-forest-700" />
              <h3 className="font-display font-bold text-xl text-ink mb-2">Bike Rental</h3>
              <p className="text-ink-muted">
                Day rentals available.<br />
                Just ask at the bar.
              </p>
              <p className="text-ink-faint text-sm mt-4">We'll point you toward Connor Pass</p>
            </div>
          </div>

          {/* Dingle context */}
          <div className="mt-12 text-center">
            <p className="text-ink-muted max-w-2xl mx-auto">
              Dingle has roughly 1,500 people and 50+ pubs. We're one of the originals. On Main Street since 1899.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA
          Warm Irish invitation
      ============================================ */}
      <section className="section-sm bg-mustard-400">
        <div className="container-narrow text-center">
          <h2 className="text-ink text-3xl md:text-4xl font-display font-bold mb-4">
            Pint of Guinness and a box of screws, please.
          </h2>
          <p className="text-xl text-ink/80 mb-8">
            Ah sure, come in. We've been expecting you for 125 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+353669151316" className="btn-forest">
              <Phone className="w-5 h-5" />
              Call Us
            </a>
            <a
              href="https://maps.google.com/?q=52.1409,-10.2671"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
