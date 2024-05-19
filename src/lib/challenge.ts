export type Challenge = {
	points: Points;
	title: string;
	description: string;
};

export type MandatoryChallenge = {
	title: string;
	description: string;
};

export type Curse = {
	title: string;
	description: string;
	cost: number;
};

export type Points =
	| {
			tag: 'number';
			amount: number;
	  }
	| {
			tag: 'special';
			description: string;
	  };
