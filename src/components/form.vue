<template>
  <div class="container">
    <div class="grid p-fluid">
      <div class="col-12 md:col-6">
        <label for="productName">Product Name</label>
        <div class="p-inputgroup">
          <InputText
            id="productName"
            name="productName"
            placeholder="E: Hoodie"
          />
        </div>
      </div>

      <div class="col-24 md:col-6">
        <label for="Price">Price</label>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">$</span>
          <InputText name="price" id="price" placeholder="E: 10" />
          <span class="p-inputgroup-addon">.95</span>
        </div>
      </div>
      <div class="field col-24 md:col-6">
        <label for="yearpicker">Year Picker</label>
        <Calendar
          inputId="yearpicker"
          v-model="date10"
          view="year"
          dateFormat="yy"
        />
      </div>
    </div>
  </div>
  <div class="dropDowns">
    <div class="dropGroup">
      <label for="typeProduct">Type of Product</label>
      <Dropdown
        id="typeProduct"
        v-model="selectedType"
        :options="types"
        optionLabel="name"
        :editable="true"
        class="subDrop"
      />
    </div>
    <div class="dropGroup">
      <label for="collectionProduct">Collection</label>
      <Dropdown
        id="collectionProduct"
        v-model="selectedCollection"
        :options="collections"
        optionLabel="name"
        :editable="true"
        class="subDrop"
      />
    </div>
  </div>
  <div class="textAreaContainer">
    <label for="description">Description</label>
    <Textarea
      id="descriptionProduct"
      v-model="value2"
      :autoResize="true"
      rows="5"
      cols="30"
      placeholder="E: Perfect to go out"
    />
  </div>
  <div class="imageContainer">
    <div class="form-group file-area">
      <label for="images"
        >Images <span>Your images should be at least 400x300 wide</span></label
      >
      <input
        type="file"
        name="images"
        id="images"
        required="required"
        multiple="multiple"
        @change="readImage"
      />
      <div class="file-dummy">
        <div class="success">Great, your files are selected. Keep on.</div>
        <div class="default">Please select some files</div>
      </div>
    </div>
  </div>
  <div class="submitContainer">
    <button class="submit" @click="(e) => createNewProduct()">Submit</button>
  </div>
</template>
<style lang="scss">
.submitContainer {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  .submit {
    border: 2px solid black;
    background: transparent;
    border-radius: 15px;
    text-decoration: none;
    padding: 15px 35px;
    font-family: "Aovel bold";
    font-size: 1.5em;
    color: black;
  }
}

label {
  font-family: "Aovel bold";
  font-size: 1.5em;
  margin-bottom: 8px !important;
}

.container {
  display: flex;
  justify-content: center;
}
.dropDowns {
  display: flex;
  margin-top: -3.5%;
  width: 100%;
  justify-content: center;
  .dropGroup {
    display: flex;
    flex-direction: column;
    width: 27.9%;
    margin: 0px 10px;

    .subDrop {
      width: 100%;
    }
  }
}
.textAreaContainer {
  margin-top: 24px;
  margin-left: 21.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  textarea,
  label {
    width: 73%;
  }
}
.imageContainer {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  .file-area {
    width: 57%;
    position: relative;

    label {
      display: flex;
      justify-content: space-between;
    }

    input[type="file"] {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      cursor: pointer;
    }

    .file-dummy {
      width: 100%;
      padding: 30px;
      background: rgba(255, 255, 255, 0.2);
      border: 2px dashed rgba(8, 8, 8, 0.2);
      text-align: center;
      transition: background 0.3s ease-in-out;
      font-family: "aovel bold";
      font-size: 1.5em;

      .success {
        display: none;
      }
    }

    &:hover .file-dummy {
      background: rgba(255, 255, 255, 0.1);
    }

    input[type="file"]:focus + .file-dummy {
      outline: 2px solid rgba(255, 255, 255, 0.5);
      outline: -webkit-focus-ring-color auto 5px;
    }

    input[type="file"]:valid + .file-dummy {
      border-color: rgba(0, 238, 255, 0.4);
      background-color: rgba(0, 255, 234, 0.3);

      .success {
        display: inline-block;
      }
      .default {
        display: none;
      }
    }
  }
}
</style>
<script>
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products.js";

export default {
  created() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  },
  data() {
    return {
      producImage:"" ,
      productName: "",
      price: "",
      description: "",
      type: "",
      yearCollection: "",
      collection: "",
      reader: new FileReader(),
      imgURL: null,
      date10: null,

      invalidDates: null,
      responsiveOptions: [
        {
          breakpoint: "1400px",
          numMonths: 2,
        },
        {
          breakpoint: "1200px",
          numMonths: 1,
        },
      ],
      selectedType: null,
      selectedCollection: null,
      selectedCountry: null,
      selectedGroupedCity: null,
      selectedItem1: null,
      selectedItem2: null,
      loading: false,
      types: [
        { name: "Clothes", code: "C" },
        { name: "Bags", code: "B" },
        { name: "Masks", code: "M" },
        { name: "Accesories", code: "A" },
      ],
      collections: [
        { name: "Hanami", code: "H" },
        { name: "Imouto", code: "I" },
        { name: "Kaomoji Classics", code: "KC" },
        { name: "Anniversary", code: "A" },
        { name: "Emotional", code: "E" },
        { name: "BingeWatch", code: "BW" },
        { name: "Sakura Sayonara", code: "SS" },
      ],
      items: Array.from({ length: 100000 }, (_, i) => ({
        label: `Item #${i}`,
        value: i,
      })),
      lazyItems: Array.from({ length: 100000 }),
      value2: "",
    };
  },
  computed: {
    ...mapStores(useProductsStore),
  },
  methods: {
    createNewProduct() {
      let yearProduct = document.getElementById("yearpicker");
      const productName = document.getElementById("productName");
      const price = document.getElementById("price");
      let typeProduct = document.getElementsByClassName("p-dropdown-label");
      var arr = Array.from(typeProduct);
      let descripProduct = document.getElementById("descriptionProduct");

let product = ""

if (yearProduct == null) {
      const newProduct = {
        id: "",
        name: "yolo",
        price: "2" ,
        year:"2022",
        type: "type",
        collection: "23",
        description: "nose",
        imgUrl: "weno",
      };
      product = newProduct;
} else {
  const id= productName.value.toLowerCase();
      const newProduct = {
        id: id,
        name: productName.value ,
        price: "€"+ price.value + ".95" ,
        year: yearProduct.value ,
        type: arr[0].value ,
        collection: arr[1].value ,
        description: descripProduct.value ,
        imgUrl: this.producImage ,
      };
      product = newProduct;
}
      
      
      this.productsStore.newProduct(product);
      if (product.id !== ''){
      productName.value = "";
      price.value = "";
      yearProduct.value = "";
      typeProduct.value = "";
      collectionProduct.value = "";
      descripProduct.value = "";
    }
    },
    readImage(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length){
        return;
      }
      this.createImage(files[0])
    },
    createImage(file){
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        vm.producImage = e.target.result;
      }
      reader.readAsDataURL(file);
      return file
    }
  },
};
</script>
