export function ProductTable({ products }) {
  const headerLabels = label => (
    <span className="is-flex is-flex-wrap-nowrap">
      {label}
      <a href="#/">
        <span className="icon">
          <i data-cy="SortIcon" className="fas fa-sort" />
        </span>
      </a>
    </span>
  );
return (
<div className="box table-container">
    <table className="table is-striped is-narrow is fullwidth">
      <thead>
        <tr>
          <th>{headerLabels("ID")}</th>
          <th>{headerLabels("Product")}</th>
          <th>{headerLabels("Category")}</th>
          <th>{headerLabels("User")}</th>
          </tr>
      </thead>
    </table>
  </div>
  )
}
