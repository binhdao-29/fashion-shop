import React, { useState, useCallback, useEffect } from 'react';
import Helmet from '../components/Helmet';
import ProductCard from '../components/ProductCard';
import CheckBox from '../components/CheckBox';

import productData from '../assets/test-data/products';
import categories from '../assets/test-data/categories';
import colors from '../assets/test-data/product-colors';
import productSize from '../assets/test-data/product-size';

const Catalog = () => {

  const initFilter = {
    category: [],
    color: [],
    size: []
  }

  const productList = productData.getAllProducts();

  const [filter, setFilter] = useState(initFilter);
  const [products, setProducts] = useState(productList);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch(type) {
        case "CATEGORY":
          setFilter({...filter, category: [...filter.category, item.category]});
          break;
        case "COLOR":
          setFilter({...filter, color: [...filter.color, item.color]});
          break;
        case "SIZE":
          setFilter({...filter, size: [...filter.size, item.size]});
          break;
        default:
          break
      }
    } else {
      switch(type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(p => p !== item.category);
          setFilter({...filter, category: newCategory});
          break;
        case "COLOR":
          const newColor = filter.color.filter(p => p !== item.color);
          setFilter({...filter, color: newColor});
          break;
        case "SIZE":
          const newSize = filter.size.filter(p => p !== item.size);
          setFilter({...filter, size: newSize});
          break;

        default:
          break
      }
    }
  }

  const clearFilter = () =>  setFilter(initFilter);
  
  const updateProducts = useCallback(() => {
    let list = productList;

    if (filter.category.length > 0) {
      list = list.filter(p => {
        return filter.category.includes(p.category);
      })
    }
    if (filter.color.length > 0) {
      list = list.filter(p => {
        const check = p.colors.find(e => filter.color.includes(e));
        return check !== undefined;
      })
    }
    if (filter.size.length > 0) {
      list = list.filter(p => {
        const check = p.size.find(e => filter.size.includes(e));
        return check !== undefined;
      })
    }

    setProducts(list);

  }, [filter, productList]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts])

  return (
    <Helmet title="Catalog">
      <div className="catalog">
        <div className="catalog-header">
          <h2 className="catalog__title">Products</h2>
        </div>
        <div className="catalog-container container">
          <div className="row">
            <div className="catalog-filter col-lg-2">
              <div className="catalog-filter__wrapper">
                <h3 className="catalog-filter__title">Category</h3>
                <div className="catalog-filter__content">
                  {
                    categories.map((item, index) => (
                      <CheckBox key={index}
                        label={item.display}
                        onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                        checked={filter.category.includes(item.category)}
                      />
                    ))
                  }
                </div>
              </div>
              <div className="catalog-filter__wrapper">
                <h3 className="catalog-filter__title">Colors</h3>
                <div className="catalog-filter__content">
                  {
                    colors.map((item, index) => (
                      <CheckBox key={index}
                        label={item.display}
                        onChange={(input) => filterSelect("COLOR", input.checked, item)}
                        checked={filter.color.includes(item.color)}
                      />
                    ))
                  }
                </div>
              </div>
              <div className="catalog-filter__wrapper">
                <h3 className="catalog-filter__title">Size</h3>
                <div className="catalog-filter__content">
                  {
                    productSize.map((item, index) => (
                      <CheckBox key={index}
                        label={item.display}
                        onChange={(input) => filterSelect("SIZE", input.checked, item)}
                        checked={filter.size.includes(item.size)}
                      />
                    ))
                  }
                </div>
              </div>

              <div className="catalog-filter__wrapper">
                <button className="cb-btn" onClick={clearFilter}>Clear Filter</button>
              </div>
            </div>

            <div className="catalog-content col-lg-10">
              <div className="container-fluid">
                <div className="row">
                  {
                    products.map((item, index) => (
                      <ProductCard key={index} product={item} />
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  )
}

export default Catalog
