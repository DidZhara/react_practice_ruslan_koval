export const CategoryFilter = ({
  categories,
  selectedCategories,
  onClearCategories,
  onTogleCategory,
}) => (
  <div className="panel-block is-flex-wrap-wrap">
    <a
      href="#/"
      data-cy="AllCategories"
      className={`button mr-6 is-success ${selectedCategories.length === 0 ? 'is-outlined' : ''}`}
      onClick={event => {
        event.preventDefault();
        onClearCategories();
      }}
    >
      All
    </a>

    {categories.map(({ id, title }) => (
      <a
        data-cy="Category"
        className={`button mr-2 my-1 ${selectedCategories.includes(id) ? 'is-info' : ''}`}
        href="#/"
        onClick={event => {
          event.preventDefault();
          onTogleCategory(id);
        }}
      >
        {title}
      </a>
    ))}
  </div>
);
