# The World — Wednesday, 18 November 2026

An entry for make.fun's "Sum up 18 November's world news in one image" bounty.

The image is a newspaper front page. The masthead reads "THE WORLD" and the
date line is Wednesday, 18 November 2026. It sums up the day in five stories,
each checked against live news sources on 18 November 2026 (morning edition —
news as reported by 07:00 WIB; a refresh pass with the full day's news is
planned before the deadline):

1. **Trump in Manila as Quad leaders meet again.** Donald Trump arrived in
   the Philippines for the first Quad leaders' summit in two years, meets
   President Ferdinand Marcos Jr. on Wednesday, then heads to Shenzhen for
   APEC and a first-ever three-way meeting on nuclear arms with Xi Jinping
   and Vladimir Putin.
2. **Ukraine strike breaks Crimea Bridge.** A Ukrainian missile and drone
   strike collapsed a span of the Kerch Bridge to occupied Crimea, the
   second strike in two days; Russia said 1,441 drones were shot down, and
   Moscow hit two Kyiv bridges overnight in reply.
3. **Nvidia beats forecasts after Huang exit.** Revenue hit $115.8 billion,
   up 103% on a year ago and above Wall Street's $109.1 billion forecast;
   the chipmaker guided next quarter to $130 billion and shares rose about
   3% after hours.
4. **Iran drones target US radar in Bahrain.** The Revolutionary Guards said
   drones hit a US radar at Sheikh Isa Air Base, the third such attack in
   five days; Bahrain said its defences intercepted them, with no damage
   reported.
5. **Knesset picks Eisenkot ally as speaker.** Matan Kahana of Gadi
   Eisenkot's Yashar party was elected speaker 66–52, replacing Likud's
   Amir Ohana and giving the opposition control of the legislative agenda
   after October's deadlocked election.

Also today: Britain sanctions eight firms building West Bank settlements;
Japan scrambles jets as suspected Russian planes enter its airspace;
Cyclone Akvan heads for India's coast, landfall due 20 November; Canada and
China extend trade deals.

Every story was verified against live news sources on 18 November 2026 (see
SOURCES.md in the competition workspace). All text is set in real fonts, so
nothing is garbled, and the pictures are AI-generated editorial illustrations
made for this front page.

## How it works

`main.ts` copies the bundled image `entry.png` byte for byte into the
output directory and then reads the copy back to check it matches. If the
bytes differ, the program fails. Every run therefore produces identical
output.

## Files

- `main.ts` — the program (the entrypoint). It copies and verifies the image.
- `entry.png` — the picture: the front page itself.
