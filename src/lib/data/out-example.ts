import type { Challenge, Curse, MandatoryChallenge } from '$lib/challenge';

export const challenges: Challenge[] = [
	{
		title: 'spiciest food',
		description:
			'Go to a restaurant and ask for the spiciest thing on the menu. You must take a photo of the item and send it to your opponents. You must finish the entire food before proceeding. It must be described by the restaurant as spicy/hot',
		points: { tag: 'number', amount: 300 }
	}
];
export const mandatoryChallenges: MandatoryChallenge[] = [
	{
		title: 'eat cheese',
		description: 'eat cheeesesefefsfasflkds fjdslfdskfjdasfdslkf'
	}
];
export const curses: Curse[] = [
	{
		title: 'no phone',
		description: 'You cannot use your phone for 24 hours.',
		cost: 100
	}
];
export const transports: { [key: string]: number } = {
	walk: 400,
	BART: 300,
	muni: 300,
	bus: 250
};
