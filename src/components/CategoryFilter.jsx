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
      className={`button mr-6 ${selectedCategories.length === 0 ? 'is-outlined is-success' : 'is-succes'}`}
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
        className={`button mr-6 ${selectedCategories.length === 0 ? 'is-success is-outlined' : 'is-success'}`}
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
