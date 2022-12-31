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
import productSize from "../assets/test-data/product-size";
import noResult from "../assets/images/post/no-result.png";
import Pagination from "../components/Pagination";
import subCategories from "../assets/test-data/sub-categories";
import UploadSearch from "../components/UploadSearch";

const Catalog = () => {
  const initFilter = {
    category: [],
    subCategory: [],
    size: [],
  };

  const { allProducts, categoryName } = useContext(AppContext);

  const [filter, setFilter] = useState(initFilter);
  const [products, setProducts] = useState(allProducts);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryLabel, setCategoryLabel] = useState(1);
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
      return product.name.toLowerCase().includes(inputSearchRef.current.value);
    });

    setProducts(list);
  };

  // filter product by category, subCategory, size
  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.category],
          });
          break;
        case "SUBCATEGORY":
          setFilter({
            ...filter,
            subCategory: [...filter.subCategory, item.subCategory],
          });
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
        case "SUBCATEGORY":
          const newSubCategory = filter.subCategory.filter(
            (p) => p !== item.subCategory
          );
          setFilter({ ...filter, subCategory: newSubCategory });
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
        return filter.category.includes(p.mainCategory);
      });
    }
    if (filter.subCategory.length > 0) {
      list = list.filter((p) => {
        return filter.subCategory.includes(p.subCategory);
      });
    }
    if (filter.size.length > 0) {
      list = list.filter((p) => {
        const check = p.sizes.find((e) => filter.size.includes(e));
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
    if (categoryLabel === "No Label") {
      setProducts(allProducts);
      return;
    }

    let newLabel = "";

    switch (categoryLabel) {
      case "Quan":
        newLabel = "Trousers";
        break;
      case "Giay":
        newLabel = "Shoes";
        break;
      case "Ao":
        newLabel = "Shirts";
        break;
      case "Tui":
        newLabel = "Bags";
        break;
      default:
        break;
    }

    if (newLabel) {
      const list = allProducts.filter((p) => {
        return p.subCategory === newLabel;
      });

      setProducts(list);
    }
  }, [categoryLabel, allProducts]);

  useEffect(() => {
    if (categoryName) {
      const list = allProducts.filter((p) => {
        return p.mainCategory === categoryName;
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") searchItem();
                }}
                ref={inputSearchRef}
              />
              <button className="btn-search" onClick={searchItem}>
                <i className="fas fa-search"></i>
              </button>
            </div>
            <UploadSearch setCategoryLabel={setCategoryLabel} />
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
                <h3 className="catalog-filter__title">Type</h3>
                <div className="catalog-filter__content">
                  {subCategories.map((item, index) => (
                    <CheckBox
                      key={index}
                      label={item.display}
                      onChange={(input) =>
                        filterSelect("SUBCATEGORY", input.checked, item)
                      }
                      checked={filter.subCategory.includes(item.subCategory)}
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
