Vue.component('product-review', {
    template: `
    <input v-model="name" >
    `,
    data() {
        return{
            name: null
        }
    }
})

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template: `
    <div class="product">

            <div class="product-image">
                <a :href="href"><img :src="image"></a>
            </div>
            
            <div class="product-info">
                <h1><p v-if="OnSale" style="color: aqua;">{{ title }} ARE ON SALE!!</p></h1>
                <h1>{{ title }}</h1>
                <p>{{description}}</p>
                <p v-if="inStock">In Stock:{{inventory}}</p>
                <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
                <p>Shipping: {{shipping}}</p>

                <h3>Details:</h3>
                <ul>
                    <li v-for="detail in details"> {{detail}}</li>
                </ul>
                <h3>SIZES:</h3>
                <ul>
                    <li v-for="size in sizes"> {{size}}</li>
                </ul>

                
                <h3>Variants:</h3>

                <div v-for="(variant, index) in variants" 
                :key="variant.variantId"
                class="color-box"
                :style="{backgroundColor: variant.variantColor}"
                @mouseover="updateProduct(index)">
                </div>

                <button @click="addToCart" 
                :disabled="!inStock"
                :class="{ disabledButton: !inStock}">Add to Cart</button>
                <button @click="removeFromCart()"
                :disabled="!inStock"
                :class="{ disabledButton: !inStock}">Remove from Cart</button>

                <a :href="href">Wiecej takich rzeczy D:</a>
            </div>
            <product-review></product-review>
        </div>
        `,
        data() 
        {
            return{
                brand: 'Vue Mastery',
                product: 'Socks',
                description: 'A pair of warm, fuzzy socks',
                selectedVariant: 0,
                href: 'https://www.youtube.com/',
                inventory: 15,
                OnSale: true,
                details: ["80% Lina", "10% Mayuri","10% Vue"],
                variants: [
                    {
                        variantId: 2334,
                        variantColor: "green",
                        variantImage: "./assets/green-socks.jpg",
                        variantQuantity: 10,
                    },
                    {
                        variantId: 2235,
                        variantColor: "blue",
                        variantImage: "./assets/blue-socks.jpg",
                        variantQuantity: 0,
                    }
                ],
                sizes: ["S", "L", "XXXXL"],
                }
        },
            methods:{
                addToCart()
                {
                    this.$emit('add-to-cart' ,this.variants[this.selectedVariant].variantId);
                },
                removeFromCart()
                {
                    this.$emit('remove-from-cart' ,this.variants[this.selectedVariant].variantId);
                },
                updateProduct(index)
                {
                    this.selectedVariant = index
                    console.log(index);
                }
            },
            computed: {
                title() {
                    return this.brand + " " + this.product;
                },
                image()
                {
                    return this.variants[this.selectedVariant].variantImage;
                },
                inStock()
                {
                    return this.variants[this.selectedVariant].variantQuantity;
                },
                shipping()
                {
                    if(this.premium)
                    {
                        return "free";
                    }
                    return 2.99;
                }
            }
        
})


var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id)
        {
            this.cart.push(id);
        },
         removeItem(id) {
          for(var i = this.cart.length - 1; i >= 0; i--) {
            if (this.cart[i] === id) {
               this.cart.splice(i, 1);
            }
          }
        }
      }
  })