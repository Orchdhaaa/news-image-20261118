# The World — Wednesday, 18 November 2026

An entry for make.fun's "Sum up 18 November's world news in one image" bounty.

The image is a newspaper front page. The masthead reads "THE WORLD" and the
date line is Wednesday, 18 November 2026. It sums up the day in five stories,
each checked against live news sources on 18 November 2026 (evening edition —
the full day's news as reported by 21:00 WIB):

1. **Iran hits back in the Gulf — Kuwait struck, Bahrain hit again.** Iran
   said it fired on US drone and missile sites in Kuwait overnight, the
   first Iranian attack on Kuwait since September, after US jets struck a
   Revolutionary Guard missile site on Qeshm Island in the Strait of Hormuz;
   Bahrain said its defences intercepted Iranian attacks for the third time
   this week.
2. **Kerch Bridge road arch collapses into the sea.** Ukrainian drones and
   missiles destroyed the central road section of the bridge to Crimea on
   Tuesday, the second strike in two days; two people were killed and road
   traffic was suspended, while rail traffic resumed after a pause.
3. **Nvidia board shuts the door on Huang.** Revenue hit $115.8 billion, up
   103% on a year ago and above Wall Street's $109.1 billion forecast; on the
   earnings call the board said it "does not intend to reinstate" Jensen
   Huang, who resigned on 12 November, and shares rose after hours.
4. **Xi and Putin meet in Shenzhen ahead of Trump trilateral.** Xi Jinping
   and Vladimir Putin held talks on Wednesday, a day before a first-ever
   trilateral summit with Donald Trump; Putin was welcomed at the airport by
   Cai Qi and Xi pledged to stand against trade protectionism.
5. **Democrats take the Senate as Peltola wins Alaska.** Democrat Mary
   Peltola defeated Republican Dan Sullivan in Alaska, giving her party a
   projected 56–44 Senate majority, its ninth flip of the midterms and its
   largest majority since 2009.

Also today: Russian military plane crashes in Siberia, 19 dead; Cyclone
Xavier, Category 5, batters the Northern Cook Islands; Knesset picks
Eisenkot ally Kahana as speaker; Trump meets Marcos in Manila, flies to
Shenzhen.

Every story was verified against live news sources on 18 November 2026 (see
SOURCES.md in the competition workspace). All text is set in real fonts, so
nothing is garbled, and the pictures are AI-generated editorial illustrations
made for this front page.

## Verification (evening refresh, 19 November 2026)

- Lead cross-checked to Reuters before rendering: Iran fired on US drone
  and missile sites in Kuwait overnight after the US struck Qeshm Island;
  first Iranian attack on Kuwait since September; Bahrain intercepted
  Iranian attacks three times in a week.
- Xi–Putin Shenzhen talks, Peltola's 56–44 Senate win, the Nvidia board's
  "does not intend to reinstate" line, the Kerch arch collapse (2 killed,
  road shut, rail resumed), the Siberia An-12 crash (19 dead) and Cyclone
  Xavier (Category 5, Northern Cook Islands — not Cyclone Akvan) were each
  re-verified against live reports before rendering; no brief fact failed.
- Determinism: two runs byte-identical, entry.png sha256
  51e62e5f1cf83d5f57edc73256cb44941d5922a2afa3cc394e7d446f90129814
  (275,583 bytes). Grader simulation (bare `node main.ts`, no args, no env,
  output to /output) writes identical bytes.

## How it works

`main.ts` copies the bundled image `entry.png` byte for byte into the
output directory and then reads the copy back to check it matches. If the
bytes differ, the program fails. Every run therefore produces identical
output.

## Files

- `main.ts` — the program (the entrypoint). It copies and verifies the image.
- `entry.png` — the picture: the front page itself.
