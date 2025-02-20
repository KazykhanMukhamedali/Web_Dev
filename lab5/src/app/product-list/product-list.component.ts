import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, products} from '../products';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
    products: Product[] = products;
    filteredProducts: Product[] = [];
    searchInput: string = '';
    categoryIdFromRoute: number | null = null;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            const categoryIdFromRoute = params.get('categoryId');

            if (categoryIdFromRoute) {
                this.categoryIdFromRoute = Number(categoryIdFromRoute);
                this.filterProductsByCategory();
            } else {
                this.products = products;
            }
        });
    }


    filterProductsByCategory() {
        if (this.categoryIdFromRoute) {
            this.filteredProducts = this.products.filter(product => product.categoryId === this.categoryIdFromRoute);
        } else {
            this.filteredProducts = [...this.products];
        }
        this.applySearchFilter();
    }

    applySearchFilter() {
        const searchTerm = this.searchInput.toLowerCase();
        this.filteredProducts = this.filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
    }

    onSearchChange() {
        this.applySearchFilter();
    }

    share(productName: string, productLink: string) {
        const shareMessage = `Check out this product: ${productName} - ${productLink}`;
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
        window.location.href = whatsappLink;
    }

    sharetg(productName: string, productLink: string) {
        const shareMessage = `Check out this product: ${productName} - ${productLink}`;
        const whatsappLink = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`;
        window.location.href = whatsappLink;
    }

    nextImage(product: Product) {
        if (product.img.length > 1) {
            product.currentImageIndex = (product.currentImageIndex + 1) % product.img.length;
        }
    }

    prevImage(product: Product) {
        if (product.img.length > 1) {
            product.currentImageIndex = (product.currentImageIndex - 1 + product.img.length) % product.img.length;
        }
    }

    like(product: Product) {
        product.likes++;
    }

    onNotify() {
        window.alert('You will be notified when the product goes on sale');
    }


    delete(product: Product) {
        const index = this.products.findIndex(p => p.id === product.id);

        if (index !== -1) {
            this.products.splice(index, 1);
            this.filterProductsByCategory();
            this.applySearchFilter();

            window.alert('Product has been deleted');
        } else {
            window.alert('Product not found');
        }
    }
}
