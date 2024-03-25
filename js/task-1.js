const categoriesList = document.querySelector("#categories");
const categoriesItem = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach(item => {
    showCategoryInfo(item);
});

function showCategoryInfo(category) {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryElementsCount = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElementsCount}`);
}