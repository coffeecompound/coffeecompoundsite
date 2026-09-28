// Material Symbols icons used on the site. The font is requested with only these glyphs,
// which cuts it from several MB to a few KB. `npm run build` checks this list (scripts/check-icons.mjs).
export const ICONS = [
  "arrow_forward", "bakery_dining", "call", "chat", "check_circle", "close", "coffee", "coffee_maker",
  "directions_car", "edit_note", "error", "expand_more", "explore", "favorite", "format_quote", "forum",
  "groups", "home", "icecream", "info", "laptop_mac", "local_cafe", "local_parking", "location_on", "mail",
  "menu", "menu_book", "military_tech", "music_note", "open_in_new", "palette", "pin_drop", "rate_review",
  "schedule", "sentiment_very_satisfied", "share", "star", "storefront", "theater_comedy", "train",
  "water_drop", "wb_sunny",
] as const;

export const ICON_FONT_URL =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" +
  `&icon_names=${[...ICONS].sort().join(",")}&display=block`;
