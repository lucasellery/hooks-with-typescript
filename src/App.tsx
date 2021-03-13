import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
  useContext,
  useReducer,
  useImperativeHandle,
} from 'react';

interface IUser {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {

  const inputRef = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useState<[IUser]>();
  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users]);

  const greeting = useCallback(
    (user: IUser) => alert(`Hello ${names}`),
    []
  );

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const response = await fetch('http://api.github.com/users/lucasellery');
    const data = await response.json();

    setUsers(data);
  }

  function focusOnInput() {
    inputRef.current?.focus();
  }

  return (
    <div>
      {/* User name: {users?.name} */}
      <form action="">
        <input type="text" ref={inputRef}/>
      </form>
    </div>
  );
}

export default App;
