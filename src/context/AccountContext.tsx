import { Dispatch, createContext, useReducer, useContext } from 'react';

type State = {
  email: string;
  password: string;
  isEmailValid: Boolean;
  isPasswordValid: Boolean;
};

type Action =
  | { type: 'SET_EMAIL'; email: string; isEmailValid: Boolean }
  | { type: 'SET_PASSWORD'; password: string; isPasswordValid: Boolean };

type AccountDispatch = Dispatch<Action>;

const AccountStateContext = createContext<State | null>(null);
const AccountDispatchContext = createContext<AccountDispatch | null>(null);

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.email,
        isEmailValid: action.isEmailValid,
      };

    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.password,
        isPasswordValid: action.isPasswordValid,
      };

    default:
      return state;
  }
}

export function AccountProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    email: '',
    password: '',
    isEmailValid: false,
    isPasswordValid: false,
  });

  return (
    <AccountStateContext.Provider value={state}>
      <AccountDispatchContext.Provider value={dispatch}>{children}</AccountDispatchContext.Provider>
    </AccountStateContext.Provider>
  );
}

export function useAccountState() {
  const state = useContext(AccountStateContext);
  if (!state) throw new Error('Cannot find AccountProvider');
  return state;
}

export function useAccountDispatch() {
  const dispatch = useContext(AccountDispatchContext);
  if (!dispatch) throw new Error('Cannot find AccountProvider');
  return dispatch;
}
