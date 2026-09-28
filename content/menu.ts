import { IMG, SITE } from "@/lib/site";
import type { Faq } from "@/lib/seo";

// Menu content, taken from the shop's public listings and customer reviews.
// Prices are left off on purpose because they're posted in store. Add `price: "$4.50"` to any item to show one.
export type MenuItem = { name: string; desc: string; tag: string; price?: string };
export type MenuSection = {
  slug: "coffee-espresso" | "hot-chocolate" | "food-pastries";
  name: string;
  short: string;
  icon: string;
  img: string;
  intro: string;
  items: MenuItem[];
  faqs: Faq[];
  seo: { title: string; description: string; h1: string; tagline: string };
};

export const MENU: MenuSection[] = [
  {
    slug: "coffee-espresso",
    name: "Coffee & Espresso",
    short: "Coffee & Espresso",
    icon: "coffee",
    img: IMG.latte,
    intro:
      "Every shot is pulled from fair trade Arabica beans roasted by a 4th-generation Salt Lake City roaster. Hot, iced, or blended, and any drink can be made decaf.",
    items: [
      { name: "Organic Drip Coffee", desc: "Triple-certified organic, fair trade Arabica. Brewed fresh throughout the day, hot or iced.", tag: "Fair Trade" },
      { name: "Americano", desc: "Espresso and hot water for a smooth, bold cup. Regulars call ours one of the best in town.", tag: "Regular Favorite" },
      { name: "Espresso", desc: "A rich single or double shot, pulled to order.", tag: "Classic" },
      { name: "Latte", desc: "Espresso and steamed milk, hot or iced. Ask about today's flavors.", tag: "Hot or Iced" },
      { name: "Cappuccino", desc: "Espresso under a thick cap of velvety foam.", tag: "Classic" },
      { name: "Mocha", desc: "Espresso, chocolate, and steamed milk. Add our scratch whipped cream.", tag: "Sweet" },
      { name: "Chai Latte", desc: "Spiced chai and steamed milk, hot or iced.", tag: "No Espresso" },
      { name: "Chai Chiller", desc: "Our blended, ice-cold chai. A summer favorite that regulars order year-round.", tag: "Blended" },
      { name: "Water-Processed Decaf", desc: "Our decaf is decaffeinated with water. Any drink on the menu can be made with it.", tag: "Decaf" },
    ],
    faqs: [
      {
        q: "Where does The Coffee Compound get its coffee?",
        a: "Our coffee and espresso come from a 4th-generation Salt Lake City roaster. They buy fair trade Arabica beans from growers they visit every year, and their organic coffee is triple certified.",
      },
      { q: "Can I get my drink iced or decaf?", a: "Yes. Almost every espresso drink can be made hot, iced, or decaf. Our decaf is water decaffeinated." },
      { q: "Can I order espresso through the drive-thru?", a: 'Yes. Everything on the coffee menu is available at our <a href="/drive-thru/">drive-thru window</a> on Grant Avenue.' },
    ],
    seo: {
      title: "Coffee & Espresso in Downtown Ogden | The Coffee Compound",
      description:
        "Fair trade Arabica espresso, organic drip, Americanos, lattes, and blended chai chillers from a 4th-generation Utah roaster. Downtown Ogden cafe and drive-thru at 2417 Grant Ave.",
      h1: "Coffee & Espresso in Downtown Ogden",
      tagline: "Fair trade Arabica from a 4th-generation Utah roaster",
    },
  },
  {
    slug: "hot-chocolate",
    name: "Hot Chocolate & Frozen Hot Chocolate",
    short: "Hot Chocolate",
    icon: "icecream",
    img: IMG.nook,
    intro:
      "Not a coffee drinker? Our homemade hot chocolate and frozen hot chocolate are made in house and topped with whipped cream we whip from scratch. No canned cream, ever.",
    items: [
      { name: "Frozen Hot Chocolate", desc: "Our signature. Rich homemade chocolate blended icy and smooth, crowned with scratch whipped cream.", tag: "Signature" },
      { name: "Homemade Hot Chocolate", desc: "Made in house, never from a packet, and finished with scratch whipped cream.", tag: "House-Made" },
      { name: "Scratch Whipped Cream", desc: "Whipped fresh in the shop. Add it to any drink, hot or cold.", tag: "Add-On" },
      { name: "Mocha", desc: "Can't choose between coffee and chocolate? Espresso, chocolate, and steamed milk.", tag: "Best of Both" },
    ],
    faqs: [
      {
        q: "Where can I get frozen hot chocolate in Ogden?",
        a: "The Coffee Compound at 2417 Grant Ave in downtown Ogden makes frozen hot chocolate in house and tops it with scratch-made whipped cream. It's available inside and at the drive-thru.",
      },
      { q: "Is your whipped cream really homemade?", a: "Yes. We whip our cream from scratch in the shop instead of using pre-made or canned cream." },
      { q: "Do you have drinks for kids or non-coffee drinkers?", a: "Yes. Our hot chocolate, frozen hot chocolate, and chai drinks are popular with guests who skip coffee." },
    ],
    seo: {
      title: "Frozen Hot Chocolate in Ogden, UT | The Coffee Compound",
      description:
        "Homemade hot chocolate and frozen hot chocolate topped with scratch-made whipped cream. Find it at The Coffee Compound, 2417 Grant Ave in downtown Ogden, inside or at the drive-thru.",
      h1: "Frozen Hot Chocolate in Ogden",
      tagline: "Homemade chocolate. Scratch whipped cream.",
    },
  },
  {
    slug: "food-pastries",
    name: "Food & Pastries",
    short: "Food & Pastries",
    icon: "bakery_dining",
    img: IMG.bagel,
    intro:
      "Hot breakfast sandwiches made to order and house-baked treats every morning. Selection changes daily, so check the pastry case or call ahead.",
    items: [
      { name: "Asiago Bagel Breakfast Sandwich", desc: "A toasted Asiago bagel stacked hot and fresh. A regular's go-to with an Americano.", tag: "Made Hot" },
      { name: "Breakfast Sandwiches", desc: "Hot and fresh breakfast sandwiches, perfect to grab through the drive-thru on the way to work.", tag: "Grab & Go" },
      { name: "Cinnamon Rolls", desc: "Soft, sweet, and made for dunking.", tag: "House-Baked" },
      { name: "Daily Pastries & Baked Goods", desc: "Muffins and other homemade bakes that rotate daily. Ask what came out of the oven this morning.", tag: "Changes Daily" },
    ],
    faqs: [
      {
        q: "Does The Coffee Compound serve breakfast?",
        a: "Yes. We serve hot breakfast sandwiches, including our popular Asiago bagel sandwich, plus cinnamon rolls and house-baked pastries.",
      },
      { q: "Can I order food at the drive-thru?", a: "Yes. Breakfast sandwiches and pastries are available at the drive-thru while they last." },
      {
        q: "Do you cater meetings?",
        a: `Ask us about coffee and pastries for meetings or our conference room. <a href="/contact/">Send us a note</a> or call ${SITE.phone}.`,
      },
    ],
    seo: {
      title: "Breakfast Sandwiches & Pastries in Downtown Ogden | The Coffee Compound",
      description:
        "Hot Asiago bagel breakfast sandwiches, cinnamon rolls, and house-baked pastries at The Coffee Compound in downtown Ogden. Grab breakfast inside or at the drive-thru.",
      h1: "Breakfast & Fresh Pastries",
      tagline: "Hot sandwiches and house-baked treats every morning",
    },
  },
];

export function menuSchema(sections: MenuSection[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "The Coffee Compound Menu",
    url: `${SITE.url}${path}`,
    inLanguage: "en",
    hasMenuSection: sections.map((s) => ({
      "@type": "MenuSection",
      name: s.name,
      url: `${SITE.url}/menu/${s.slug}/`,
      hasMenuItem: s.items.map((i) => ({ "@type": "MenuItem", name: i.name, description: i.desc })),
    })),
  };
}
