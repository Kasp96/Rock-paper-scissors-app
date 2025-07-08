export const initialState = {
	isGameStarted: true,
	selectedIndex: null,
	score: Number(localStorage.getItem('score')) || 0,
	areRulesShown: false,
	housePick: null,
	hasHousePicked: false,
	hasScoreBeenUpdated: false,
	resultInfo: '',
	winner: '',
};

export function reducer(state, action) {
	switch (action.type) {
		case 'START_GAME':
			return {
				...state,
				isGameStarted: false,
				selectedIndex: action.payload.index,
				housePick: action.payload.housePick,
				hasHousePicked: false,
				hasScoreBeenUpdated: false,
				resultInfo: '',
				winner: '',
			};
		case 'SHOW_RESULT':
			localStorage.setItem('score', action.payload.score);
			return {
				...state,
				resultInfo: action.payload.resultInfo,
				score: action.payload.score,
				winner: action.payload.winner,
				hasScoreBeenUpdated: true,
			};
		case 'SET_HAS_HOUSE_PICKED':
			return { ...state, hasHousePicked: true };
		case 'TOGGLE_RULES':
			return { ...state, areRulesShown: !state.areRulesShown };
		case 'RESET':
			return { ...initialState, score: state.score };
		default:
			return state;
	}
}
