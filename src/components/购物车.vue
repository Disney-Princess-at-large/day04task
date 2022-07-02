<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="isAll"/>全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="(item,index) in list" :key="item.id">
        <td><input type="checkbox" v-model="item.isBuy"/></td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td><button @click="cutFn(index)">-</button><input type="text" v-model.number="item.count "/><button @click="addFn(index)">+</button></td>
        <td>{{item.price * item.count}}</td>
        <td><button @click="del(index)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="delSelect">删除选中商品</button>
    <button @click="delAll">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数：{{allSelect}}</p>
      <p>总价：{{sumPrice}}</p>
    </div>
  </div>
</template>

<script>

  export default {
    name:"ThreeTest",
    data() {
      return {
        list: [
          { id: 1, name: "奔驰", price:360000, count:0, isBuy: false},
          { id: 2, name: "宝马", price:380000, count:0, isBuy: false},
          { id: 3, name: "奥迪", price:310000, count:0, isBuy: false},
        ],
      };
    },
    methods: {
      //添加数量
      addFn(index){
        this.list[index].count++;
      },
      //减少数量
      cutFn(index){
        if(this.list[index].count <=0) return this.list[index].count =0
        this.list[index].count--;
      },
      //删除单个数据
      del(index) {
        // 删除按钮 - 得到索引, 删除数组里元素
        this.list.splice(index, 1);
      },
      //删除所选商品
      delSelect(){
        this.list = this.list.filter((item) => item.isBuy == false);
      },
      //清空购物车
      delAll(){
        this.list.splice(0)
      }
    },
    computed:{       
      isAll:{
         //  全选框 - 选中状态(true/false)
        set(val){          
          this.list.forEach(item => item.isBuy = val);
        },
        //  统计小选框状态 ->  全选状态
        // every口诀: 查找数组里"不符合"条件, 直接原地返回false
        get(){
          return this.list.every((item) => item.isBuy === true);
        }
      },
      allSelect(){          
        let all = this.list.filter((item) => item.isBuy == true);
          return all.reduce((pre,cut) => {
            return (pre +=cut.count)
          },0)                       
      },
      sumPrice(){
        let all = this.list.filter((item) => item.isBuy == true);
            return all.reduce((pre,cut) => {
              return (pre +=cut.count * cut.price)
            },0)        
      }
    }
}
</script>

<style>
  #app {
    width: 600px;
    margin: 10px auto;
  }

  .tb {
    border-collapse: collapse;
    width: 100%;
  }

  .tb th {
    background-color: #0094ff;
    color: white;
  }

  .tb td,
  .tb th {
    padding: 5px;
    border: 1px solid black;
    text-align: center;
  }

  .add {
    padding: 5px;
    border: 1px solid black;
    margin-bottom: 10px;
  }
</style>
