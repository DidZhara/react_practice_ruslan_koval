export const UserFilter = ({ users, selectedUserId, onSelectUser }) => (
  <p className="panel-tabs has-text-weight-bold">
    <a
      data-cy="FilterAllUsers"
      href="#/"
      className={selectedUserId === null ? 'is-active' : ''}
      onClick={event => {
        event.preventDefault();
        onSelectUser(null);
      }}
    >
      All
    </a>
    {users.map(({ id, name }) => (
      <a
        key={id}
        data-cy="FilterUser"
        href="#/"
        className={selectedUserId === id ? 'is-active' : ''}
        onClick={event => {
          event.preventDefault();
          onSelectUser(id);
        }}
      >
        {name}
      </a>
    ))}
  </p>
);
