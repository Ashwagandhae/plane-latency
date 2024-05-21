import { type Writable, writable } from 'svelte/store';
import { challenges, mandatoryChallenges, curses } from './data/out';

export const state: Writable<State | null> = writable(null);

export type ChallengeState = {
	complete: boolean;
	equipped: boolean;
};
export type MandatoryChallengeState = {
	complete: boolean;
};
export type State = {
	points: number;
	challenges: {
		complete: boolean;
		equipped: boolean;
	}[];
	mandatoryChallenges: {
		complete: boolean;
	}[];
};

state.subscribe((value) => {
	if (typeof window === 'undefined') return;
	if (value == null) return;
	localStorage.setItem('state', JSON.stringify(value));
});

export function initState(): State {
	return {
		points: 0,
		challenges: challenges.map(() => ({ complete: false, equipped: false })),
		mandatoryChallenges: mandatoryChallenges.map(() => ({ complete: false }))
	};
}

export function initFromStored(): State {
	const stored = localStorage.getItem('state');
	if (stored == null) {
		return initState();
	} else {
		let state: State;
		try {
			state = JSON.parse(stored);
		} catch (e) {
			console.error(e);
			return initState();
		}
		normalizeList(state.challenges, challenges, { complete: false, equipped: false });
		normalizeList(state.mandatoryChallenges, mandatoryChallenges, { complete: false });
		return state;
	}
}

function normalizeList<T, U>(stateList: T[], constList: U[], initEl: T): void {
	if (stateList.length !== constList.length) {
		// if list is longer than constList, truncate it
		stateList.splice(constList.length);
		// if list is shorter than constList, extend it
		for (let i = stateList.length; i < constList.length; i++) {
			stateList.push(structuredClone(initEl));
		}
	}
}

export function completeChallenge(index: number): void {
	state.update((value) => {
		if (value == null) return value;
		value.challenges[index].complete = true;
		value.challenges[index].equipped = false;
		const points = challenges[index].points;
		if (points.tag === 'number') {
			value.points += points.amount;
		}
		return value;
	});
}

export function uncompleteChallenge(index: number): void {
	state.update((value) => {
		if (value == null) return value;
		value.challenges[index].complete = false;
		value.challenges[index].equipped = false;
		const points = challenges[index].points;
		if (points.tag === 'number') {
			if (confirm('Also remove points?')) {
				value.points -= points.amount;
			}
		}
		return value;
	});
}

export function equipChallenge(index: number): void {
	state.update((value) => {
		if (value == null) return value;
		value.challenges[index].equipped = true;
		return value;
	});
}

export function unequipChallenge(index: number): void {
	state.update((value) => {
		if (value == null) return value;
		value.challenges[index].equipped = false;
		return value;
	});
}

export function completeMandatoryChallenge(index: number): void {
	state.update((value) => {
		if (value == null) return value;
		value.mandatoryChallenges[index].complete = true;
		return value;
	});
}

export function uncompleteMandatoryChallenge(index: number): void {
	state.update((value) => {
		if (value == null) return value;
		value.mandatoryChallenges[index].complete = false;
		return value;
	});
}

export function buyCurse(index: number): void {
	state.update((value) => {
		if (value == null) return value;
		const curse = curses[index];
		if (value.points < curse.cost) {
			alert('Not enough points!');
			return value;
		}
		if (!confirm(`This curse will cost ${curse.cost} c. Are you sure?`)) return value;
		value.points -= curse.cost;
		return value;
	});
}

export function payTransportCost(cost: number): void {
	state.update((value) => {
		if (value == null) return value;
		if (value.points < cost) {
			alert('Not enough points!');
			return value;
		}
		if (!confirm(`This transport will cost ${cost} c. Are you sure?`)) return value;
		value.points -= cost;
		return value;
	});
}
