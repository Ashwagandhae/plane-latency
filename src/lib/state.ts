import { type Writable, writable } from 'svelte/store';
import { challenges } from './data/challenge';
import { mandatoryChallenges } from './data/mandatoryChallenge';
import { curses } from './data/curse';

export const state: Writable<State | null> = writable(null);

export type State = {
	points: number;
	challenges: ChallengeState[];
	mandatoryChallenges: ChallengeState[];
};

export type ChallengeState = {
	complete: boolean;
};

state.subscribe((value) => {
	if (typeof window === 'undefined') return;
	if (value == null) return;
	localStorage.setItem('state', JSON.stringify(value));
});

export function initState(): State {
	return {
		points: 0,
		challenges: challenges.map(() => ({ complete: false })),
		mandatoryChallenges: mandatoryChallenges.map(() => ({ complete: false }))
	};
}

export function completeChallenge(index: number): void {
	state.update((value) => {
		if (value == null) return value;
		value.challenges[index].complete = true;
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
		const points = challenges[index].points;
		if (points.tag === 'number') {
			if (confirm('Also remove points?')) {
				value.points -= points.amount;
			}
		}
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
		if (!confirm(`This curse will cost ${curse.cost} pts. Are you sure?`)) return value;
		value.points -= curse.cost;
		return value;
	});
}
