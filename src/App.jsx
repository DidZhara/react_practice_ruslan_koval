/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';
import { ProductTable } from './components/ProductTable';
import { UserFilter } from './components/UserFilter';
import { ResetButton } from './components/ResetButton';
import { CategoryFilter } from './components/CategoryFilter';

// const products = productsFromServer.map((product) => {
//   const category = null; // find by product.categoryId
//   const user = null; // find by category.ownerId

//   return null;
// });

export const App = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = id => {
    setSelectedCategories(
      prev =>
        prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id],
      // eslint-disable-next-line function-paren-newline
    );
  };

  const clearCategories = () => setSelectedCategories([]);

  const products = productsFromServer.map(product => {
    const category = categoriesFromServer.find(
      c => c.id === product.categoryId,
    );
    const user = usersFromServer.find(u => u.id === category.ownerId);

    return { ...product, category, user };
  });

  const visibleProducts = products.filter(({ user, name, category }) => {
    const matchesUser = selectedUserId === null || user.id === selectedUserId;
    const matchesSearch = name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(category.id);

    return matchesSearch && matchesUser && matchesCategory;
  });

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <nav className="panel">
            <p className="panel-heading">Filters</p>

            <UserFilter
              users={usersFromServer}
              selectedUserId={selectedUserId}
              onSelectUser={setSelectedUserId}
            />

            <div className="panel-block">
              <p className="control has-icons-left has-icons-right">
                <input
                  data-cy="SearchField"
                  type="text"
                  className="input"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={event => setSearchQuery(event.target.value)}
                />

                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true" />
                </span>

                {searchQuery && (
                  <span className="icon is-right">
                    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                    <button
                      data-cy="ClearButton"
                      type="button"
                      className="delete"
                      onClick={() => setSearchQuery('')}
                    />
                  </span>
                )}
              </p>
            </div>

            <CategoryFilter
              categories={categoriesFromServer}
              selectedCategories={selectedCategories}
              onTogleCategory={toggleCategory}
              onClearCategories={clearCategories}
            />

            <ResetButton
              onReset={() => {
                setSelectedUserId(null);
                setSearchQuery('');
                setSelectedCategories([]);
              }}
            />
          </nav>
        </div>

        <ProductTable products={visibleProducts} />
      </div>
    </div>
  );
};
