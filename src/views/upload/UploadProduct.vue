<template>
  <main>
    <div class="add-multi-product">
      <div>
        <h1>Thêm nhiều sản phẩm</h1>
        <br />
        <label for="myfile">Chọn tệp csv: </label>
        <input type="file" id="myfile" name="myfile" />
      </div>
      <div class="btn-box">
        <button type="submit">Thêm</button>
      </div>
    </div>
    <div class="add-a-product-form">
      <form action="" method="post">
        <h1>Thêm một sản phẩm</h1>
        <div class="general-info">
          <div class="input-box">
            <label for="name">Tên sản phẩm</label>
            <br />
            <input v-model="name" type="text" id="name" placeholder="Nhập tên" />
          </div>
          <div class="input-box">
            <label for="technology">Công nghệ</label>
            <br />
            <select v-model="technology" id="technology">
              <option value="status1">LED</option>
              <option value="Status2">OLED</option>
            </select>
          </div>
          <div class="input-box">
            <label for="resolution">Độ phân giải</label>
            <br />
            <select v-model="resolution" id="type">
              <option value="status1">Full HD</option>
              <option value="Status2">4k</option>
              <option value="Status3">8k</option>
            </select>
          </div>
          <div class="input-box">
            <label for="type">Loại</label>
            <br />
            <select v-model="type" id="type">
              <option value="status1">Smart tv</option>
              <option value="Status2">Android tv</option>
              <option value="Status3">Google tv</option>
            </select>
          </div>
        </div>
        <div class="detail-info">
          <div class="detail-info-1">
            <label for="detail">Chi tiết mô tả</label>
            <br />
            <input type="text" class="detail" placeholder="Thêm chi tiết" />
            <input type="text" class="detail" placeholder="Thêm chi tiết" />
            <input type="text" class="detail" placeholder="Thêm chi tiết" />
            <input type="text" class="detail" placeholder="Thêm chi tiết" />
          </div>
          <div class="detail-info-1">
            <label for="images">Thêm đường dẫn ảnh</label>
            <br />
            <input type="text" class="images" placeholder="Link" />
            <input type="text" class="images" placeholder="Link" />
            <input type="text" class="images" placeholder="Link" />
            <input type="text" class="images" placeholder="Link" />
          </div>
          <div class="detail-info-2">
            <div class="detail-info-3">
              <label for="size-input">Kích thước - </label>
              <br />
              <input type="text" class="size-input" placeholder="0” (0 cm)" />
              <input type="text" class="size-input" placeholder="0” (0 cm)" />
              <input type="text" class="size-input" placeholder="0” (0 cm)" />
              <input type="text" class="size-input" placeholder="0” (0 cm)" />
            </div>
            <div class="detail-info-3">
              <label for="price-input">Giá tiền (vnđ)</label>
              <br />
              <input type="text" class="price-input" placeholder="0" />
              <input type="text" class="price-input" placeholder="0" />
              <input type="text" class="price-input" placeholder="0" />
              <input type="text" class="price-input" placeholder="0" />
            </div>
          </div>
        </div>
        <div class="btn-box">
          <button type="submit">Thêm</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "UploadProduct",
  data() {
    return {
      name: "",
      linkDetail: "",
      technology: "",
      resolution: "",
      type: "",
      descriptions: [],
      listImages: [],
      listOptions: [],
    };
  },
};
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
  font-family: sans-serif;
  box-sizing: border-box;
}

main {
  background-image: url(https://cdn.pixabay.com/photo/2015/09/28/21/32/the-palm-962785_1280.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 7.5px 15px;
}
.add-multi-product {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px;
  border: none;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
}

h1 {
  color: #da9d18;
  font-size: 20px;
}

.add-a-product-form {
  margin: 20px auto;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px;
  border: none;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
}
.general-info {
  margin-top: 20px;
}

.input-box {
  margin-bottom: 10px;
  margin-top: 10px;
}

.add-a-product-form input {
  height: 33px;
  width: 100%;
  margin: 10px 0px;
  padding: 7.5px 15px;
  background-color: rgba(116, 113, 113, 0.5);

  border: 1px solid #cccccc;
  outline: none;
  font-size: 16px;

  color: white;
}

.add-a-product-form select {
  height: 33px;
  width: 100%;
  margin: 10px 0px;
  padding: 7.5px 15px;
  background-color: rgba(116, 113, 113, 0.5);

  border: 1px solid #cccccc;
  outline: none;
  font-size: 16px;

  color: white;
}

.detail-info {
  display: flex;
  flex-direction: row;
}

.detail-info-1 {
  width: 40%;
  margin: 10px;
}

.detail-info-2 {
  width: 20%;
  display: flex;
  flex-direction: row;
  border: 1px solid #cccccc;
}
.detail-info-3 {
  margin: 10px;
}

.btn-box {
  text-align: right;
  margin-top: 10px;
}
.btn-box button {
  padding: 7.5px 15px;
  width: 150px;
  border-radius: 2px;
  background-color: #009999;
  color: #ffffff;
  border: none;
  outline: none;
}
</style>
