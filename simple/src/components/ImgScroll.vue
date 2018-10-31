    <template>  
      <div class="slide">  
        <div class="slideshow">  
          <ul>  
          <transition-group tag="ul" name="image">
            <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">  
              <a href="#">  
                <img :src='img'>  
              </a>  
            </li>  
          </transition-group>
          </ul>  
        </div>  
         <div class="bar">  
          <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }" :key="index" @click="change(index)"></span>  
        </div>  
      </div>  
    </template>
    <script>
      export default {  
        data () {  
          return {  
            mark: 0, //比对图片索引的变量  
            imgArray: [  
               require('../assets/img/1.png'),  
               require('../assets/img/2.png'),  
               require('../assets/img/3.png'),  
               require('../assets/img/4.png')  
            ]  
          }  
        },  
        methods: {  
          autoPlay () {  
            this.mark++;  
            if (this.mark === 4) { //当遍历到最后一张图片置零  
              this.mark = 0  
            }  
          },  
          play () {  
            setInterval(this.autoPlay, 4000)  
          },  
          change (i) {
            console.log(i);  
            this.mark = i  
          }  
        },  
        created () {  
          this.play()  
        }  
      }  
    </script>
    <style scoped>  
      * {  
        margin: 0;  
        padding: 0;  
        list-style: none;  
      }  
      .slide {  
        width: 80%;  
        height: 320px;  
        margin: 20px auto 10px;  
        overflow: hidden;  
        position: relative;  
      }  
      .slideshow {  
        width: 100%;  
        height: 320px;  
      }  
      li {  
        position: absolute;
        width: 100%;    
      }  
      img {  
        width: 100%;  
        height: 320px;  
      }  
      .bar {  
        position: absolute;  
        width: 100%;  
        bottom: 10px;  
        margin: 0 auto;  
        z-index: 10;  
        text-align: center;  
      }  
      .bar span {  
        width: 20px;  
        height: 5px;  
        border: 1px solid;  
        background: white;  
        display: inline-block;  
        margin-right: 10px;  
      }  
      .active {  
        background: red !important;  
      }  
      .image-enter-active {  
        transform: translateX(0);  
        transition: all 1.5s ease;  
      }  
      .image-leave-active {  
        transform: translateX(-100%);  
        transition: all 1.5s ease;  
      }  
      .image-enter {  
        transform: translateX(100%);  
      }  
      .image-leave {  
        transform: translateX(0);  
      }  
    </style>    