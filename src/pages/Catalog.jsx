import React, {
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import Helmet from "../components/Helmet";
import ProductCard from "../components/ProductCard";
import CheckBox from "../components/CheckBox";
import { AppContext } from "../context/AppProvider";

import categories from "../assets/test-data/categories";
import colors from "../assets/test-data/product-colors";
import productSize from "../assets/test-data/product-size";
import noResult from "../assets/images/post/no-result.png";
import Pagination from "../components/Pagination";

const Catalog = () => {
  const initFilter = {
    category: [],
    color: [],
    size: [],
  };

  const { allProducts, categoryName } = useContext(AppContext);

  const [filter, setFilter] = useState(initFilter);
  const [products, setProducts] = useState(allProducts);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const [productsPerPage, setProductPerPage] = useState(12);

  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const paginate = (pageNum) => setCurrentPage(pageNum);

  const nextPage = () => setCurrentPage(currentPage + 1);

  const prevPage = () => setCurrentPage(currentPage - 1);

  const inputSearchRef = useRef(null);

  //search product by name
  const searchItem = () => {
    const list = allProducts.filter((product) => {
      return product.title.toLowerCase().includes(inputSearchRef.current.value);
    });

    setProducts(list);
  };

  // filter product by category, color, size
  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.category],
          });
          break;
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.color] });
          break;
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.size] });
          break;
        default:
          break;
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (p) => p !== item.category
          );
          setFilter({ ...filter, category: newCategory });
          break;
        case "COLOR":
          const newColor = filter.color.filter((p) => p !== item.color);
          setFilter({ ...filter, color: newColor });
          break;
        case "SIZE":
          const newSize = filter.size.filter((p) => p !== item.size);
          setFilter({ ...filter, size: newSize });
          break;

        default:
          break;
      }
    }
  };

  const clearFilter = () => setFilter(initFilter);

  const updateProducts = useCallback(() => {
    let list = allProducts;

    if (filter.category.length > 0) {
      list = list.filter((p) => {
        return filter.category.includes(p.category);
      });
    }
    if (filter.color.length > 0) {
      list = list.filter((p) => {
        const check = p.colors.find((e) => filter.color.includes(e));
        return check !== undefined;
      });
    }
    if (filter.size.length > 0) {
      list = list.filter((p) => {
        const check = p.size.find((e) => filter.size.includes(e));
        return check !== undefined;
      });
    }

    setProducts(list);
  }, [filter, allProducts]);

  useEffect(() => {
    updateProducts();

    setCurrentPage(1);
  }, [updateProducts]);

  useEffect(() => {
    if (categoryName) {
      const list = allProducts.filter((p) => {
        return p.category === categoryName;
      });

      setProducts(list);
    }
  }, [categoryName, allProducts]);

  return (
    <Helmet title="Catalog">
      <div className="catalog">
        <div className="catalog-header">
          <h2 className="catalog__title">Products</h2>
        </div>
        <div className="catalog-container container">
          <div className="search-box">
            <div className="search">
              <input
                type="text"
                name="search"
                placeholder="Search"
                ref={inputSearchRef}
              />
              <button className="btn-search" onClick={searchItem}>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="catalog-filter col-lg-2">
              <div className="catalog-filter__wrapper">
                <h3 className="catalog-filter__title">Category</h3>
                <div className="catalog-filter__content">
                  {categories.map((item, index) => (
                    <CheckBox
                      key={index}
                      label={item.display}
                      onChange={(input) =>
                        filterSelect("CATEGORY", input.checked, item)
                      }
                      checked={filter.category.includes(item.category)}
                    />
                  ))}
                </div>
              </div>
              <div className="catalog-filter__wrapper">
                <h3 className="catalog-filter__title">Colors</h3>
                <div className="catalog-filter__content">
                  {colors.map((item, index) => (
                    <CheckBox
                      key={index}
                      label={item.display}
                      onChange={(input) =>
                        filterSelect("COLOR", input.checked, item)
                      }
                      checked={filter.color.includes(item.color)}
                    />
                  ))}
                </div>
              </div>
              <div className="catalog-filter__wrapper">
                <h3 className="catalog-filter__title">Size</h3>
                <div className="catalog-filter__content">
                  {productSize.map((item, index) => (
                    <CheckBox
                      key={index}
                      label={item.display}
                      onChange={(input) =>
                        filterSelect("SIZE", input.checked, item)
                      }
                      checked={filter.size.includes(item.size)}
                    />
                  ))}
                </div>
              </div>

              <div className="catalog-filter__wrapper">
                <button className="cb-btn" onClick={clearFilter}>
                  Clear Filter
                </button>
              </div>
            </div>

            {/* Render product */}
            <div className="catalog-content col-lg-10">
              <div className="container-fluid">
                <div className="row">
                  {products.length > 0 ? (
                    products
                      .slice(indexOfFirstProduct, indexOfLastProduct)
                      .map((item, index) => (
                        <ProductCard key={index} product={item} />
                      ))
                  ) : (
                    <div className="no-result">
                      <img src={noResult} alt="" />
                      <p className="text">No result is found</p>
                      <p className="text">Try using more generic keywords</p>
                    </div>
                  )}
                </div>
              </div>
              {products.length > 0 && (
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  nextPage={nextPage}
                  prevPage={prevPage}
                  currentPage={currentPage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
