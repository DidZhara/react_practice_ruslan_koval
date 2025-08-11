export const ResetButton = ({ onReset }) => (
  <div className="panel-block">
    <a
      data-cy="ResetAllButton"
      href="#/"
      className="button is-link is-outlined is-fullwidth"
      onClick={event => {
        event.preventDefault();
        onReset();
      }}
    >
      Reset all filters
    </a>
  </div>
);
