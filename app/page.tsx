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
          The defining statement, full-bleed exterior
      ============================================ */}
      <section className="relative min-h-screen flex items-end bg-forest-700">
        {/* Background - placeholder for now, will use real photo */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-700 via-forest-800 to-ink">
          {/* Texture overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
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
          Brand Brief copy, straight from the brief
      ============================================ */}
      <section id="about" className="section bg-cream-100 grain-overlay relative">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image placeholder */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] bg-forest-700/10 relative">
                {/* Placeholder - will be interior shot with tools on ceiling */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-ink-muted">
                    <div className="flex justify-center gap-4 mb-4 text-forest-600">
                      <Beer className="w-12 h-12" />
                      <Wrench className="w-12 h-12" />
                      <Bike className="w-12 h-12" />
                    </div>
                    <p className="text-sm">Interior photo: tools hanging from ceiling, drinks at the bar</p>
                  </div>
                </div>
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
          The triptych of pub/hardware/bikes
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
            <div className="group relative bg-ink-light p-8 hover:bg-forest-700 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-mustard-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <Beer className="w-12 h-12 text-mustard-400 mb-6" />
              <h3 className="font-display font-bold text-2xl text-cream-50 mb-4">The Pub</h3>
              <p className="text-cream-300 leading-relaxed mb-6">
                Guinness. Irish whiskeys. The occasional trad session. We don't serve food, just drinks. The way a pub should be.
              </p>
              <ul className="text-sm text-cream-400 space-y-2">
                <li>Guinness & Murphy's</li>
                <li>Irish whiskeys</li>
                <li>Live music sessions</li>
                <li>The famous Snug</li>
              </ul>
            </div>

            {/* Hardware */}
            <div className="group relative bg-ink-light p-8 hover:bg-forest-700 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-mustard-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <Wrench className="w-12 h-12 text-mustard-400 mb-6" />
              <h3 className="font-display font-bold text-2xl text-cream-50 mb-4">The Hardware</h3>
              <p className="text-cream-300 leading-relaxed mb-6">
                Nails, screwdrivers, tape, rubber gloves, chisels. If you need it fixed, we probably have what you need. Ask at the bar.
              </p>
              <ul className="text-sm text-cream-400 space-y-2">
                <li>Hand tools</li>
                <li>Nails & screws</li>
                <li>Tape & adhesives</li>
                <li>Vintage stock spanning decades</li>
              </ul>
            </div>

            {/* Bikes */}
            <div className="group relative bg-ink-light p-8 hover:bg-forest-700 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-mustard-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <Bike className="w-12 h-12 text-mustard-400 mb-6" />
              <h3 className="font-display font-bold text-2xl text-cream-50 mb-4">The Bicycles</h3>
              <p className="text-cream-300 leading-relaxed mb-6">
                Day rentals for exploring the Dingle Peninsula. We'll sort you out with a bike and point you toward Connor Pass.
              </p>
              <ul className="text-sm text-cream-400 space-y-2">
                <li>Day rentals</li>
                <li>Basic repairs</li>
                <li>Local route advice</li>
                <li>Return when you're done</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          THE SNUG - The famous feature
          The magic corner of Foxy John's
      ============================================ */}
      <section id="snug" className="section bg-cream-200 grain-overlay relative">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="kicker mb-4">The Magic Corner</p>
              <h2 className="text-ink text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8 leading-tight">
                The Snug
              </h2>
              <div className="space-y-6 text-lg text-ink-muted leading-relaxed">
                <p>
                  Just left of the main entrance. A narrow wooden coffin of a space with a window view and a private drink counter with direct access to the bar.
                </p>
                <p className="text-ink font-medium">
                  Get there early. The locals know about it too.
                </p>
                <p>
                  This is how Dingle has always worked: community first, categories second. Need a pint? Need a chisel? Need someone to tell you the best route over Connor Pass?
                </p>
                <p className="text-xl font-display font-bold text-forest-700">
                  Pull up a stool.
                </p>
              </div>
            </div>

            {/* Snug illustration/placeholder */}
            <div className="relative">
              <div className="aspect-square bg-forest-700 relative overflow-hidden">
                {/* Placeholder for snug photo */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-cream-100">
                    <Quote className="w-16 h-16 mx-auto mb-6 text-mustard-400" />
                    <p className="font-display text-2xl italic mb-4">
                      "The snug is the magic corner. Get there early."
                    </p>
                    <p className="text-mustard-400 text-sm uppercase tracking-wider">A narrow wooden booth with its own drink hatch</p>
                  </div>
                </div>
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
      <section className="section bg-forest-700 text-cream-50 relative overflow-hidden">
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
          <div className="mt-12 inline-flex items-center gap-4 px-8 py-4 bg-ink/30 backdrop-blur-sm">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-mustard-400 text-mustard-400" />
              ))}
            </div>
            <span className="font-display font-bold">10/10</span>
            <span className="text-cream-300">"One of the world's most perfect drinking locations"</span>
          </div>
          <p className="text-cream-400 text-sm mt-4">Scoundrel's Field Guide</p>
        </div>
      </section>

      {/* ============================================
          VISIT - Find Us
          Location, hours, contact, getting there
      ============================================ */}
      <section id="visit" className="section bg-cream-100">
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
