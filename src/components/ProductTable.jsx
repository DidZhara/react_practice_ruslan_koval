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

  if (products.length === 0) {
    return (
      <p data-cy="NoMatchingMessage">No products matching selected criteria</p>
    );
  }

  return (
    <div className="box table-container" data-cy="ProductTable">
      <table className="table is-striped is-narrow is fullwidth">
        <thead>
          <tr>
            <th>{headerLabels('ID')}</th>
            <th>{headerLabels('Product')}</th>
            <th>{headerLabels('Category')}</th>
            <th>{headerLabels('User')}</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} data-cy="Product">
              <td data-cy="ProductId">{product.id}</td>
              <td data-cy="ProductName">{product.name}</td>
              <td data-cy="ProductCategory">
                {product.category.icon} - {product.category.title}
              </td>
              <td
                data-cy="ProductUser"
                className={
                  product.user.sex === 'm' ? 'has-text-link' : 'has-text-danger'
                }
              >
                {product.user.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
