
import type { Challenge, Curse, MandatoryChallenge } from '$lib/challenge';

export const rules: string[] = 
["15 coins per 0.1 miles on bart","20 coins per 0.1 miles on muni metro","25 coins per 0.1 miles on bus","30 coins per 0.1 miles on foot","All teams start at Embarcadero BART Station.","Game starts at 10:30am and ends at 3:30pm.","You start the game by randomly picking three challenges. When you complete a challenge, randomize for a new challenge, using <a href=\"https://plane-latency.vercel.app/challenges\">link</a>.","For every challenge you must take a photo/video as proof that you completed the challenge. Afterwards, send the photo and challenge name to your opponents in the relevant Discord channel.","If you would like another challenge option, you can veto a challenge, whereby you must stay in the same place for 15 minutes and you cannot complete any challenges.","If you've completed or vetoed a challenge, you can't do it again.","At any point you are allowed to walk away from your current station/bus stop as long as you walk back to it for no cost. This will be very useful for most challenges.","For challenges where the reward is a multiplier, before starting the challenge, you must wager any number of your coins. If you succeed, those coins are multiplied by the multiplier. If you fail, you lose all the coins you wagered and you may no longer re-attempt the challenge. If you succeed, you also can't redo the challenge. There's no veto penalty for failing these challenges.","If you are the first team to enter a district, you get a welcome bonus of 300 coins. Make sure to send a message so that people know you have claimed it in the corresponding \"district-#\" channel on discord. No welcome bonus for district 3 or 6.","At any time, you may take any amount of your coins and \"invest\" them in the district you are currently in, by writing the amount you invest in the corresponding \"district-#\" channel on discord. Whichever team has the most coins invested in a given district controls that district.","Winning team is the team that controls the most districts by the end of the game. District map here: <a href=\"https://sfgov.maps.arcgis.com/apps/webappviewer/index.html?id=57159538a9a3422a9d22ef75d66565b6\">link</a>"]
export const challenges: Challenge[] = 
[{"title":"spiciest food","description":"Go to a restaurant and ask for the spiciest thing on the menu. You must take a photo of the item and send it to your opponents. You must finish the entire food before proceeding. It must be described by the restaurant as spicy/hot","points":{"tag":"number","amount":300}},{"title":"break any law","description":"Break a law. The law can be from any level of jurisdiction and does not have to be a law in California.","points":{"tag":"number","amount":100}},{"title":"take a picture of an official san francisco landmark","description":"You must be within 100 feet of the landmark when the photo is taken. Find landmarks at <a href=\"https://en.wikipedia.org/wiki/List_of_San_Francisco_Designated_Landmarks\">link</a>","points":{"tag":"number","amount":200}},{"title":"find any coin on the ground","description":"The coin does not have to be American. It must be a metal coin and valid currency in somewhere (not necessarily a country currency)","points":{"tag":"number","amount":150}},{"title":"houseshopping","description":"Estimate the value of a house at your current location. You must then check on Zillow for the value of the house. Your guess must be within 25%. If incorrect, you must veto.","points":{"tag":"number","amount":500}},{"title":"do 50 jumping jacks","description":"Do 50 jumping jacks. You must record the whole thing. Only one person may perform the jumping jacks at a time but gyou can cumulative add the team member's jumping jacks to get to 50.","points":{"tag":"number","amount":100}},{"title":"find a fancy car","description":"Take a picture of car that has a price of $100,000 or more","points":{"tag":"number","amount":300}},{"title":"touch stranger's dog","description":"Touch a stranger's dog. You must get permission.","points":{"tag":"number","amount":150}},{"title":"critics","description":"Record a 5-minute video criticizing the nearest building to you. You must continuously criticize the building for 5 minutes straight. You may switch who is speaking, but it must be one uncut video of at least 5 minutes long.","points":{"tag":"number","amount":200}},{"title":"advertise arc","description":"You must make a sign with the arc logo and adhere it to some spot at least 3 feet above the ground. It must stick without any human body part touching it. The arc logo can be makeshift but it must still be recognizably arc.","points":{"tag":"number","amount":300}},{"title":"coo-l pigeon","description":"Get close enough to a pigeon to take a picture with both the pigeon and your feet in it. You must have both feet of one person in said photo.","points":{"tag":"number","amount":300}},{"title":"proud arc user","description":"Randomly pick 30 seconds of audio from a video on the browser company's youtube channel. Memorize it and repeat it on camera. First, sort the videos of newest to oldest and randomize a number to pick which video. Then randomize a number to pick when to start your video. If at any point you do not have at least 30 seconds, rerandomize.","points":{"tag":"number","amount":500}},{"title":"nearest muni & bart","description":"Take picture of the nearest BART & MUNI station. There must be a BART sign with the station name in one picture and a MUNI sign with the station name in another. You must also send the address of the point you started from so one can verify the nearest MUNI & BART station.","points":{"tag":"number","amount":300}},{"title":"run a half-mile","description":"You must return to where you started at the end of the half-mile.","points":{"tag":"number","amount":200}},{"title":"find a foreign flag","description":"Find a foreign flag. You must be able to identify what country flag it is.","points":{"tag":"number","amount":100}},{"title":"green in green","description":"Go to a place colored green on google maps and take a picture with something green in that park.","points":{"tag":"number","amount":100}},{"title":"give me a sign","description":"Photograph a street sign with a street name that contains a number (word or digits)","points":{"tag":"number","amount":100}},{"title":"climb a tree","description":"Climb a tree. You must record yourself touching only the tree and not the ground or roots of the tree for 5 seconds.","points":{"tag":"number","amount":100}},{"title":"visit a museum","description":"Go into a museum and stay there for at least 5 minutes. Share a fact that you learned on camera.","points":{"tag":"number","amount":300}},{"title":"use a fancy restroom","description":"Go into a bathroom of a hotel that offers a room over $500","points":{"tag":"number","amount":500}},{"title":"go exactly half a mile","description":"First, set a starting point. Then from there, spin around and point in a random direction. You must then go to a point at least a half-mile in that direction. Unlike other challenges, you don't have to return to where you started.","points":{"tag":"number","amount":200}},{"title":"megalaphobia","description":"Get at least 200 feet from any building. Take a picture of said spot to verify.","points":{"tag":"number","amount":200}},{"title":"get on a train immediately","description":"You have 5 minutes AFTER DRAWING THIS CARD to get on a BART or MUNI train. Start a timer now. You must take it at least one stop. You must also be able to afford it. After 5 minutes have passed, discard this card with no veto penalty.","points":{"tag":"number","amount":400}},{"title":"i see u","description":"Photograph your partner from at least 500 feet away. They must be in the photo.","points":{"tag":"number","amount":200}},{"title":"mcdonald's","description":"Take a photo of yourself outside a McDonald's","points":{"tag":"number","amount":100}},{"title":"hi high","description":"High five at a point at least 250 feet above sea level.","points":{"tag":"number","amount":300}},{"title":"friends","description":"Find 3 different species of living, non-bug, non-bird, non-human animals. You must clearly capture them on camera.","points":{"tag":"number","amount":300}},{"title":"from downtown","description":"Score a three-pointer on a basketball hoop. You need not use a ball. If there is not a three-point line, you must make it from farther than the circle surrounding the free-throw.","points":{"tag":"number","amount":200}},{"title":"budget baseball","description":"Throw any object at your partner. Your partner must hit that object with another object midair, simulating baseball. You must stand at least 20 ft apart.","points":{"tag":"number","amount":200}},{"title":"break copyright law","description":"Find at least 2 places where we'll have to mute the audio for copyright reasons. Each place must be at least 100 feet apart from any other selected place. Public transport announcements don't count. Any audio volume that can be picked up on camera counts. You may not initiate the playing of any sound on any device.","points":{"tag":"number","amount":200}},{"title":"go to something interesting","description":"Without researching on YouTube, go to something that has a YouTube video about it with at least 100,000 views. The YouTube video's title must either include the thing's name, or clearly be referencing it as its main focus. If you cannot find a video correlating to your location you may either retry or veto the challenge.","points":{"tag":"number","amount":100}},{"title":"see a great wave","description":"View any wave and remark upon how great it is. It may be a real wave or a depiction, though the depiction may not come from anything traveling with you or a digital device.","points":{"tag":"number","amount":200}},{"title":"stalk a bird","description":"You must have a single bird on camera continuously for five minutes. If you ever lose sight of the bird or have to cut, you have to start over. The bird must be alive, and may not be caged.","points":{"tag":"number","amount":500}},{"title":"cut a fruit in half using only your hands","description":"Acquire an fruit. Using only your hands, fully cut the fruit in half.","points":{"tag":"number","amount":150}},{"title":"find an american flag","description":"Find a real American flag, or a depiction of an American flag, in the wild. The flag cannot be created by you in any way.","points":{"tag":"number","amount":100}},{"title":"see something old","description":"You have 5 minutes after drawing this card to find the oldest thing you can. You may declare the challenge complete earlier than 5 minutes if you choose. You may not use technology until after you have decided on the item.","points":{"tag":"special","description":"# of years = # of coins"}},{"title":"communicate by morse","description":"Stand at least 20 feet away from your partner. Using a random word generator, generate a random 8 letter word. Communicate the word to your partner using morse code. If you fail, you may re-attempt with a new word. You may have a translator on you.","points":{"tag":"number","amount":200}},{"title":"spell any player's name in graffiti","description":"Find all of the letters in any player's first name in already-written graffiti. For example, for Adam, find A, D, and M","points":{"tag":"number","amount":150}},{"title":"last second switch","description":"Go to an undergraduate college campus (not UCSF) and record one team member saying they are changing where they are attending to the college they are currently on","points":{"tag":"number","amount":750}},{"title":"watch a sports event","description":"You must find a TV playing something that is arguably a sports game. You may not use your phone to watch the game.","points":{"tag":"number","amount":150}},{"title":"lie","description":"Complete any other card but your proof must be invalid in some way. It may not be arguably valid. If the other teams sus you out, you get no coins. If no one susses you out after 10 minutes, you get double the coins of the other card.","points":{"tag":"special","description":"Double the coins of the other card"}},{"title":"acquire arc testimonial","description":"Record a stranger using and reviewing Arc.","points":{"tag":"number","amount":300}},{"title":"noncolonial poetry","description":"Memorize the first 4 lines of a poem in a different language and recite them on camera.","points":{"tag":"number","amount":200}},{"title":"fountain transportation","description":"Get some water from on any fountain (water fountain included) and put it in a different fountain.","points":{"tag":"number","amount":300}},{"title":"frolick","description":"You must remark about how good of a time you are having for 5 min.","points":{"tag":"number","amount":200}},{"title":"mimicry","description":"Find any statue and take a picture of you imitating it.","points":{"tag":"number","amount":100}},{"title":"math","description":"One team member must generate a random number between 1 and 100. You have 10 seconds to find the square of that number. If you fail, veto the card with no time penalty.","points":{"tag":"number","amount":250}},{"title":"run","description":"You have 5 minutes to run 0.5 miles: 0.25 miles in one direction and then 0.25 back to where you started. If you fail, you have to pay for the distance you ran.","points":{"tag":"number","amount":200}},{"title":"metro","description":"Sing/ad lib BBL Drizzy on the train, and take a video. You only have to recognizeably mouth the words.","points":{"tag":"number","amount":150}},{"title":"capitalism","description":"Find 2 bench ads.","points":{"tag":"number","amount":100}},{"title":"communism","description":"Find communist imagery: communist country flags, hammer/sickle, famous communist/marxist leaders (Mao, Marx, Stalin, etc.)","points":{"tag":"number","amount":200}},{"title":"actual wallet pain","description":"Buy something overpriced. It must be more expensive than what the exact same item costs on Amazon. You must be able to find the exact same item on Amazon.","points":{"tag":"number","amount":300}},{"title":"this conversation is giving ohio","description":"In a conversation with a stranger use three words (separated by spaces if transcribed) from this list of brainrot terms: skibidi, Ohio, rizz/rizzler, mewing, mogging, ops, gyatt.","points":{"tag":"number","amount":150}},{"title":"arc scavenger hunt","description":"Open up youtube on incognito mode (no past history) and go to the explore page. Without using the search function you must reach a video mainly about the Arc Browser.","points":{"tag":"number","amount":500}}]
export const mandatoryChallenges: MandatoryChallenge[] =
[{"title":"not real challenge","description":"not real challenge, ignore","points":{"tag":"special","description":"0x multiplier"}},{"title":"lincoln park steps","description":"Go to the lincoln park steps. One team member stands with blind fold at bottom. other team member picks a random number between 25 and 50 and walks up that many stairs. neither team member may speak, but you may walk loudly. the blind-folded person must guess exactly how many steps their teammate climbed.","points":{"tag":"special","description":"2.5x multiplier"}},{"title":"overlook palooza","description":"Go to 2 places with overlook in the title within 5 minutes. You don't have to pay for walking.","points":{"tag":"special","description":"3x multiplier"}},{"title":"bikes in the city","description":"At Harry Bridges Plaza (<a href=\"https://maps.app.goo.gl/AWwjFPY1PDCBgQgs9\">link</a>), there is a rentable bike station. Do not look at the bikes before you start the challenge. Take a 3 second look at all of the bikes and then look away. Guess the amount of bikes that are there. If you are more than 10% off, the challenge is failed.","points":{"tag":"special","description":"3x multiplier"}},{"title":"skipping soiree","description":"Go to Ocean Beach and skip a rock on the Pacific Ocean (at least one skip) with 10 tries.","points":{"tag":"special","description":"3.5x multiplier"}},{"title":"small one core","description":"At Raymond Kimbell playground,  (<a href=\"https://maps.app.goo.gl/ehG4WpKVjTRz8syF8\">link</a>), head to the swings. You have 60 seconds to swing 38 times. Going forward counts as 1 and going back counts as 1 too. Each swing must end at least 1 meter above the ground. Start the timer once you have a consistent swing.","points":{"tag":"special","description":"2.5x multiplier"}},{"title":"speedy salesforce","description":"Go to Salesforce Park (<a href=\"https://maps.app.goo.gl/cCag8e37ozgJ337e7\">link</a>). You must speedwalk/racewalk the entire loop in less than 7 min. Speedwalking/racewalking means you must have one foot touching the ground at all times.","points":{"tag":"special","description":"2x multiplier"}},{"title":"fountain transferase","description":"Go to Rideout fountain, and find the two smaller fountains in that area (making 3 fountains in total). One teammate has 4 minutes to transfer water from each fountain to the other fountains (6 transfers in total). More than 4 cubic centimeters of water must be transferred each time. The other teammate must film.","points":{"tag":"special","description":"4x multiplier"}},{"title":"pride flag speedrun","description":"Stand outside The Castro Theatre (<a href=\"https://maps.app.goo.gl/qTaHgUUpRE2i8rbt5\">link</a>). Start a five minute timer. You get 25 coins for every representation of a pride flag you photograph before your timer runs out. Official banners on light posts don't count.","points":{"tag":"special","description":"25 * the number of flags"}},{"title":"taco test","description":"Get a taco in the Mission where one team member picks the protein and the other must do a blind taste test and correctly guess the protein.","points":{"tag":"special","description":"2x multiplier"}},{"title":"pet store","description":"Go to Expert Pet (<a href=\"https://maps.app.goo.gl/vPSUay8osNFYnAfi9\">link</a>). From this list of animals, generate a random number and try to draw it. Your partner will try to guess. 1) Lion 2) Dog 3) Horse 4) Giraffe 5) Narwhal 6) Dolphin 7) Elephant 8) Eagle 9) Frog 10) Bear.","points":{"tag":"special","description":"3x multiplier"}},{"title":"poem","description":"At Balboa Park BART Station, find the poem dispenser. Generate a maximum of 16 five minute poems. You succeed if you generate Bulian Jauer's or NR's poem at any point.","points":{"tag":"special","description":"3x multiplier"}}]
export const curses: Curse[] =
[{"title":"no phone :(","description":"You cannot use phone for 20 minutes. (applies just to target team)","cost":400},{"title":"compulsory bus tour","description":"Get on the nearest bus that comes to the nearest stop to you (you cannot check where it goes). (applies just to target team)","cost":300},{"title":"giving elementary school","description":"For 10 minutes, you cannot step on crack in sidewalk. If you fail, you must stand still for 10 minutes. (applies just to target team)","cost":100},{"title":"tragic loss of important symbol","description":"For 30 minutes you can't use the letter e. Anytime you do, you must stand still for 10 minutes. (applies just to target team)","cost":200},{"title":"no pubic transport","description":"For 15 min, you cannot take any form of public transportation. (applies just to target team)","cost":300},{"title":"sing dld theme","description":"Both of you must record yourself humming/singing/vocalizing or whatever the Don't Look Down theme for 5 minutes. (applies just to target team)","cost":300},{"title":"curse of orin the swim coach","description":"You can't talk to your teammate until you complete your next challenge (no texting either), starting two minutes from now. If you fail, you must stand in silence for 5 minutes and you can continuously fail. (applies just to target team)","cost":300},{"title":"alea iacta sunt","description":"While doing your next challenge, roll a dice (or use random number between 1 and 6). Multiply the number you get by 0.1 miles, and that is the radius you must stay in for the next 10 min. (applies just to target team)","cost":300},{"title":"on the lookout","description":"For the next 15 min, if the team who activated the curse takes a full body photo of you from less than 300 ft away, you cannot move for the next 10 min. (Obviously use your judgement here if you're in the middle of a crosswalk don't stop there) (applies to all teams except the team which purchased the curse)","cost":300}]
export const transports: { [key: string]: number } = {
	BART: 250,
	muni: 300,
	bus: 350,
	walk: 400,
};
