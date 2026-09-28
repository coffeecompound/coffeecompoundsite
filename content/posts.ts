import { IMG, SITE } from "@/lib/site";

// Local guides. Bodies are trusted HTML strings rendered inside the .prose-compound styles.
// To add a post: append an entry here; the index, the route, and the sitemap pick it up automatically.
export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  img: string;
  ic: string;
  excerpt: string;
  body: string;
  published?: string;
};

export const PUBLISHED = "2026-09-28";

export const POSTS: Post[] = [
  {
    slug: "coffee-near-historic-25th-street",
    title: "Coffee Near Historic 25th Street: A Local's Guide",
    metaTitle: "Coffee Near Historic 25th Street in Ogden",
    description:
      "Looking for coffee near Historic 25th Street in Ogden? A local guide to grabbing a cup one block away on Grant Ave, plus what to see on 25th Street, Union Station and more.",
    img: IMG.patio,
    ic: "local_cafe",
    excerpt: "One block north of Ogden's most famous street, with a drive-thru. Here's how to fit great coffee into a 25th Street visit.",
    body: `
<p>Historic 25th Street is the heart of downtown Ogden. Once the rowdy main drag between the railroad depot and the rest of town, it's now lined with restaurants, galleries, boutiques, and bars in beautifully restored brick buildings. If you're spending a morning or afternoon there, you'll want a good cup of coffee in hand.</p>
<p><strong>The Coffee Compound</strong> sits at <strong>${SITE.streetLong}</strong>, one block north of 25th Street between Lincoln Avenue and Washington Boulevard. It's close enough to walk, and it has something few downtown cafes offer: a <a href="/drive-thru/">drive-thru window</a>.</p>

<h2>Why coffee one block off 25th Street makes sense</h2>
<ul>
<li><strong>It's quick.</strong> Grab a drink at the window or inside, then walk to 25th Street in a couple of minutes.</li>
<li><strong>It's local.</strong> We're an independent, veteran- and woman-owned shop, <a href="/about/">run by Yvette and Tony Torres</a>.</li>
<li><strong>It's good coffee.</strong> Our fair trade Arabica comes from a 4th-generation Salt Lake City roaster, and our organic drip is triple certified.</li>
<li><strong>There's something for non-coffee drinkers.</strong> Our <a href="/menu/hot-chocolate/">frozen hot chocolate with scratch whipped cream</a> is a favorite with kids and grown-ups alike.</li>
</ul>

<h2>What to order before exploring</h2>
<p>If you're walking, an <a href="/menu/coffee-espresso/">Americano or latte</a> travels well. On hot summer days, the blended <strong>chai chiller</strong> is the move. Hungry? The <a href="/menu/food-pastries/">Asiago bagel breakfast sandwich</a> will hold you over until lunch on 25th.</p>

<h2>A simple 25th Street coffee walk</h2>
<ol>
<li><strong>Start at The Coffee Compound</strong> on Grant Avenue for your drink.</li>
<li><strong>Walk south one block to 25th Street</strong> and head west toward Union Station, which anchors the west end of the street.</li>
<li><strong>Visit Union Station.</strong> The historic depot houses several museums, including railroad and classic car collections. Check hours before you go.</li>
<li><strong>Wander back east along 25th Street,</strong> browsing shops and galleries and looking up at the historic storefronts.</li>
<li><strong>Keep going east</strong> toward Washington Boulevard and Peery's Egyptian Theater if you want to see more of downtown.</li>
</ol>

<h2>Timing your visit</h2>
<p>We're open <strong>${SITE.hours.filter((h) => h.open).map((h) => `${h.label} ${h.text}`).join(" and ")}</strong>, and closed Sundays. That makes us an ideal first stop for a morning downtown. On summer Saturdays, <a href="/events/">Farmers Market Ogden</a> takes over 25th Street, so come early, grab a coffee, and shop the market.</p>

<h2>Parking tip</h2>
<p>Downtown Ogden introduced managed parking in 2026, so rules vary by block. If you only need a coffee, the drive-thru means you don't have to park at all. For longer visits, see our <a href="/visit/">visit and parking page</a>.</p>
`,
  },
  {
    slug: "best-places-to-work-remotely-downtown-ogden",
    title: "Best Places to Work Remotely in Downtown Ogden",
    metaTitle: "Best Places to Work Remotely in Downtown Ogden, UT",
    description:
      "Where to work remotely in downtown Ogden: coffee shops with free Wi-Fi, a bookable conference room, and the public library. Tips for laptop-friendly etiquette and timing.",
    img: IMG.nook,
    ic: "laptop_mac",
    excerpt: "Free Wi-Fi, a quiet table, and a conference room when you need one. A practical guide for laptop workers downtown.",
    body: `
<p>Downtown Ogden is a great place to work outside the house. It's walkable, full of independent businesses, and close to the mountains when you need a break. Here's how to pick the right spot for a productive day, and how to be the kind of laptop guest cafes love to see.</p>

<h2>What makes a good remote work spot</h2>
<ul>
<li><strong>Reliable Wi-Fi</strong> that holds up for video calls.</li>
<li><strong>A calm atmosphere</strong> where you can focus without headphones cranked to max.</li>
<li><strong>Good coffee and food,</strong> so you don't have to leave to refuel.</li>
<li><strong>A private option</strong> for calls or meetings.</li>
</ul>

<h2>The Coffee Compound on Grant Avenue</h2>
<p>We're a small, independent shop at ${SITE.streetLong}, one block north of Historic 25th Street. Guests often describe the space as <strong>clean, comfortable, and a good place to get work done</strong>.</p>
<ul>
<li><strong>Free Wi-Fi</strong> for guests.</li>
<li><strong>A conference room</strong> you can ask about for meetings or focused work sessions. <a href="/contact/">Send us a note</a> or call ${SITE.phone}.</li>
<li><strong>Fuel for the day:</strong> <a href="/menu/coffee-espresso/">espresso drinks and organic drip</a>, plus <a href="/menu/food-pastries/">breakfast sandwiches and pastries</a>.</li>
<li><strong>Hours:</strong> ${SITE.hours.filter((h) => h.open).map((h) => `${h.label} ${h.text}`).join(", ")}. We're a morning-and-early-afternoon spot, so plan to start your day with us.</li>
</ul>

<h2>The public library</h2>
<p>The Weber County Library's main branch is downtown and offers free Wi-Fi and quiet space. It's a solid option for afternoons after we close. Check the library's website for current hours and room availability.</p>

<h2>Remote work etiquette at local cafes</h2>
<ol>
<li><strong>Buy something every couple of hours.</strong> A refill or a pastry keeps a small business going.</li>
<li><strong>Take calls outside or book a room.</strong> Everyone appreciates it.</li>
<li><strong>Share the big tables</strong> during busy morning rushes.</li>
<li><strong>Tip your barista.</strong> They're making your productive day possible.</li>
</ol>

<h2>Plan your workday downtown</h2>
<p>Start with coffee and a bagel sandwich at The Coffee Compound, knock out your deep work in the morning, take a lunch walk down 25th Street, and finish your afternoon at the library. Want to host a team meetup? <a href="/contact/">Ask about our conference room</a>.</p>
`,
  },
  {
    slug: "things-to-do-downtown-ogden-morning",
    title: "Things to Do in Downtown Ogden in the Morning",
    metaTitle: "Things to Do in Downtown Ogden in the Morning",
    description:
      "A morning itinerary for downtown Ogden, Utah: coffee on Grant Ave, Historic 25th Street, Union Station museums, the Saturday farmers market, and nearby trails.",
    img: IMG.barista,
    ic: "wb_sunny",
    excerpt: "Coffee, historic streets, museums, a Saturday market, and mountain views. How to spend a great morning in Ogden.",
    body: `
<p>Ogden mornings are special. The Wasatch Mountains glow above town, 25th Street is quiet, and the day is full of possibility. Whether you're a local looking for a new routine or visiting for the weekend, here's how to make the most of a morning downtown.</p>

<h2>1. Start with coffee on Grant Avenue</h2>
<p>Begin at <strong>The Coffee Compound</strong>, ${SITE.streetLong}. We open at ${SITE.hours[0].text.split(" – ")[0]} on weekdays and ${SITE.hours[1].text.split(" – ")[0]} on Saturdays. Order a latte or <a href="/menu/hot-chocolate/">frozen hot chocolate</a> and a hot <a href="/menu/food-pastries/">bagel breakfast sandwich</a>. In a hurry? Use the <a href="/drive-thru/">drive-thru</a>.</p>

<h2>2. Stroll Historic 25th Street</h2>
<p>Walk one block south to 25th Street, Ogden's most famous block. Early in the day it's peaceful, and you can take in the historic architecture before the shops get busy. Read more in our <a href="/blog/coffee-near-historic-25th-street/">25th Street coffee guide</a>.</p>

<h2>3. Explore Union Station</h2>
<p>At the west end of 25th Street, Union Station is Ogden's grand historic rail depot. It houses several museums covering railroad history, classic cars, and more. Check current hours before you go.</p>

<h2>4. Shop the Saturday farmers market (summer &amp; fall)</h2>
<p>From Memorial Day weekend into September, Farmers Market Ogden fills Historic 25th Street on Saturday mornings with local produce, food, and artisans. A smaller fall market follows. Grab your coffee first, since we're just a block away. See our <a href="/events/">events page</a> for more downtown traditions.</p>

<h2>5. Get outside</h2>
<p>Ogden is famous for how close the outdoors is to downtown. The Ogden River Parkway is great for an easy walk or bike ride, and trailheads along the east bench offer mountain hikes with big views. Bring your coffee in a travel mug.</p>

<h2>6. Catch a show or an art walk later</h2>
<p>If your morning turns into a full day, Peery's Egyptian Theater on Washington Boulevard hosts films and performances, and the <a href="/events/">First Friday Art Stroll</a> brings galleries to life on the first Friday evening of every month.</p>

<h2>A sample morning</h2>
<ul>
<li><strong>7:30 AM</strong> Coffee and breakfast at The Coffee Compound.</li>
<li><strong>8:15 AM</strong> Walk Historic 25th Street.</li>
<li><strong>9:00 AM</strong> Farmers market on summer Saturdays, or Union Station when it opens.</li>
<li><strong>11:00 AM</strong> A walk on the Ogden River Parkway, then lunch on 25th Street.</li>
</ul>
`,
  },
];
