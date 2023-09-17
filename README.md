## Assessment - Selecting products or their variants in a list

The task is to handle user interactions when he/she check/uncheck the products or variants in the list.

After unzipping the project, run "npm install" to install the project dependencies and the run "npm start" to start the project.

### The credentials to login to the panel:

username: subify-admin

password: subify-password

### Tasks

You need to change some methods in AddProductsModal component.

The methods are "toggleProductCheck" and "toggleVariantCheck".

Also you need to change the conditions of "checked" props of checkboxes in lines 54 and 70.

With selecting each product or variant, you need to update the selectedProducts and selectedProductVariants states and update UI base on that.

Pay attention that if a product is selected, none of its variants should be exist in selectedProductVariants and vise versa meaning if some variants of a product are selected, the product should not be stored in selectedProducts anymore.

- If just one of the variants are selected, its product should be checked as well.
- Use selectedProductIds and selectedVariantIds to specify the condition of "checked" prop of each checkbox.

At the end when user click on add, he/she will see his selected products and variants in the browser console.
